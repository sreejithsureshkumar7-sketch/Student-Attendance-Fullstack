import mongoose from "mongoose";
const schema=new mongoose.Schema({name:{type:String,required:true},rollNo:{type:String,required:true},department:{type:String,required:true},year:{type:String,required:true},phone:String,parentPhone:String,email:String,address:String,photo:String},{timestamps:true});
schema.index({rollNo:1,department:1,year:1},{unique:true});
export default mongoose.model("Student",schema);
