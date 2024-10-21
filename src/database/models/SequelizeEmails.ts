import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import db from '.';

class SequelizeEmail extends Model<InferAttributes<SequelizeEmail>,
InferCreationAttributes<SequelizeEmail>> {
  declare id?: number;
  declare email: string;
  declare createdAt?: Date;
}

SequelizeEmail.init({
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
  modelName: 'emails',
  timestamps: false,
  underscored: true,
});

export default SequelizeEmail;
