import { Body, Controller, Post } from '@nestjs/common';
import { Authentication, CognitoUser } from '@nestjs-cognito/auth';
import { DecksService } from './decks.service';
import { DeckModel } from './decks.model';
import type { CognitoJwtPayload } from '@nestjs-cognito/core';

@Controller('decks')
@Authentication()
export class DecksController {
  constructor(private readonly decksService: DecksService) {}

  async getDecksByUserId(
    @CognitoUser('sub') cognitoUser: CognitoJwtPayload
  ): Promise<DeckModel[]> {
    const decks = await this.decksService.getDecksByUserId(cognitoUser.sub);
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
    const thisDeck = await this.decksService.createDeck({
      ...deckData,
      user_id: cognitoUser.sub,
    });
    return thisDeck;
  }
}
