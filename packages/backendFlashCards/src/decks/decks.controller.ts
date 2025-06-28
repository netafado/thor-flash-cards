import { Controller, Get } from '@nestjs/common';

@Controller('decks')
export class DecksController {
  @Get()
  getAllDecks() {
    return [
      {
        id: '1',
        name: 'Sample Deck',
        description: 'This is a sample deck of flashcards',
        cards: ['Card 1', 'Card 2', 'Card 3'],
      },
    ];
  }

  @Get(':id')
  getDeckById() {
    return {
      id: '1',
      name: 'Sample Deck',
      description: 'This is a sample deck of flashcards',
      cards: ['Card 1', 'Card 2', 'Card 3'],
    };
  }
}
// This code defines a simple controller for handling requests related to decks in a NestJS application.
