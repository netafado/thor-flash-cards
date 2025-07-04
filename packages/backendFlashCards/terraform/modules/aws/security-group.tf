resource "aws_security_group" "rds_sg" {
  name   = "rds-sg"
  vpc_id = aws_vpc.main.id

  description = "Allow Postgres traffic"

  ingress {
    protocol    = "tcp"
    from_port   = 5432
    to_port     = 5432
    cidr_blocks = ["10.0.0.0/16"]
  }

  # Allow Lambda to access RDS
  ingress {
    protocol        = "tcp"
    from_port       = 5432
    to_port         = 5432
    security_groups = [aws_security_group.lambda_sg.id]
    description     = "Lambda access"
  }

  # optional developer machine access
  ingress {
    protocol    = "tcp"
    from_port   = 5432
    to_port     = 5432
    cidr_blocks = ["${var.developer_ip}/32"]
    description = "Dev laptop access"
  }

  tags = merge(local.tags, {
    Name = "flashcards-rds-sg"
  })

  egress {
    protocol    = "-1"
    from_port   = 0
    to_port     = 0
    cidr_blocks = ["0.0.0.0/0"]
  }
}