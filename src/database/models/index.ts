import { Sequelize } from 'sequelize';
import * as config from '../config/database';

async function initialize(): Promise<Sequelize> {
    const options = await config();
    const sequelize = new Sequelize(options);
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    }catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    return sequelize;
}

export default initialize;
