const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.json("Hello online ecommerce app");
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.json(req.body);
});








app.listen(3333, err => {
    if (err) {
        console.log("IF: " + err);
    } else {
        console.log("Listening on PORT:----------------------- localhost:3333");
    }
});
