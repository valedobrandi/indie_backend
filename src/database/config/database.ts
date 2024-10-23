import { Options } from 'sequelize';

const config: Options = {
  dialect: 'postgres',
  use_env_variable: process.env.DATABASE_URL || "",
  username: process.env.MYSQLUSER || 'root',
  password: process.env.MYSQLPASSWORD || '123456',
  database: process.env.MYSQLDATABASE || 'indi_page',
  host: process.env.MYSQLHOST || 'db',
  port: Number(process.env.MYSQLPORT) || 3306,
  dialectOptions: {
    timezone: 'Z',
    ssl: {
      "require": true,
      "rejectUnauthorized": false
    }
  },
  logging: false,
}

export = config;

