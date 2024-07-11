"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import the useRouter hook
import axios from "axios"; // Import Axios
import styles from "./loginForm.module.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Use the useRouter hook to get the router object
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/login', {
        username,
        password,
      });

      if (response.status === 200) {
        router.push("/dashboard"); // Use router.push to navigate to the dashboard page
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message); // Server-side error
      } else {
        alert("An error occurred while logging in. Please try again."); // Client-side error
      }
    }
  };

  return (
    <div className={styles.form}>
      <h1 className="text-xl">Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          aria-label="Username"
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-label="Password"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm ;
