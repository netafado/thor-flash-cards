# Security group for NAT instance
resource "aws_security_group" "nat_instance_sg" {
  name        = "${var.project_name}-nat-instance-sg"
  description = "Security group for NAT instance"
  vpc_id      = aws_vpc.main.id

  # Allow HTTP traffic from private subnets
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = [aws_subnet.private_a.cidr_block, aws_subnet.private_b.cidr_block]
  }

  # Allow HTTPS traffic from private subnets
  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = [aws_subnet.private_a.cidr_block, aws_subnet.private_b.cidr_block]
  }

  # Allow SSH (optional, for management)
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["${var.developer_ip}/32"]
  }

  # Allow all outbound traffic
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = merge(local.tags, {
    Name = "${var.project_name}-nat-instance-sg"
  })
}

# Data source to get the latest Amazon Linux 2 AMI with NAT capabilities
data "aws_ami" "amazon_linux_nat" {
  most_recent = true
  owners      = ["amazon"]

  filter {
    name   = "name"
    values = ["amzn2-ami-hvm-*-x86_64-gp2"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }

  filter {
    name   = "state"
    values = ["available"]
  }
}

# NAT Instance
resource "aws_instance" "nat_instance" {
  ami                    = data.aws_ami.amazon_linux_nat.id
  instance_type          = "t3.nano"  # Very cheap option
  subnet_id              = aws_subnet.public_a.id
  vpc_security_group_ids = [aws_security_group.nat_instance_sg.id]
  
  # Disable source/destination check (required for NAT)
  source_dest_check = false
  
  # Associate with public IP
  associate_public_ip_address = true

  # User data script to configure NAT functionality
  user_data = base64encode(<<-EOF
    #!/bin/bash
    yum update -y
    echo 'net.ipv4.ip_forward = 1' >> /etc/sysctl.conf
    sysctl -p /etc/sysctl.conf
    iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
    iptables -A FORWARD -i eth0 -o eth0 -m state --state RELATED,ESTABLISHED -j ACCEPT
    iptables -A FORWARD -i eth0 -o eth0 -j ACCEPT
    service iptables save
  EOF
  )

  tags = merge(local.tags, {
    Name = "${var.project_name}-nat-instance"
  })
}

# Elastic IP for NAT instance (optional but recommended)
resource "aws_eip" "nat_instance_eip" {
  instance = aws_instance.nat_instance.id
  domain   = "vpc"

  tags = merge(local.tags, {
    Name = "${var.project_name}-nat-instance-eip"
  })

  depends_on = [aws_internet_gateway.main]
}