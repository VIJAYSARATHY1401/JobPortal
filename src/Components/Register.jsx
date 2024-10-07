import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./auth.css";
import "./form.css"; // Assuming you have an Auth.css for styling

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // State for success message

  const navigate = useNavigate(); // Initialize navigate

  const handleRegister = (e) => {
    e.preventDefault();
    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Perform registration logic here (e.g., API call)
    console.log("Register:", { name, email, password });

    // Simulate a successful registration response
    setSuccessMessage("Registration Successful! Redirecting to login...");

    // Clear error message and redirect after a short delay
    setError(""); // Clear error
    setTimeout(() => {
      navigate("/login"); // Redirect to login page
    }, 2000); // Redirect after 2 seconds
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Register</h2>
      {error && <p className="error">{error}</p>}
      {successMessage && <p className="success">{successMessage}</p>}{" "}
      {/* Show success message */}
      <form onSubmit={handleRegister} className="auth-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
          autoComplete="off" // Disable auto-complete
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          autoComplete="off" // Disable auto-complete
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
          autoComplete="off" // Disable auto-complete
        />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm your password"
          required
          autoComplete="off" // Disable auto-complete
        />

        <button type="submit" className="auth-button">
          Register
        </button>
        <p className="auth-link">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
