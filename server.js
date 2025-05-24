const express = require("express");
const app = express();

// MIDDLE WARE
require("dotenv").config();
const port = process.env.PORT || 3000;

//
app.get("/", (req, res) => {
  res.send(`to do list application`);
});

app.listen(port, (req, res) => {
  console.log(`app is working at port${port}`);
});
