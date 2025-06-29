import { CardModel } from '../cards/cards.model';

export type DeckModel = {
  user_id: string;
  background_color: string;
  repetions_days: string;
  cards?: CardModel[] | null;
  title: string; // Assuming title is part of the deck object
};

export type DeckInput = Partial<DeckModel>;
