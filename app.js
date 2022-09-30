const express = require('express');
const app = express();
const morgan = require('morgan')
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.use(morgan('dev'))

app.use("/roshambo", require("./routes/roshambo"))
app.use("/player", require("./routes/player"))
app.use("/error", require("./routes/error"))

app.get('/', (req, res) => {
    res.redirect("./roshambo")
})

app.get('/player', (req, res) => {
    res.redirect("./player")
})

app.get('*', (req, res) => {
    res.redirect("./error")
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});