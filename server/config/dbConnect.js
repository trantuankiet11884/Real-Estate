const Sequellize = require("sequelize");

const sequelize = new Sequellize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false,
    timezone: "+07:00",
  }
);
const dbc = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB CONNECT Successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbc;
