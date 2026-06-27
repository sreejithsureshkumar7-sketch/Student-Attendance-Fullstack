import bcrypt from "bcryptjs";
import User from "../models/User.js";

export async function seedAdmin() {
  const email = "admin@gmail.com";
  const exists = await User.findOne({ email });

  if (!exists) {
    const password = await bcrypt.hash("admin123", 10);
    await User.create({
      name: "Default Admin",
      email,
      password,
      role: "admin"
    });
    console.log("Default admin created");
  }
}
