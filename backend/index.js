import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectMongoDB.js";
import productRoute from "./routes/ProductRoutes.js";
import userRoute from "./routes/UserRoutes.js";
import orderRoute from "./routes/OrderRoutes.js";
import categoryRoute from "./routes/CategoryRoutes.js";
import authRoute from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();
connectDB();
const app = express();
app.use(express.json());

app.use(cookieParser());
app.use(cors());
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.use("/v1/auth", authRoute);
app.use("/v1/user", userRoute);
app.use("/v1/product", productRoute);
app.use("/v1/order", orderRoute);
app.use("/v1/category", categoryRoute);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
