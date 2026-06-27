import mongoose from "mongoose";
const schema=new mongoose.Schema({student:{type:mongoose.Schema.Types.ObjectId,ref:"Student",required:true},subject:{type:String,required:true},date:{type:String,required:true},status:{type:String,enum:["Present","Absent"],required:true},markedBy:{type:mongoose.Schema.Types.ObjectId,ref:"User"}},{timestamps:true});
schema.index({student:1,subject:1,date:1},{unique:true});
export default mongoose.model("Attendance",schema);
