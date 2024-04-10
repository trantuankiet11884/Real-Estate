require("dotenv").config();
module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false,
    timezone: "+07:00",
  },
};

// {
//     "development": {
//       "username": "postgres",
//       "password": "123456",
//       "database": "rest",
//       "host": "127.0.0.1",
//       "dialect": "postgres",
//       "logging": false,
//       "timezone": "+07:00"
//     }
//   }
