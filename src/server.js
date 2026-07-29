import express from "express";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
import dns from "dns";

dotenv.config({
  path: "./.env",
});

const app = express();

dns.setServers(["1.1.1.1", "8.8.8.8"]);

connectDB()
  //(error, req, res, next) four type of but we use only two (req, res)
  .then(() => {
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log(`Server is running at port : ${port}`);
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
