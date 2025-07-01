
resource "aws_vpc" "eks-vpc" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_support   = true
  enable_dns_hostnames = true
  tags = merge(
    local.tags,
    {
      Name = "${var.tag_name}-vpc"
    }
  )
}