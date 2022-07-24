const express = require("express");
const transactions = express.Router();
const transactionData = require("../models/transactions");

transactions.get("/", (req, res) => {
  res.json(transactionData);
});
transactions.get("/:id", (req, res) => {
  const transactionChoice = req.params;
  if (Number(transactionChoice.id) > transactionData.length) {
    res.status(404).redirect("/error");
  }
  res.json(transactionData[Number(transactionChoice.id)]);
});
transactions.post("/", (req, res) => {
  transactionData.push(req.body);
  console.log("Adding transaction");
  console.log(req.body);
  res.json(transactionData[transactionData.length - 1]);
});
transactions.delete("/:id", (req, res) => {
  const { id } = req.params;
  const snippedTransaction = transactionData.splice(id, 1);
  res.status(200).json(snippedTransaction);
  console.log("Removing transaction at index " + id);
});
transactions.put("/:id", (req, res) => {
  const { id } = req.params;
  transactionData[id] = req.body;
  res.status(200).json(transactionData[id]);
  console.log("Editing entry at index " + id);
});

module.exports = transactions;
