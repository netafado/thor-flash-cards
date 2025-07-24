import {
  Column,
  DataType,
  HasMany,
  Model,
  Table,
  PrimaryKey,
} from 'sequelize-typescript';
import { DeckModel } from './decks.model';
import { Card } from '../cards/cards.entity';

@Table({
  tableName: 'decks',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class Deck extends Model<DeckModel> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
  })
  override id!: string;

  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  user_id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  background_color!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  repetions_days!: string;

  @HasMany(() => Card, { foreignKey: 'deck_id' })
  cards!: Card[];
}
