const express = require('express');
const path = require('path');
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservations = [
    {
        name: "Test name",
        number: "Test phone number",
        email: "Test email",
        id: 1
    },
    {
        name: "Test name",
        number: "Test phone number",
        email: "Test email",
        id: 2
    },
    {
        name: "Test name",
        number: "Test phone number",
        email: "Test email",
        id: 3
    },
    {
        name: "Test name",
        number: "Test phone number",
        email: "Test email",
        id: 4
    },
    {
        name: "Test name",
        number: "Test phone number",
        email: "Test email",
        id: 5
    },
    {
        name: "Test name",
        number: "Test phone number",
        email: "Test email",
        id: 6
    }
];

const reserved = reservations.filter((res, i) => i < 5);
const waitlist = reservations.filter((res, i) => i >= 5);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/home.html"));
});

app.get("/tables", (req, res) => {
    res.sendFile(path.join(__dirname, "/tables.html"));
});

app.get("/reserve", (req, res) => {
    res.sendFile(patj.join(__dirname, "/reserve.html"));
});

app.get("/api/tables", (req, res) => {
    return res.json(reserved);
});

app.get("/api/waitlist", (req, res) => {
    return res.json(waitlist);
});

app.post("/api/tables", (req, res) => {
    const newRes = req.body;
    reservations.push(newRes);
});

app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});