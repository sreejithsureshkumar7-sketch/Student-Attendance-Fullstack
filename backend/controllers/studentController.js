import Student from "../models/Student.js";

export const addStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getStudents = async (req, res) => {
  try {
    const { department, year } = req.query;
    const filter = {};
    if (department) filter.department = department;
    if (year) filter.year = year;

    const students = await Student.find(filter).sort({ rollNo: 1 });
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
