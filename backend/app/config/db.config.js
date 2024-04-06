const { Pool } = require('pg');
require('dotenv').config();

const credentials =
  process.env.NODE_ENV === 'production'
    ? {
        user: process.env.DB_USER_PROD,
        host: process.env.DB_HOST_PROD,
        database: process.env.DB_NAME_PROD,
        password: process.env.DB_PASSWORD_PROD,
        port: process.env.DB_PORT_PROD,
        ssl: {
          rejectUnauthorized: true, // Set to false if your server uses a self-signed certificate
        },
      }
    : {
        user: process.env.DB_USER_DEV,
        host: process.env.DB_HOST_DEV,
        database: process.env.DB_NAME_DEV,
        password: process.env.DB_PASSWORD_DEV,
        port: process.env.DB_PORT_DEV,
      };

const pool = new Pool(credentials);
module.exports = { pool };
