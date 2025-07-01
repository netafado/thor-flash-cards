
locals {
  tags = {
    Name = "${var.tag_name}"
    Environment = "development"
    Project = "FlashCards"
    Client = "isaiasfrancisco"
  }
}
