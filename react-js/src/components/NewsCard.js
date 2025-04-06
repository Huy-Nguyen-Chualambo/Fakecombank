import React from 'react';

function NewsCard({ news }) {
  return (
    <div className="news-card">
      <div className="news-img">
        <img src={news.image} alt={news.title} />
      </div>
      <div className="news-info">
        <div className="news-date">{news.date}</div>
        <h3>{news.title}</h3>
        <p>{news.description}</p>
        <a href={news.link} className="learn-more">
          Xem thêm
        </a>
      </div>
    </div>
  );
}

export default NewsCard;