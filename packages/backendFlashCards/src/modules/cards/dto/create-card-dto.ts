export type Dificulty = 'EASY' | 'MEDIUM' | 'HARD';

export interface CardModel {
  deck_id: string;
  front: string;
  back: string;
  dificulty: Dificulty;
  created_at: Date;
  updated_at: Date;
}
export type CreateCardDto = {
  name: string;
  deckId: string;
  userId: number;
  front: string;
  back: string;
  dificulty: Dificulty;
};

export type CreateCardDtoDataBase = {
  name: string;
  deck_id: string;
  user_id: number;
  front: string;
  back: string;
  dificulty: Dificulty;
};

export type CreateCardResponseDto = {
  name: string;
  id: number;
  deck_id: string;
  front: string;
  back: string;
  dificulty: Dificulty;
  created_at: Date;
  updated_at: Date;
};
