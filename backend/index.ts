import express from "express";
import cors from "cors";
import authRoute from './routes/authRoutes'
import cookieParser from "cookie-parser";
import { authMiddleware } from "./middelware/authMiddleware";
import dashBoardRoute from "./routes/dashBoard"
const app=express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(cookieParser());
app.use(express.json());

app.use("/auth",authRoute);

app.use("/dashboard", authMiddleware, dashBoardRoute);

app.listen(3000,()=>{
    console.log("your app is working ")
})