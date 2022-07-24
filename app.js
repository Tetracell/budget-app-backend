const express = require("express");
const app = express();
const tController = require("./controllers/transactionsController")
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the budgeting app");
});

app.use("/transactions", tController); //controller(s) go here

app.get("*", (req, res) => {
  res.send("Error : Page not found");
});

module.exports = app;
