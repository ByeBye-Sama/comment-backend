require("dotenv").config();
// this is important!
module.exports = {
  development: {
    username: "root",
    password: null,
    database: "comment-list-dev",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: "3306",
    dialect: "mysql",
  },
};
