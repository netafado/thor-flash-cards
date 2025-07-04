resource "aws_db_instance" "postgres" {
  identifier              = "flashcards-db"
  allocated_storage       = 20
  engine                  = "postgres"
  engine_version          = "15"
  instance_class          = "db.t3.micro"
  username                = var.rds_username
  password                = var.rds_password
  db_name                 = var.rds_db_name
  skip_final_snapshot     = true
  publicly_accessible     = true

  db_subnet_group_name    = aws_db_subnet_group.rds_subnets_public.name
  vpc_security_group_ids  = [aws_security_group.rds_sg.id]

  backup_retention_period = 7

  tags = merge(local.tags, {
    Name = "${var.project_name}-rds"
  })
}