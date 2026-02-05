import express from "express";
import cors from "cors";
import authRoute from './routes/authRoutes'
const app=express();

app.use(cors({
    credentials:true,
}));
app.use(express.json());

app.use("/auth",authRoute);



app.listen(3000,()=>{
    console.log("your app is working ")
})