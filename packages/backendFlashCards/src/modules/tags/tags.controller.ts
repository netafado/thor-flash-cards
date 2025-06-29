import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TagsService } from './tags.service';
import type { CreateTagResponseDto, CreateTagDto } from './dto/createTagDto';
@Controller('tags')
export class TagsController {
  constructor(private readonly tagService: TagsService) {}

  @Get(':user_id')
  async findAll(
    @Param('user_id') userId: string
  ): Promise<CreateTagResponseDto[]> {
    if (!userId) {
      throw new Error('User ID is required');
    }
    const result = await this.tagService.getAllTags(userId);
    return result;
  }

  @Post()
  async createTag(
    @Body()
    tag: CreateTagDto
  ): Promise<CreateTagResponseDto> {
    console.log('createTag:', tag);
    return await this.tagService.createTag(tag);
  }
}
