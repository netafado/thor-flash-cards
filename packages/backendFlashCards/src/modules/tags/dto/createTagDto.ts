export type CreateTagDto = {
  name: string;
  userId: string;
};
export type CreateTagResponseDto = {
  id: number;
  name: string;
  user_id: number;
  created_at: Date;
  updated_at: Date;
};
