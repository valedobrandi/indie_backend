import { Options } from 'sequelize';
import * as fs from 'fs';

function readSecret(secretPath: string, defaultValue: string): string {
  try {
    return fs.readFileSync(secretPath, 'utf8').trim();
  } catch (err) {
    return defaultValue;
  }
}

const config: Options = {
  host: process.env.DB_HOST || 'postgres',
  port: Number(process.env.DB_PORT) as number,
  username: readSecret('/run/secrets/postgres_user_secret', 'defaultuser'),
  password: readSecret('/run/secrets/postgres_password_secret', 'defaultpassword'),
  database: process.env.DB_NAME || 'db',
  dialect: "postgres",
  logging: false, // Set to true for debugging queries
};

export = config;
