import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import db from '.';

class SequelizeSubscriber extends Model<InferAttributes<SequelizeSubscriber>,
InferCreationAttributes<SequelizeSubscriber>> {
  declare id?: number;
  declare createdAt?: Date;
  declare email: string;
}

SequelizeSubscriber.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize: db,
  modelName: 'subscribers',
  timestamps: false,
});

export default SequelizeSubscriber;
