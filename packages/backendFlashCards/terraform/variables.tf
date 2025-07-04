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

variable "rds_password" {
  description = "The password for the RDS database user"
  type        = string
  sensitive   = true
}

variable "rds_username" {
  description = "The username for the RDS database"
  type        = string
} 

variable "rds_db_name" {
  description = "The name of the RDS database"
  type        = string
}

variable "vpc_cidr" {
  default = "10.0.0.0/16"
}


variable "developer_ip" {
  description = "IP address of the developer for security group rules"
  type        = string
}
