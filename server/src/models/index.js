// # Database models using Sequelize ORM
const Sequelize = require("sequelize");
const { db } = require("../config/index");

const MemeModel = require("./meme");

const databaseOptions = db.development;

const sequelize = new Sequelize({
  ...databaseOptions,
  dialect: "mysql",
  database: "mydb",
});

const Meme = MemeModel(sequelize, Sequelize);

sequelize
  .sync({ alter: false })
  .then(() => {
    console.log(`Database and Tables Created`);
  })
  .catch((error) => console.log(error, "error"));

module.exports = {
  Meme,
};
