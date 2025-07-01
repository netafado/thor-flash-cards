import { IsString, IsEnum, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
export type Dificulty = 'EASY' | 'MEDIUM' | 'HARD';

export class CreateCardDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  deckId: string;

  @IsString()
  front: string;

  @IsString()
  back: string;

  @IsNotEmpty()
  @IsEnum(['EASY', 'MEDIUM', 'HARD'])
  dificulty: Dificulty;
}

export type CreateCardDtoDataBase = {
  name: string;
  deck_id: string;
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

export class UpdateCatDto extends PartialType(CreateCardDto) {}
