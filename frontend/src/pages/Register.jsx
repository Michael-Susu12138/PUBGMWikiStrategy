import React, { useState } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API}api/auth/register`,
        formData
      );
      // Check for successful status code (e.g., 201 Created)
      if (response.status === 201) {
        console.log("successful");
        alert("User registered successfully");
        // Redirect to login or another appropriate page
        // navigate("/");
      } else {
        // If the status code is not successful, throw an error to go to the catch block
        throw new Error(`Server responded with status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error registering user:", error);

      // Check if the error response has a status code of 409 Conflict
      if (error.response && error.response.status === 409) {
        alert(error.response.data.message); // Username taken or other user-related error
      } else {
        alert("Failed to register user"); // Other errors
      }
    }
  };

  return (
    <div className="main-container">
      <Nav />
      <div className="content">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <Footer className="footer" />
    </div>
  );
};

export default Register;
