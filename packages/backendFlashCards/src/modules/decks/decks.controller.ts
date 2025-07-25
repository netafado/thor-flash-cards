import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Authentication, CognitoUser } from '@nestjs-cognito/auth';
import { DecksService } from './decks.service';
import type { DeckModel } from './decks.model';
import type { CognitoJwtPayload } from '@nestjs-cognito/core';

@Controller('decks')
@Authentication()
export class DecksController {
  constructor(private readonly decksService: DecksService) {}

  @Get()
  async getDecksByUserId(
    @CognitoUser('sub') cognitoUser: string
  ): Promise<DeckModel[]> {
    const decks = await this.decksService.getDecksByUserId(cognitoUser);
    return decks;
  }

  @Get(':id')
  async getDeckById(@Param('id') deckId: string): Promise<DeckModel> {
    const deck = await this.decksService.getDeckById(deckId);
    if (!deck) {
      throw new Error(`Deck with id ${deckId} not found`);
    }
    return deck;
  }

  @Post()
  async createDeck(
    @Body()
    deckData: DeckModel,
    @CognitoUser(['groups', 'email', 'username', 'sub'])
    cognitoUser: CognitoJwtPayload
  ): Promise<DeckModel> {
    console.log('createDeck:', deckData);
    const thisDeck = await this.decksService.createDeck({
      ...deckData,
      user_id: cognitoUser.sub,
    });
    return thisDeck;
  }
}
