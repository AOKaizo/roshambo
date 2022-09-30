const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
    res.sendFile("/public/error/error.html", {root: process.cwd() })
})

module.exports = router;