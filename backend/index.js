import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectMongoDB.js";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
