import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

dotenv.config();
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`.green.bold);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

connectDB();
