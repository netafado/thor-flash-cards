export type CreateTagDto = {
  name: string;
  userId: number;
};
export type CreateTagResponseDto = {
  id: number;
  name: string;
  userId: number;
  created_at: Date;
  updated_at: Date;
};
