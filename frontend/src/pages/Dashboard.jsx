import { useEffect, useState } from "react";
import API from "../services/api.js";

export default function Dashboard({ setUser }) {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    name: "",
    rollNo: "",
    department: "Computer Science",
    year: "II",
    phone: "",
    parentPhone: "",
    email: "",
    address: ""
  });

  const loadStudents = async () => {
    const res = await API.get("/students");
    setStudents(res.data);
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const addStudent = async (e) => {
    e.preventDefault();
    await API.post("/students", form);
    setForm({ ...form, name: "", rollNo: "", phone: "", parentPhone: "", email: "", address: "" });
    loadStudents();
  };

  const saveAttendance = async () => {
    const today = new Date().toISOString().slice(0, 10);
    const records = students.map((s) => ({
      student: s._id,
      subject: "JavaScript",
      date: today,
      status: document.querySelector(`input[name='${s._id}']:checked`)?.value || "Absent"
    }));

    await API.post("/attendance/mark", { records });
    alert("Attendance Saved");
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <div className="container">
      <header>
        <h1>Student Attendance System</h1>
        <button onClick={logout}>Logout</button>
      </header>

      <section className="grid">
        <form className="card" onSubmit={addStudent}>
          <h2>Add Student</h2>
          <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input placeholder="Roll No" value={form.rollNo} onChange={(e) => setForm({ ...form, rollNo: e.target.value })} />
          <input placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          <input placeholder="Parent Phone" value={form.parentPhone} onChange={(e) => setForm({ ...form, parentPhone: e.target.value })} />
          <input placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <textarea placeholder="Address" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
          <button>Add Student</button>
        </form>

        <div className="card">
          <h2>Mark Attendance</h2>
          {students.map((s) => (
            <div className="student" key={s._id}>
              <b>{s.rollNo} - {s.name}</b>
              <label><input type="radio" name={s._id} value="Present" defaultChecked /> Present</label>
              <label><input type="radio" name={s._id} value="Absent" /> Absent</label>
            </div>
          ))}
          <button onClick={saveAttendance}>Save Attendance</button>
        </div>
      </section>
    </div>
  );
}
