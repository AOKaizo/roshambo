const express = require('express');
const router = express.Router();

// router.use((req, res, next) => {

//     next()
// })

router.get('/', async (req, res, next) => {
    res.send('Hello World, I am working.')
})

module.exports = router