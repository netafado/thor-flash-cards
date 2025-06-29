import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import type {
  CreateCardDto,
  CreateCardResponseDto,
} from './dto/create-card-dto';
import { CardService } from './cards.service';

@Controller('cards')
export class CardsController {
  constructor(private readonly cardService: CardService) {}

  @Get(':deck_id')
  async findAll(
    @Param('deck_id') deckId: string
  ): Promise<CreateCardResponseDto[]> {
    if (!deckId) {
      throw new Error('User ID is required');
    }
    const result = await this.cardService.getAllCards(deckId);
    return result;
  }

  @Post(':deck_id')
  async createCard(
    @Param('deck_id') deckId: string,
    @Body()
    card: CreateCardDto
  ): Promise<CreateCardResponseDto> {
    const cardResult = await this.cardService.createCard({
      ...card,
      deck_id: card.deckId || deckId,
      user_id: card.userId,
    });
    return cardResult;
  }
}
