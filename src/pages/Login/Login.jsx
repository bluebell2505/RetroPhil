import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase.js";
import './Login.css';
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User Logged In Successfully!!");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="left-section">
        <div className="brand">
          <h2>Start your <br /> journey with us.</h2>
          <p>Discover the world's best philatelists community here.</p>
        </div>
      </div>
      <div className="right-section">
        <form onSubmit={handleLogin} className="login-form">
          <h3>Login to your account</h3>

          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Your Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMe"
            />
            <label className="form-check-label" htmlFor="rememberMe">
              Remember Me
            </label>
          </div>

          <div className="d-grid">
            <button type="submit" className="button btn btn-primary">
              Login
            </button>
          </div>

          <p className="forgot-password">
            <a href="/forgot-password">Forgot Password</a>
          </p>

          <p className="text-center">
            Continue to proceed with <button className="google-btn">G</button>
          </p>

          <p className="register-link">
            Don't have an account? <Link to="/signup">Register </Link> <Link to="/">Go to home</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
