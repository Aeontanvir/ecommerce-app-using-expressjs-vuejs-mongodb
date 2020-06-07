const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const User = require("./models/user");

dotenv.config();

const app = express();

mongoose.connect(
    process.env.DATABASE
    ,
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
    let user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err) => {
        if (err) {
            res.json(error);
        } else {
            res.json("Successfully saved");
        }
    });
});








app.listen(3333, err => {
    if (err) {
        console.log("IF: " + err);
    } else {
        console.log("Listening on PORT:----------------------- localhost:3333");
    }
});
