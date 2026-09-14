const express = require("express");
const app = express();
const port = 3000;

app.get("/sum", (req, res) => {
  const a = parseFloat(req.query.a) || 0;
  const b = parseFloat(req.query.b) || 0;
  res.json({ operation: "sum", result: a + b });
});

app.get("/diff", (req, res) => {
  const a = parseFloat(req.query.a) || 0;
  const b = parseFloat(req.query.b) || 0;
  res.json({ operation: "difference", result: a - b });
});

app.get("/multiply", (req, res) => {
  const a = parseFloat(req.query.a) || 0;
  const b = parseFloat(req.query.b) || 0;
  res.json({ operation: "multiply", result: a * b });
});

app.get("/divide", (req, res) => {
  const a = parseFloat(req.query.a) || 0;
  const b = parseFloat(req.query.b) || 0;

  if (b === 0) {
    return res.status(400).json({ error: "Division by zero is not allowed!" });
  }

  res.json({ operation: "divide", result: a / b });
});

module.exports = { app, port };
