import { Module } from '@nestjs/common';

import { CardsController } from './cards.controller';
import { CardService } from './cards.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Card } from './cards.entity';
import { Deck } from '../decks/decks.entity';

@Module({
  imports: [SequelizeModule.forFeature([Card, Deck])],
  controllers: [CardsController],
  providers: [CardService],
  exports: [],
})
export class CardModule {}
