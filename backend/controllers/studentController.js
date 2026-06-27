import Student from "../models/Student.js";
export const addStudent=async(req,res)=>{try{res.status(201).json(await Student.create(req.body))}catch(e){res.status(500).json({message:e.message})}};
export const getStudents=async(req,res)=>{const {department,year,search}=req.query;const f={};if(department)f.department=department;if(year)f.year=year;if(search)f.$or=[{name:{$regex:search,$options:"i"}},{rollNo:{$regex:search,$options:"i"}},{email:{$regex:search,$options:"i"}}];res.json(await Student.find(f).sort({rollNo:1}))};
export const updateStudent=async(req,res)=>res.json(await Student.findByIdAndUpdate(req.params.id,req.body,{new:true}));
export const deleteStudent=async(req,res)=>{await Student.findByIdAndDelete(req.params.id);res.json({message:"Student deleted"})};
