import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { Sequelize } from 'sequelize';

interface MarkerCreationAttrs {
  latitude: number;
  longitude: number;
}

@Table({ tableName: 'markers' })
export class Marker extends Model<Marker, MarkerCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: 'NUMERIC', allowNull: false })
  latitude: number;

  @Column({ type: 'NUMERIC', allowNull: false })
  longitude: number;

  @Column({
    type: 'TIMESTAMP',
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  })
  createdAt: Date;
}
