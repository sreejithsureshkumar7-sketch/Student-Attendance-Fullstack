import { useState } from "react";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";

export default function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  return user ? <Dashboard setUser={setUser} /> : <Login setUser={setUser} />;
}
