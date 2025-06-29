import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DecksModule } from '../modules/decks/decks.module';
import { TagsModule } from '../modules/tags/tags.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Deck } from '../modules/decks/decks.entity';
import { User } from '../modules/users/infrastructure/user.entity';
import { Card } from '../modules/cards/cards.entity';
import { Tag } from '../modules/tags/tag.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
      host: process.env.DATABASE_URL,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: false,
      logging: (msg: string) => console.log(msg),
      models: [Deck, User, Card, Tag],
    }),
    DecksModule,
    TagsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
