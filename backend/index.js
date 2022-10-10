import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectMongoDB.js";
import productRoute from "./routes/ProductRoutes.js";
import userRouter from "./routes/UserRoutes.js";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use("/api/auth", userRouter);
app.use("/api/product", productRoute);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
