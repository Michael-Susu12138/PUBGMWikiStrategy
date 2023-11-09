import NewsCard from "./NewsCard";
import React, { useState, useEffect } from "react";
import axios from "axios";

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch news from the backend
    const fetchNews = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/news");
        console.log(response.data);
        setNews(response.data); // Assuming the response body is an array of news
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div>Loading news...</div>;
  }

  if (error) {
    return <div>Error fetching news: {error}</div>;
  }

  return (
    <div>
      <h2>Latest News</h2>
      <div className="container">
        <div className="row">
          {news.map((item, index) => (
            <div key={index} className="col-md-4">
              <NewsCard newsItem={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsList;
