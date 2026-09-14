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

module.exports = { app, port };
