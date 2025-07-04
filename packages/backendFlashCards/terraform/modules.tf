module "aws" {
  source = "./modules/aws"
  tag_name = var.tag_name
  aws_region = var.aws_region
  project_name = var.project_name 
  rds_username = var.rds_username
  rds_password = var.rds_password
  rds_db_name = var.rds_db_name
  vpc_cidr = var.vpc_cidr
  developer_ip = var.developer_ip
}