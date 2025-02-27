import { Options } from 'sequelize';
import { getCredentials } from './vault';

const config = async (): Promise<Options> => {
  const { user, password } = await getCredentials();
  return {
    username: user,
    password,
    database: process.env.POSTGRES_DB as string,
    host: process.env.DB_HOST || "database",
    port: Number(process.env.DB_PORT) || 5432,
    dialect: "postgres",
    logging: false, // Set to true for debugging queries
  };
}

export = config;
