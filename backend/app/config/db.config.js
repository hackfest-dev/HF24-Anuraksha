const mysql = require('mysql2/promise');
require('dotenv').config();

const credentials =
  process.env.NODE_ENV === 'production'
    ? {
        user: process.env.DB_USER_PROD,
        host: process.env.DB_HOST_PROD,
        database: process.env.DB_NAME_PROD,
        password: process.env.DB_PASSWORD_PROD,
        port: process.env.DB_PORT_PROD,
      }
    : {
        user: process.env.DB_USER_DEV,
        host: process.env.DB_HOST_DEV,
        database: process.env.DB_NAME_DEV,
        password: process.env.DB_PASSWORD_DEV,
        port: process.env.DB_PORT_DEV,
      };

// const credentials = {
//   user: process.env.DB_USER_PROD,
//   host: process.env.DB_HOST_PROD,
//   database: process.env.DB_NAME_PROD,
//   password: process.env.DB_PASSWORD_PROD,
//   port: process.env.DB_PORT_PROD,
// };

const pool = mysql.createPool(credentials);
module.exports = { pool };
