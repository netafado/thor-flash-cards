import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DecksService } from './decks.service';
import { DeckModel } from './decks.model';

@Controller('decks')
export class DecksController {
  constructor(private readonly decksService: DecksService) {}

  @Get(':user_id')
  async getDecksByUserId(
    @Param('user_id') userId: string
  ): Promise<DeckModel[]> {
    console.log('Fetching decks for user ID:', userId);
    const decks = await this.decksService.getDecksByUserId(userId);
    return decks;
  }

  @Post()
  async createDeck(
    @Body()
    deckData: {
      user_id: string;
      background_color: string;
      repetions_days: string;
      title: string;
    }
  ): Promise<DeckModel> {
    const thisDeck = await this.decksService.createDeck(deckData);
    return thisDeck;
  }
}
