const mongoose = require("mongoose");

function connectMongo() {
  const connectionSrting = process.env.MONGO_DB_URI;
  console.log(connectionSrting);
  try {
    mongoose.connect(connectionSrting);
    console.log("Mongo is here...");
  } catch (error) {
    console.log(`Mongo connection failed: ${error}`);
  }
};

module.exports = connectMongo
