// database logic
const mongoose = require("mongoose");

// .env file for accessing database token
require("dotenv").config();

// access key from dotenv
const MONGODBURI = process.env.MONGODBURI;

mongoose.connect(MONGODBURI);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("SUCCESSFULLY CONNECTED TO DATABASE ");
});

db.on("error", () => {
  console.log("CONNECTION ERROR");
});

db.on("disconnected", () => {
  console.log("DICONNECTED FROM DATABASE");
});
