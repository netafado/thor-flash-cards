import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './infrastructure/user.entity';

@Module({
  imports: [SequelizeModule.forFeature([User])],
})
export class UserModule {}
