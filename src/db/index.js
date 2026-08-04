import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined in environment variables.");
  }

  try {
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: DB_NAME,
    });

    console.log(`\nMongoDB connected !! DB Host: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("Mongodb connection failed", error);
    process.exit(1);
  }
};

export default connectDB;
