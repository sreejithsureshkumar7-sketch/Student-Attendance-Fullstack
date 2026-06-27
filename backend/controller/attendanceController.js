import Attendance from "../models/Attendance.js";

export const markAttendance = async (req, res) => {
  try {
    const { records } = req.body;

    if (!Array.isArray(records)) {
      return res.status(400).json({ message: "records must be array" });
    }

    const saved = await Attendance.insertMany(
      records.map((r) => ({
        ...r,
        markedBy: req.user?.id
      }))
    );

    res.status(201).json({ message: "Attendance saved", saved });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getReport = async (req, res) => {
  try {
    const { subject, date } = req.query;
    const filter = {};
    if (subject) filter.subject = subject;
    if (date) filter.date = date;

    const report = await Attendance.find(filter).populate("student");
    res.json(report);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
