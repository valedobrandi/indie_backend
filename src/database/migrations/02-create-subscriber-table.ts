import { Model, QueryInterface, DataTypes } from 'sequelize';
import { ISubscriber } from '../../Interfaces/subscriber/ISubscriber';


export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<ISubscriber>>('subscribers', {
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
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('subscribers');
  },
};