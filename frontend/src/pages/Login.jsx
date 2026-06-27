import { useState } from "react";
import API from "../services/api.js";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("123456");
  const [msg, setMsg] = useState("");

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setUser(res.data.user);
    } catch (err) {
      setMsg(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="center">
      <form className="card" onSubmit={login}>
        <h1>Attendance Login</h1>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
        <button>Login</button>
        <p>{msg}</p>
      </form>
    </div>
  );
}
