import express from "express";import cors from "cors";import dotenv from "dotenv";import connectDB from "./config/db.js";import {seedAdmin} from "./utils/seedAdmin.js";import authRoutes from "./routes/authRoutes.js";import userRoutes from "./routes/userRoutes.js";import studentRoutes from "./routes/studentRoutes.js";import attendanceRoutes from "./routes/attendanceRoutes.js";
dotenv.config();const app=express();app.use(express.json({limit:"10mb"}));app.use(cors({origin:process.env.CLIENT_URL||"*",credentials:true}));
app.get("/",(req,res)=>res.json({message:"Attendance API running",version:"2.0 Final Upgrade"}));
app.use("/api/auth",authRoutes);app.use("/api/users",userRoutes);app.use("/api/students",studentRoutes);app.use("/api/attendance",attendanceRoutes);
const PORT=process.env.PORT||5000;connectDB().then(async()=>{await seedAdmin();app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))});
