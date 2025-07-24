import { CardModel } from '../cards/cards.model';

export type DeckModel = {
  user_id: string;
  background_color: string;
  repetions_days: string;
  cards?: CardModel[] | null;
  title: string;
  description: string;
};

export type DeckInput = Partial<DeckModel>;
