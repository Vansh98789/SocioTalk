import express from "express";
import cors from "cors";
import authRoute from './routes/authRoutes'
import cookieParser from "cookie-parser";
import { authMiddleware } from "./middelware/authMiddleware";
import dashBoardRoute from "./routes/dashBoard"
const app=express();

app.use(cors({
    credentials:true,
}));
app.use(cookieParser());
app.use(express.json());

app.use("/auth",authRoute);

app.use("/dashboard", authMiddleware, dashBoardRoute);

app.listen(3000,()=>{
    console.log("your app is working ")
})