import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
// require("dotenv").config();
import { config } from "dotenv";


const connectDB = async () => {
    try {
      const connectienceInstance =   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      console.log(`"Connected to DB!" ${connectienceInstance.connection.host}`);
    } catch (err) {
        console.log("Error connecting to DB", err);
        process.exit(1);
    }
}

export default connectDB;