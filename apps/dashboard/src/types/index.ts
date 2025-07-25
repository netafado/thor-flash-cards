export type Deck = {
  id: string;
  title: string;
  description: string;
  background_color: string;
  repetions_days: number;
  cards?: Card[];
};

export type Card = {
  id: string;
  name: string;
  front: string;
  back: string;
  deckId: string;
  dificulty: number;
};
