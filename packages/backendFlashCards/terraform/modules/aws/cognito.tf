provider "aws" {
  region = "us-east-1" # change to your desired region
}

resource "aws_cognito_user_pool" "flashcards_user_pool" {
  name = "my-app-user-pool"

  tags = local.tags

  password_policy {
    minimum_length    = 8
    require_lowercase = true
    require_uppercase = true
    require_numbers   = true
    require_symbols   = true
  }

  auto_verified_attributes = ["email"]

  mfa_configuration = "OFF"

  account_recovery_setting {
    recovery_mechanism {
      name     = "verified_email"
      priority = 1
    }
  }
}

resource "aws_cognito_user_pool_client" "flashcards_app_client" {
  name         = var.project_name
  user_pool_id = aws_cognito_user_pool.flashcards_user_pool.id

  generate_secret = false

  explicit_auth_flows = [
    "ALLOW_USER_PASSWORD_AUTH",
    "ALLOW_REFRESH_TOKEN_AUTH",
    "ALLOW_USER_SRP_AUTH"
  ]

  callback_urls = [
    "http://localhost:3000/callback" # adjust to your app's URL
  ]

  logout_urls = [
    "http://localhost:3000/logout"
  ]

  allowed_oauth_flows_user_pool_client = true
  allowed_oauth_flows                  = ["code"]
  allowed_oauth_scopes                 = ["email", "openid", "profile"]
  supported_identity_providers         = ["COGNITO"]

  prevent_user_existence_errors = "ENABLED"
}

resource "aws_cognito_user_pool_domain" "flashcards_user_pool_domain" {
  domain       = "my-app-user-pool-domain-12345" # must be globally unique
  user_pool_id = aws_cognito_user_pool.flashcards_user_pool.id
}
