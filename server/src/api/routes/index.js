const { Router } = require("express");

const memes = require("./memes");

const app = Router();

app.use("/", memes);

module.exports = app;
