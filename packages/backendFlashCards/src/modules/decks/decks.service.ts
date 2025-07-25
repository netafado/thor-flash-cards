import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import type { DeckModel } from './decks.model';

@Injectable()
export class DecksService {
  constructor(private dataSource: Sequelize) {}

  async createDeck(deck: DeckModel): Promise<DeckModel> {
    try {
      const newDeck = await this.dataSource.transaction(async (transaction) => {
        const createdDeck = await this.dataSource.models.Deck.create(
          {
            user_id: deck.user_id,
            background_color: deck.background_color,
            repetions_days: deck.repetions_days,
            title: deck.title,
            description: deck.description || '',
          },
          { transaction }
        );

        return createdDeck;
      });
      return newDeck.toJSON() as DeckModel;
    } catch (error) {
      console.error('Error creating deck:', error);
      throw new Error('Failed to create deck');
    }
  }

  async getDecksByUserId(userId: string): Promise<DeckModel[]> {
    if (!userId) {
      throw new Error('User ID is required');
    }
    try {
      const decks = await this.dataSource.models.Deck.findAll({
        where: { user_id: userId },
      });
      return decks.map((deck) => deck.toJSON() as DeckModel);
    } catch (error) {
      console.error('Error fetching decks by user ID:', error);
      throw new Error('Failed to fetch decks');
    }
  }

  async deleteDeck(deckId: string): Promise<void> {
    if (!deckId) {
      throw new Error('Deck ID is required');
    }
    try {
      const deck = await this.dataSource.models.Deck.findByPk(deckId);
      if (!deck) {
        throw new Error('Deck not found');
      }
      await deck.destroy();
    } catch (error) {
      console.error('Error deleting deck:', error);
      throw new Error('Failed to delete deck');
    }
  }

  async getDeckById(deckId: string): Promise<DeckModel | null> {
    if (!deckId) {
      throw new Error('Deck ID is required');
    }
    try {
      const deck = await this.dataSource.models.Deck.findByPk(deckId, {
        include: [{ model: this.dataSource.models.Card, as: 'cards' }],
      });
      return deck ? (deck.toJSON() as DeckModel) : null;
    } catch (error) {
      console.error('Error fetching deck by ID:', error);
      throw new Error('Failed to fetch deck');
    }
  }
}
