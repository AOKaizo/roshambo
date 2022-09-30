const express = require('express');
const router = express.Router();
const { db, seed, models: { Player, Game } } = require('../db/index');

router.post("/", async (req, res) => {
    const name = req.body.name;
    const title = req.body.title;
    const content = req.body.content;
  
    res.redirect(`/player/${playerId}`); // Redirect to the post details page
  })

router.get('/', async (req, res, next) => {
  const players = Player.findAll();
    res.send(players)
})

module.exports = router