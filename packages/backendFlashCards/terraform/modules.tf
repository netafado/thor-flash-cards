module "aws" {
  source = "./modules/aws"
  tag_name = var.tag_name
  aws_region = var.aws_region
  project_name = var.project_name 
}