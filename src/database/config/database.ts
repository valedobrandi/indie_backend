import { Options } from 'sequelize';
import readSecret from 'src/utils/readSecret';

const config: Options = {
  host: process.env.DB_HOST || 'postgres',
  port: Number(process.env.DB_PORT) || 3001,
  username: readSecret('/run/secrets/postgres_user_secret', 'defaultuser'),
  password: readSecret('/run/secrets/postgres_password_secret', 'defaultpassword'),
  database: process.env.DB_NAME || 'db',
  dialect: "postgres",
  logging: false, // Set to true for debugging queries
};

export = config;
