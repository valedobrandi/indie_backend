import { Sequelize } from 'sequelize';
import * as config from '../config/database';

const sequelize = new Sequelize(process.env.DATABASE_URL || '')

export default sequelize;
