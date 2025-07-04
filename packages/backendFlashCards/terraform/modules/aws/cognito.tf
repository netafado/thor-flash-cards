# File: packages/backendFlashCards/terraform/modules/aws/cognito.tf
# This file contains the AWS Cognito User Pool and User Pool Client configuration for the Flashcards
# application. It sets up the user pool with password policies, auto-verification of email

resource "aws_cognito_user_pool" "flashcards_user_pool" {
  name = var.project_name

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

# This user pool client is used to interact with the Cognito User Pool.
resource "aws_cognito_user_pool_client" "flashcards_app_client" {
  name         = var.project_name
  user_pool_id = aws_cognito_user_pool.flashcards_user_pool.id

  generate_secret = false

  # Enable explicit authentication flows
  # This allows the client to use the authentication flows specified below
  explicit_auth_flows = [
    "ALLOW_USER_PASSWORD_AUTH",
    "ALLOW_ADMIN_USER_PASSWORD_AUTH",
    "ALLOW_REFRESH_TOKEN_AUTH",
    "ALLOW_USER_SRP_AUTH",
  ]

  # OAuth 2.0 settings
  # Adjust the callback and logout URLs to match your application's URLs
  callback_urls = [
    "http://localhost:3000/callback" # adjust to your app's URL
  ]

  logout_urls = [
    "http://localhost:3000/logout"
  ]

  # OAuth 2.0 settings
  # These settings are necessary for the client to support OAuth 2.0 flows
  allowed_oauth_flows_user_pool_client = true
  allowed_oauth_flows                  = ["code"]
  allowed_oauth_scopes                 = ["email", "openid", "profile"]
  supported_identity_providers         = ["COGNITO"]

  prevent_user_existence_errors = "ENABLED"
}

