import { Injectable, Param } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import type {
  CreateCardDtoDataBase,
  CreateCardResponseDto,
} from './dto/create-card-dto';
@Injectable()
export class CardService {
  constructor(private dataBase: Sequelize) {}

  async getAllCards(
    @Param('deck_id') deckId: string
  ): Promise<CreateCardResponseDto[]> {
    const result = await this.dataBase.models.Card.findAll({
      where: { deck_id: deckId },
      order: [['created_at', 'DESC']],
    });

    return result.map((tag) => tag.toJSON() as CreateCardResponseDto);
  }

  async createCard(
    card: CreateCardDtoDataBase
  ): Promise<CreateCardResponseDto> {
    try {
      const tagResult = await this.dataBase.models.Card.create(card);
      return tagResult.toJSON() as CreateCardResponseDto;
    } catch (error) {
      console.error('Error creating card:', error);
      throw new Error('Failed to create tag');
    }
  }

  deleteTag(tagId: number) {
    return `Tag with ID ${tagId} deleted successfully`;
  }
}
