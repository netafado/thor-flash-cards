output "cognito_user_pool_id" {
  value       = aws_cognito_user_pool.flashcards_user_pool.id
  sensitive   = true
  description = "Cognito User Pool ID"
  depends_on  = []
}

output "cognito_user_pool_client_id" {
  value       = aws_cognito_user_pool_client.flashcards_app_client.id
  sensitive   = true
  description = "Cognito User Pool Client ID"
  depends_on  = []
}

output "rds_endpoint" {
  description = "The endpoint of the RDS Postgres"
  value       = aws_db_instance.postgres.address
}

output "rds_security_group_id" {
  value = aws_security_group.rds_sg.id
}

output "vpc_id" {
  value = aws_vpc.main.id
}

# Lambda outputs
output "lambda_function_arn" {
  description = "ARN of the Lambda function"
  value       = aws_lambda_function.flashcards_api.arn
}

output "lambda_function_name" {
  description = "Name of the Lambda function"
  value       = aws_lambda_function.flashcards_api.function_name
}

output "api_gateway_url" {
  description = "URL of the API Gateway"
  value       = aws_apigatewayv2_stage.flashcards_stage.invoke_url
}

output "lambda_security_group_id" {
  description = "Security group ID for Lambda"
  value       = aws_security_group.lambda_sg.id
}
