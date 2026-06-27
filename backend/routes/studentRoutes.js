import express from "express";
import { addStudent, getStudents } from "../controllers/studentController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post("/", protect, addStudent);
router.get("/", protect, getStudents);

export default router;
