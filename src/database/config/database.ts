import { Options } from 'sequelize';


const config: Options = {
  dialect: 'postgres',
  database: process.env.Database || 'indi_page',
  username: process.env.User || 'root',
  password: process.env.Password || '123456',
  host: process.env.URI || 'db',
  port: Number(process.env.Port) || 3306,
  ssl: true,
  clientMinMessages: 'notice',
}

export = config;

