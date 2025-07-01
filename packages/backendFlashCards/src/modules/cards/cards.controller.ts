import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCardDto, CreateCardResponseDto } from './dto/create-card-dto';
import { CardService } from './cards.service';
import { Authentication } from '@nestjs-cognito/auth';

@Authentication()
@Controller('cards')
export class CardsController {
  constructor(private readonly cardService: CardService) {}

  @Get(':deck_id')
  async findAll(
    @Param('deck_id') deckId: string
  ): Promise<CreateCardResponseDto[]> {
    const result = await this.cardService.getAllCards(deckId);
    return result;
  }

  @Post()
  async createCard(
    @Body()
    createCardDto: //**
    // Transform payload objects#
    //Payloads coming in over the network are plain JavaScript objects.
    // The ValidationPipe can automatically transform payloads to be objects typed according
    // to their DTO classes. To enable auto-transformation, set transform to true.
    //  */
    CreateCardDto
  ): Promise<CreateCardResponseDto> {
    const cardResult = await this.cardService.createCard({
      ...createCardDto,
      deck_id: createCardDto.deckId,
    });
    return cardResult;
  }
}
