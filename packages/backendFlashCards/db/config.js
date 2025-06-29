

const dotenv = require("dotenv");
dotenv.config();

const config = {
  development: {
    dialect: 'postgres',
    host: process.env.DATABASE_URL,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  staging: {
    dialect: 'postgres',
    host: process.env.DATABASE_URL,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  test: {
    dialect: 'postgres',
    host: process.env.DATABASE_URL,
    host: process.env.DATABASE_URL,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  production: {
    dialect: 'postgres',
    host: process.env.DATABASE_URL,
    host: process.env.DATABASE_URL,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
};

module.exports = config;
