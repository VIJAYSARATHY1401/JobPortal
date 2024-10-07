import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./auth.css";
import "./form.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [splash, setSplash] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password || !name) {
      setError("Please fill in all fields.");
      return;
    }
    const userData = { name, email };
    localStorage.setItem("user", JSON.stringify(userData)); // Store user data in localStorage
    setSuccess(true);
    setError("");
    setSplash(true);

    setTimeout(() => {
      navigate("/"); // Redirect to home page
    }, 2000);
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Login</h2>
      {error && <p className="error">{error}</p>}
      {success && (
        <motion.p
          className="success-message fade-in"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          Login Successful!
        </motion.p>
      )}
      <form onSubmit={handleLogin} className="auth-form" autoComplete="off">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          autoComplete="new-email"
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
          autoComplete="new-password"
        />

        <button type="submit" className="auth-button">
          Login
        </button>
        <p className="auth-link">
          Don't have an account? <a href="/register">Register here</a>
        </p>
      </form>

      {splash && (
        <div className="splash-screen">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Redirecting to the home page...
          </motion.p>
        </div>
      )}
    </div>
  );
};

export default Login;
