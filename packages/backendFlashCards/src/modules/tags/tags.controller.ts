import { Controller, Get, Param, Post } from '@nestjs/common';
import { TagsService } from './tags.service';
import { CreateTagResponseDto } from './dto/createTagDto';
@Controller('tags')
export class TagsController {
  constructor(private readonly tagService: TagsService) {}
  @Get()
  findAll(@Param('userId') userId: string) {
    return this.tagService.getAllTags(userId);
  }

  @Post()
  async createTag(
    @Param('tag') tag: { name: string; userId: number }
  ): Promise<CreateTagResponseDto> {
    return await this.tagService.createTag(tag);
  }
}
