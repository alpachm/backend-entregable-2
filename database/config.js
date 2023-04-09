const { Sequelize } = require('sequelize');

const dbUsers = new Sequelize({
  dialect: process.env.DB_DIALECT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE_USER,
  port: process.env.DB_PORT,
  logging: false,
});

const dbTransfers = new Sequelize({
  dialect: process.env.DB_DIALECT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE_TRANSFERS,
  port: process.env.DB_PORT,
  logging: false,
});

module.exports = { dbUsers, dbTransfers };
