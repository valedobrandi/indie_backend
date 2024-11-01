import { Options } from 'sequelize';
import { URL } from 'url'

const uri = process.env.DATABASE_URL || 'postgres://root:123456@postgres-heroku:5432/subscribers'

const parsedUrl = new URL(uri)

const host = parsedUrl.hostname;
const database = parsedUrl.pathname.split('/')[1];
const user = parsedUrl.username;
const port = parsedUrl.port;
const password = parsedUrl.password;

const config: Options = {
  host: host || 'PostgresCont',
  port: Number(port) || 5432,
  username: user || 'root',
  database: database || 'subscribers',
  password: password || '123456',
  dialect: 'postgres',
}

if (process.env.DATABASE_URL) {
  config.dialectOptions = {
    ssl: {
    rejectUnauthorized: false
  }}
}

export = config;

