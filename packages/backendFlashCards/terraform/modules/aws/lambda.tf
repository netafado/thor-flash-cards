resource "aws_iam_role" "lambda_execution_role" {
  name = "${var.project_name}-lambda-execution-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      }
    ]
  })

  tags = local.tags
}

resource "aws_iam_role_policy_attachment" "lambda_basic_execution" {
  role       = aws_iam_role.lambda_execution_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

resource "aws_iam_role_policy_attachment" "lambda_vpc_execution" {
  role       = aws_iam_role.lambda_execution_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaVPCAccessExecutionRole"
}

# Custom policy for RDS and Cognito access
resource "aws_iam_policy" "lambda_custom_policy" {
  name        = "${var.project_name}-lambda-custom-policy"
  description = "Custom policy for Lambda to access RDS and Cognito"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "rds:DescribeDBInstances",
          "rds:Connect"
        ]
        Resource = "*"
      },
      {
        Effect = "Allow"
        Action = [
          "cognito-idp:AdminInitiateAuth",
          "cognito-idp:AdminCreateUser",
          "cognito-idp:AdminSetUserPassword",
          "cognito-idp:AdminUpdateUserAttributes",
          "cognito-idp:AdminGetUser",
          "cognito-idp:AdminDeleteUser",
          "cognito-idp:ListUsers",
          "cognito-idp:SignUp",
          "cognito-idp:ConfirmSignUp",
          "cognito-idp:ResendConfirmationCode"
        ]
        Resource = aws_cognito_user_pool.flashcards_user_pool.arn
      }
    ]
  })

  tags = local.tags
}
resource "aws_iam_role_policy_attachment" "lambda_custom_policy" {
  role       = aws_iam_role.lambda_execution_role.name
  policy_arn = aws_iam_policy.lambda_custom_policy.arn
}

# Security group for Lambda function
resource "aws_security_group" "lambda_sg" {
  name        = "${var.project_name}-lambda-sg"
  description = "Security group for Lambda function"
  vpc_id      = aws_vpc.main.id

  # Allow outbound traffic to RDS
  egress {
    from_port   = 5432
    to_port     = 5432
    protocol    = "tcp"
    cidr_blocks = [aws_vpc.main.cidr_block]
  }

  # Allow HTTPS outbound for external API calls (including Cognito)
  egress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Allow HTTP outbound for external API calls
  egress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Allow DNS resolution (TCP)
  egress {
    from_port   = 53
    to_port     = 53
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Allow DNS resolution (UDP)
  egress {
    from_port   = 53
    to_port     = 53
    protocol    = "udp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = merge(local.tags, {
    Name = "${var.project_name}-lambda-sg"
  })
}

# Lambda function
resource "aws_lambda_function" "flashcards_api" {
  filename         = var.lambda_zip_file
  function_name    = "${var.project_name}-api"
  role            = aws_iam_role.lambda_execution_role.arn
  handler         = "main.handler"
  runtime         = "nodejs20.x"
  timeout         = 60  # Increase timeout for Cognito operations
  memory_size     = 1024

  # VPC configuration to access RDS
  vpc_config {
    subnet_ids         = [aws_subnet.private_a.id, aws_subnet.private_b.id]
    security_group_ids = [aws_security_group.lambda_sg.id]
  }

  environment {
    variables = {
      NODE_ENV                = "production"
      DATABASE_URL            = aws_db_instance.postgres.address
      DB_USERNAME             = var.rds_username
      DB_PASSWORD             = var.rds_password
      DB_NAME                 = var.rds_db_name
      DB_PORT                 = "5432"
      COGNITO_USER_POOL_ID    = aws_cognito_user_pool.flashcards_user_pool.id
      COGNITO_CLIENT_ID       = aws_cognito_user_pool_client.flashcards_app_client.id
      COGNITO_REGION          = var.aws_region
      # Add these for better AWS SDK performance
      AWS_NODEJS_CONNECTION_REUSE_ENABLED = "1"
      AWS_SDK_LOAD_CONFIG = "1"
      # Add timeout settings
      AWS_SDK_JS_SUPPRESS_MAINTENANCE_MODE_MESSAGE = "1"
    }
  }

  depends_on = [
    aws_iam_role_policy_attachment.lambda_basic_execution,
    aws_iam_role_policy_attachment.lambda_vpc_execution,
    aws_iam_role_policy_attachment.lambda_custom_policy,
    aws_cloudwatch_log_group.lambda_logs,
  ]

  tags = local.tags
}

# CloudWatch log group for Lambda
resource "aws_cloudwatch_log_group" "lambda_logs" {
  name              = "/aws/lambda/${var.project_name}-api"
  retention_in_days = 14

  tags = local.tags
}

