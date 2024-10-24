import { Options } from 'sequelize';

const config: Options = {
  host: process.env.MYSQLHOST || 'PostgresCont',
  port: Number(process.env.MYSQLPORT) || 5432,
  database: process.env.MYSQLDATABASE || 'subscribers',
  username: process.env.MYSQLUSER || 'root',
  password: process.env.MYSQLPASSWORD || '123456',
  dialect: 'postgres',
}

export = config;

