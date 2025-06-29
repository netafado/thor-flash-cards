import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { UserModel } from '../user.model';

@Table
export class User extends Model<UserModel> {
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  time_zone?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  name?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  external_id?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  locale?: string;
}
