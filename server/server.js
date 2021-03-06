const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

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

// require apis
const productRoutes = require("./routes/product");
app.use("/api", productRoutes);


app.listen(3333, err => {
    if (err) {
        console.log("IF: " + err);
    } else {
        console.log("Listening on PORT:----------------------- localhost:3333");
    }
});
