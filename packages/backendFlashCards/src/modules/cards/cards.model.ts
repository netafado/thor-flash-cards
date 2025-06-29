export type Dificulty = 'EASY' | 'MEDIUM' | 'HARD';

export interface CardModel {
  deck_id: string;
  front: string;
  back: string;
  dificulty: Dificulty;
  created_at: Date;
  updated_at: Date;
}
