import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API}api/auth/login`, // Update with your API endpoint
        credentials
      );
      if (response.data.message) {
        alert(response.data.message);
      }
      if (response.status === 200) {
        // Assume success and redirect to the dashboard or other page
        navigate("/");
      }
    } catch (error) {
      if (error.response) {
        // The server responded with a status other than 200 range
        alert(error.response.data.message);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
        alert("The server did not respond. Please try again later.");
      } else {
        // Something else happened in making the request that triggered an error
        console.log("Error", error.message);
        alert("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
