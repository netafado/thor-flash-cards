import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DecksModule } from '../decks/decks.module';

/**
 * NestJS: opnetive fremawork
 * controller: routes and request handling
 * service: business logic and data handling
 * module: encapsulates controllers and providers
 *  */

@Module({
  imports: [DecksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
