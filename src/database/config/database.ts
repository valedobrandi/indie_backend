import { Options } from 'sequelize';

const config: Options = {
  host: process.env.POSTGRESHOST || 'PostgresCont',
  port: Number(process.env.POSTGRESPORT) || 5432,
  database: process.env.POSTGRESDATABASE || 'subscribers',
  username: process.env.POSTGRESUSER || 'root',
  password: process.env.POSTGRESPASSWORD || '123456',
  dialect: 'postgres',
}

export = config;

