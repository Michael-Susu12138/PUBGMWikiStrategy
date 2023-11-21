import React, { useState, useRef } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const form = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_KEY,
        import.meta.env.VITE_TEMPLATE_KEY,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message");
        }
      );
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Nav />
      <div className="container flex-grow-1 my-5">
        <h2>Contact Me</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="form-control mb-3"
          />
          <input
            name="user_email"
            value={formData.user_email}
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

export default Contact;
