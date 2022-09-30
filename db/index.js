const db = require("./db");
const Player = require("./player");
const Game = require("./game");
const seed = require("./seed");

Player.hasMany(Game, { as: "games", foreignKey: "gamePlayed" });
Game.belongsTo(Player, { as: "player", foreignKey: "playerName" });

module.exports = { db, seed, models: { Player, Game } };
