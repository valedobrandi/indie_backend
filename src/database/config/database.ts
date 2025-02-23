import { Options } from 'sequelize';

const config: Options = {
  username: process.env.POSTGRES_USER as string, 
  database: process.env.POSTGRES_DB as string, 
  password: process.env.POSTGRES_PASSWORD as string,
  host: process.env.DB_HOST || "database",
  port: Number(process.env.DB_PORT) || 5432,
  dialect: "postgres",
  logging: false, // Set to true for debugging queries
};

export = config;
