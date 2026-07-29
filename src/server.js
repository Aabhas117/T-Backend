import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
// const dns = require("dns");
import dns from "dns";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

config.config({
  path: "./.env",
});

connectDB()
  //(error, req, res, next) four type of but we use only two (req, res)
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongo sb connection failed !!", err);
  });


  
//if ee approach
/*
const app = express()(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/$
      {DB_NAME}`);

    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });

    app.listen(process.env.PORT, ()=>{
      console.log(`App is listening on port ${process.env.PORT}`)
    })
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
})();
*/
