import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here, like sending data to the backend-------------------------------------
    console.log(formData);
  };

  return (
    <div className="container">
      <h1 className="form-title">Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className="main-user-info">
          <div className="user-input-box">
            <label htmlFor="fullName">Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="user-input-box">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Set a Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="user-input-box">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email ID"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="user-input-box">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Enter your Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="user-input-box">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Set a Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="user-input-box">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="gender-details-box">
          <span className="gender-title">Gender</span>
          <div className="gender-category">
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              onChange={handleChange}
              required
            />
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              onChange={handleChange}
            />
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              name="gender"
              id="other"
              value="other"
              onChange={handleChange}
            />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <div className="form-submit-btn">
          <input className="button" type="submit" value="Register" />
        </div>
        <div className="form-element">
          <p>
            Already have an account? <a href="/signin">Sign in</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
