import { Injectable, Param } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import type { CreateTagDto, CreateTagResponseDto } from './dto/createTagDto';
@Injectable()
export class TagsService {
  constructor(private dataBase: Sequelize) {}

  getAllTags(@Param('userId') userId: string) {
    return this.dataBase.models.Tag.findAll({
      where: { user_id: userId },
      order: [['created_at', 'DESC']],
    });
  }

  async createTag(tag: CreateTagDto): Promise<CreateTagResponseDto> {
    try {
      const tagResult = await this.dataBase.models.Tags.create({
        name: tag.name,
        user_id: tag.userId,
      });
      return tagResult.toJSON() as CreateTagResponseDto;
    } catch (error) {
      console.error('Error creating tag:', error);
      throw new Error('Failed to create tag');
    }
  }

  deleteTag(tagId: number) {
    return `Tag with ID ${tagId} deleted successfully`;
  }
}
