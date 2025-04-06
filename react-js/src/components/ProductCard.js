import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-img">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <a href={product.link} className="learn-more">
          Tìm hiểu thêm
        </a>
      </div>
    </div>
  );
}

export default ProductCard;