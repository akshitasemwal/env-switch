const express = require("express");

const dotenv = require("dotenv");
dotenv.config();

const app = express();

const PROD_PORT = process.env.PROD_PORT || 5000;
const DEV_PORT = process.env.DEV_PORT || 3000;

const PORT = process.env.NODE_ENV === "production" ? PROD_PORT : DEV_PORT;
const NODE_ENV = process.env.NODE_ENV || "development";

app.get("/", (req, res) => {
  res.send(`Hello from ${NODE_ENV} environment!`);
});

app.get("/name/:userName", (req, res) => {
  //route params
  const userName = req.params.userName;
  res.send(`Welcome ${userName}!`);
});

app.get("/:userName", (req, res) => {
  //query params
  const userName = req.params.userName;
  const status = req.query.isActive;
  res.send(`${userName} is ${status}`);
});

app.listen(PORT, () => {
  console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`);
});
