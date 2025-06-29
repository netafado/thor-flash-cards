import { Module } from '@nestjs/common';
import { DecksService } from './decks.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { DecksController } from './decks.controller';
import { Deck } from './decks.entity';
import { User } from '../users/infrastructure/user.entity';
import { Card } from '../cards/cards.entity';

@Module({
  imports: [SequelizeModule.forFeature([User, Card, Deck])],
  providers: [DecksService],
  controllers: [DecksController],
})
export class DecksModule {}
