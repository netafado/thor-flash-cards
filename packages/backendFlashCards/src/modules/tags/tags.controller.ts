import { Body, Controller, Get, Post } from '@nestjs/common';
import { TagsService } from './tags.service';
import type { CreateTagResponseDto, CreateTagDto } from './dto/createTagDto';
import { Authentication, CognitoUser } from '@nestjs-cognito/auth';
import type { CognitoJwtPayload } from '@nestjs-cognito/core';

@Controller('tags')
@Authentication()
export class TagsController {
  constructor(private readonly tagService: TagsService) {}

  @Get()
  async findAll(
    @CognitoUser('sub') userId: string
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
    tag: Pick<CreateTagDto, 'name'>,
    @CognitoUser(['groups', 'email', 'username', 'sub'])
    cognitoUser: CognitoJwtPayload
  ): Promise<CreateTagResponseDto> {
    return await this.tagService.createTag({
      ...tag,
      userId: cognitoUser.sub,
    });
  }
}
