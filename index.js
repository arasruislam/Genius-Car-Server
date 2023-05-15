const express = require('express');
const cors = require('cors');
const sliders = require('./data/sliders.json')
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

/* middleware */
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("The Genius Car is Running");
})


app.listen(port, () => {
    console.log(`The Server Running on Port: ${port}`);
})