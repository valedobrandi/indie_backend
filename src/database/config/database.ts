import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_NAME as string, 
  process.env.DB_USER as string, 
  process.env.DB_PASSWORD as string, 
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    port: Number(process.env.DB_PORT) || 5432,
    logging: false, // Set to true for debugging queries
  }
);

export default sequelize;
