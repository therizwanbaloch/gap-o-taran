import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import messageRouter from "./routes/messageRouter.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cookieParser());


app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true,
}));

app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/", userRouter);
app.use("/api/", messageRouter);

app.listen(port, () => {
  connectDB();
  console.log(` Server started on port ${port}`);
});
