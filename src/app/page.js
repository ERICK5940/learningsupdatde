"use client";

import React, { useState } from "react";
import { Student } from "../Student";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const student = new Student(name, password);
    const message = student.login();
    alert(message);
  };

  return (
    <center>
    <div>
      <h2>Student Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />
        <button type="submit">Login</button>
      </form>
    </div></center>
  );
}
