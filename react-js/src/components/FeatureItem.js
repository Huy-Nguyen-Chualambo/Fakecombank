import React from 'react';

function FeatureItem({ feature }) {
  return (
    <div className="feature-item">
      <div className="feature-icon">{feature.icon}</div>
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
    </div>
  );
}

export default FeatureItem;