# API Gateway for Lambda
resource "aws_apigatewayv2_api" "flashcards_api" {
  name          = "${var.project_name}-api"
  protocol_type = "HTTP"
  description   = "API Gateway for FlashCards Lambda function"

  cors_configuration {
    allow_credentials = false
    allow_headers     = ["content-type", "x-amz-date", "authorization", "x-api-key", "x-amz-security-token"]
    allow_methods     = ["*"]
    allow_origins     = ["*"]
    max_age          = 86400
  }

  tags = local.tags
}

# API Gateway integration
resource "aws_apigatewayv2_integration" "flashcards_integration" {
  api_id           = aws_apigatewayv2_api.flashcards_api.id
  integration_type = "AWS_PROXY"
  integration_uri  = aws_lambda_function.flashcards_api.invoke_arn
}

# API Gateway route
resource "aws_apigatewayv2_route" "flashcards_route" {
  api_id    = aws_apigatewayv2_api.flashcards_api.id
  route_key = "ANY /{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.flashcards_integration.id}"
}

# API Gateway stage
resource "aws_apigatewayv2_stage" "flashcards_stage" {
  api_id      = aws_apigatewayv2_api.flashcards_api.id
  name        = "prod"
  auto_deploy = true

  access_log_settings {
    destination_arn = aws_cloudwatch_log_group.api_gateway_logs.arn
    format = jsonencode({
      requestId      = "$context.requestId"
      ip             = "$context.identity.sourceIp"
      caller         = "$context.identity.caller"
      user           = "$context.identity.user"
      requestTime    = "$context.requestTime"
      httpMethod     = "$context.httpMethod"
      resourcePath   = "$context.resourcePath"
      status         = "$context.status"
      protocol       = "$context.protocol"
      responseLength = "$context.responseLength"
    })
  }

  tags = local.tags
}

# CloudWatch log group for API Gateway
resource "aws_cloudwatch_log_group" "api_gateway_logs" {
  name              = "/aws/apigateway/${var.project_name}-api"
  retention_in_days = 14

  tags = merge(local.tags, {
    Name = "${var.project_name}-api-gateway-logs"
  })
}

# Give API Gateway permission to invoke Lambda
resource "aws_lambda_permission" "api_gateway_invoke" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.flashcards_api.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.flashcards_api.execution_arn}/*/*"
}

#  VPC Endpoint for Cognito Identity Provider
# resource "aws_vpc_endpoint" "cognito_idp" {
#   vpc_id              = aws_vpc.main.id
#   service_name        = "com.amazonaws.${var.aws_region}.cognito-idp"
#   vpc_endpoint_type   = "Interface"
#   subnet_ids          = [aws_subnet.private_a.id, aws_subnet.private_b.id]
#   security_group_ids  = [aws_security_group.vpc_endpoint_sg.id]
  
#   policy = jsonencode({
#     Version = "2012-10-17"
#     Statement = [
#       {
#         Effect = "Allow"
#         Principal = "*"
#         Action = [
#           "cognito-idp:*"
#         ]
#         Resource = "*"
#       }
#     ]
#   })

#   tags = merge(local.tags, {
#     Name = "${var.project_name}-cognito-idp-endpoint"
#   })
# }

# Security group for VPC endpoints
resource "aws_security_group" "vpc_endpoint_sg" {
  name        = "${var.project_name}-vpc-endpoint-sg"
  description = "Security group for VPC endpoints"
  vpc_id      = aws_vpc.main.id

  ingress {
    from_port       = 443
    to_port         = 443
    protocol        = "tcp"
    security_groups = [aws_security_group.lambda_sg.id]
  }

  tags = merge(local.tags, {
    Name = "${var.project_name}-vpc-endpoint-sg"
  })
}

#  Create NAT Gateway for Lambda internet access
resource "aws_eip" "nat_gateway" {
  domain = "vpc"
  
  tags = merge(local.tags, {
    Name = "${var.project_name}-nat-gateway-eip"
  })
}

resource "aws_nat_gateway" "main" {
  allocation_id = aws_eip.nat_gateway.id
  subnet_id     = aws_subnet.public_a.id

  tags = merge(local.tags, {
    Name = "${var.project_name}-nat-gateway"
  })

  depends_on = [aws_internet_gateway.main]
}

# Update private route table to use NAT Gateway
resource "aws_route_table" "private" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block = "0.0.0.0/0"
    nat_gateway_id = aws_nat_gateway.main.id
  }

  tags = merge(local.tags, {
    Name = "${var.project_name}-private-rt"
  })
}

resource "aws_route_table_association" "private_a" {
  subnet_id      = aws_subnet.private_a.id
  route_table_id = aws_route_table.private.id
}

resource "aws_route_table_association" "private_b" {
  subnet_id      = aws_subnet.private_b.id
  route_table_id = aws_route_table.private.id
}