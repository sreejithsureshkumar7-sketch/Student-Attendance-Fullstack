import bcrypt from "bcryptjs";import User from "../models/User.js";
export const getUsers=async(req,res)=>res.json(await User.find().select("-password").sort({createdAt:-1}));
export const createUser=async(req,res)=>{try{const {name,email,password,role,department,subject}=req.body;if(await User.findOne({email}))return res.status(400).json({message:"User already exists"});const user=await User.create({name,email,password:await bcrypt.hash(password||"123456",10),role,department,subject});res.status(201).json({message:"User created",user})}catch(e){res.status(500).json({message:e.message})}};
export const deleteUser=async(req,res)=>{await User.findByIdAndDelete(req.params.id);res.json({message:"User deleted"})};
