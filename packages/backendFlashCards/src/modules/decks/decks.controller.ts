import { Body, Controller, Get, Post } from '@nestjs/common';
import { Authentication, CognitoUser } from '@nestjs-cognito/auth';
import { DecksService } from './decks.service';
import { DeckModel } from './decks.model';
import type { CognitoJwtPayload } from '@nestjs-cognito/core';

@Controller('decks')
@Authentication()
export class DecksController {
  constructor(private readonly decksService: DecksService) {}

  @Get()
  async getDecksByUserId(
    @CognitoUser('sub') cognitoUser: string
  ): Promise<DeckModel[]> {
    // Runtime O(n) complexity: O(n)
    // where n is the number of decks for the user
    // if can be optimized by using a database query with a filter
    // and make it O(1) complexity
    const decks = await this.decksService.getDecksByUserId(cognitoUser);
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
    },
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
