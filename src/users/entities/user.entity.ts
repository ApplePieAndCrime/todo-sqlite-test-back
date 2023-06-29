import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({ tableName: 'user', timestamps: false })
export class User extends Model<User> {
  @Column({ type: DataType.INTEGER, unique: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true })
  email: string;

  @Column({ type: DataType.STRING })
  password: string;

  @Column({ type: DataType.STRING })
  refreshToken: string;
}
