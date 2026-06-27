import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rollNo: { type: String, required: true },
    department: { type: String, required: true },
    year: { type: String, required: true },
    phone: String,
    parentPhone: String,
    email: String,
    address: String
  },
  { timestamps: true }
);

export default mongoose.model("Student", studentSchema);
