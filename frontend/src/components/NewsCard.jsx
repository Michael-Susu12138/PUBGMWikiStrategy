import React from "react";

const NewsCard = ({ newsItem }) => {
  return (
    <div className="card mb-3">
      {newsItem.imageUrl && (
        <img
          src={newsItem.imageUrl}
          className="card-img-top"
          alt={newsItem.title}
        />
      )}
      <div className="card-body">
        <h5 className="card-title">{newsItem.title}</h5>
        <p className="card-text">{newsItem.summary}</p>
        <p className="card-text">
          <small className="text-muted">
            Published on: {new Date(newsItem.publishedDate).toDateString()}
          </small>
        </p>
        {newsItem.readMoreUrl && (
          <a
            href={newsItem.readMoreUrl}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
