import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
// import './Home.css';

const AddNews = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    content: "",
    author: "",
    category: "",
    tags: "",
    imageUrl: "",
    readMoreUrl: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare tags for array format expected by the backend
    const submissionData = {
      ...formData,
      tags: formData.tags.split(",").map((tag) => tag.trim()), // Convert string to array by comma
    };

    try {
      await axios.post(
        "https://pubgm-wiki-strat-api.onrender.com/api/news/add",
        submissionData
      );
      navigate("/");
    } catch (error) {
      console.error("Error submitting news:", error);
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Nav />
      <div className="container flex-grow-1 my-5">
        <h2>Add News</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            required
            className="form-control mb-3"
          />
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            placeholder="Summary"
            required
            className="form-control mb-3"
            rows="3"
          />
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Content"
            required
            className="form-control mb-3"
            rows="5"
          />
          <input
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Author"
            required
            className="form-control mb-3"
          />
          <input
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            required
            className="form-control mb-3"
          />
          <input
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="Tags (comma-separated)"
            className="form-control mb-3"
          />
          <input
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="Image URL"
            className="form-control mb-3"
          />
          <input
            name="readMoreUrl"
            value={formData.readMoreUrl}
            onChange={handleChange}
            placeholder="Read More URL"
            className="form-control mb-3"
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AddNews;
