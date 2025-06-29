import { Module } from '@nestjs/common';
import { TagsController } from './tags.controller';
import { TagsService } from './tags.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../users/infrastructure/user.entity';
import { Tag } from './tag.model';
@Module({
  imports: [SequelizeModule.forFeature([User, Tag])],
  controllers: [TagsController],
  providers: [TagsService],
})
export class TagsModule {}
