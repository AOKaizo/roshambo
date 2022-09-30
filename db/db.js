const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost/roshambo");

module.exports = db