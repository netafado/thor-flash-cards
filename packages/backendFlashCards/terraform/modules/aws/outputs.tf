
output "cognito_user_pool_id" {
  value       = aws_cognito_user_pool.flashcards_user_pool.id
  sensitive   = true
  description = "description"
  depends_on  = []
}

output "cognito_user_pool_client_id" {
  value       = aws_cognito_user_pool_client.flashcards_app_client.id
  sensitive   = true
  description = "description"
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