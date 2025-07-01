
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