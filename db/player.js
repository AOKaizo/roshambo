const Sequelize = require("sequelize");
const db = require("./db");

const Player = db.define("player", {
  username: {
    type: Sequelize.TEXT,
    allowNull: false,
    unique: true,
    validate: {
      notNull: {
        msg: "Please enter a valid Username.",
      },
      notUnique: {
        msg: "That Username is taken; please try another.",
      },
    },
  },
  hashedPassword: {
    type: DataTypes.STRING(64),
    validate: {
      is: /^[0-9a-f]{64}$/i,
    },
  },
});

module.exports = Player;
