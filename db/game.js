const Sequelize = require("sequelize");
const db = require('./db')

const Game = db.define("game", {
    gameId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    result: Sequelize.ENUM("player", "computer", "tie"),
  });

  module.exports = Game