import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectMongoDB.js";
import productRoute from "./routes/ProductRoutes.js";
import userRouter from "./routes/UserRoutes.js";
import orderRoute from "./routes/OrderRoutes.js";
import categoryRoute from "./routes/CategoryRoutes.js";

dotenv.config();
connectDB();
const app = express();

app.use(express.json());
app.use("/v1/auth", userRouter);
app.use("/v1/product", productRoute);
app.use("/v1/order", orderRoute);
app.use("/v1/category", categoryRoute);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
