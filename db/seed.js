const db = require("./db");
const Player = require("./player");
const Game = require("./game");

const seed = async () => {
  db.sync({ force: true });

  const players = await Promise.all([
    Player.create({
      username: "kaizo",
      hashedPassword: "kaizopassword",
    }),
    Player.create({
      username: "meeseeks",
      hashedPassword: "meeseekspassword",
    }),
    Player.create({
      username: "slamfist",
      hashedPassword: "slamfistpassword",
    }),
  ]);
  const [kaizo, meeseeks, slamfist] = players;

  const games = await Promise.all([
    Game.create({ playerName: "meeseeks", result: "tie" }),
    Game.create({ playerName: "meeseeks", result: "player" }),
    Game.create({ playerName: "meeseeks", result: "computer" }),
    Game.create({ playerName: "kaizo", result: "player" }),
    Game.create({ playerName: "kaizo", result: "player" }),
    Game.create({ playerName: "kaizo", result: "player" }),
    Game.create({ playerName: "slamfist", result: "computer" }),
    Game.create({ playerName: "slamfist", result: "computer" }),
    Game.create({ playerName: "slamfist", result: "computer" }),
  ]);
};

module.exports = seed