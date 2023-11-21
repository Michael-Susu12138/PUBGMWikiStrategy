import React, { useState } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Example with React
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      name: "User Name",
      email: "user@example.com",
      subject: "Subject of the message",
      message: "The message content",
    };

    try {
      await axios.post("http://localhost:8000/api/mail/send", formData);
      alert("Message sent successfully.");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message.");
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Nav />
      <div className="container flex-grow-1 my-5">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="form-control mb-3"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            type="email"
            className="form-control mb-3"
          />
          <input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="form-control mb-3"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="form-control mb-3"
            rows="5"
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactMe;
