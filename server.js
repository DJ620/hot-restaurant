const express = require('express');
const path = require('path');
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.end("Welcome to the restaurant home page");
})

app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});