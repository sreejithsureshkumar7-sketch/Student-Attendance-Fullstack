import express from "express";
import { markAttendance, getReport } from "../controllers/attendanceController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post("/mark", protect, markAttendance);
router.get("/report", protect, getReport);

export default router;
