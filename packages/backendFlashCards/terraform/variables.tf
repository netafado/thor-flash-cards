# variable "google_client_id" {
#   description = "Google OAuth client ID"
#   type        = string
# }

# variable "google_client_secret" {
#   description = "Google OAuth client secret"
#   type        = string
#   sensitive   = true
# }

variable "aws_region" {
  description = "AWS region for the resources"
  type        = string
  default     = "us-east-1"
}

variable "tag_name" {
  description = "Tha main tag name for the resources"
  type        = string
}

variable "project_name" {
  description = "The name of the project"
  type        = string
  default     = "flashcards"
}