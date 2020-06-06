const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

//bFbu5LPSC6y1JIu2
// mongodb+srv://root:<password>@online-ecommerce-lss7f.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect(
    'mongodb+srv://root:bFbu5LPSC6y1JIu2@online-ecommerce-lss7f.mongodb.net/<dbname>?retryWrites=true&w=majority',
    { useUnifiedTopology: true, useUnifiedTopology: true },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected to the database!");
        }
    }
);

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
