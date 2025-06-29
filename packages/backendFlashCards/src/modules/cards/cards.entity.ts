import { CardModel } from './cards.model';

import {
  BelongsTo,
  Column,
  DataType,
  Model,
  Table,
  ForeignKey,
  PrimaryKey,
} from 'sequelize-typescript';
import { Deck } from '../decks/decks.entity';

@Table({
  tableName: 'cards',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class Card extends Model<CardModel> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
  })
  override id!: string;

  @ForeignKey(() => Deck)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  deck_id!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  front!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  back!: string;

  @Column({
    type: DataType.ENUM('EASY', 'MEDIUM', 'HARD'),
    allowNull: false,
    defaultValue: 5,
  })
  dificulty!: 'EASY' | 'MEDIUM' | 'HARD';

  @BelongsTo(() => Deck, {
    foreignKey: 'deck_id',
    as: 'deck',
  })
  deck!: Deck | null;
}
