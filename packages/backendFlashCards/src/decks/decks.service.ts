import { Injectable } from '@nestjs/common';

type Deck = {
  id: string;
  name: string;
  description: string;
  cards: string[]; // Array of card IDs or objects
};

@Injectable()
export class DecksService {
  // This service will contain methods to handle business logic related to decks
  // For example, methods to create, update, delete, and retrieve decks
  getAllDecks() {
    return [];
  }

  getDeckById(id: string) {
    return `This action returns a deck with ID: ${id}`;
  }
}
