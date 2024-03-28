import React from 'react';
import { FaCheck } from 'react-icons/fa';
import './card.css';

const BasicServiceCard = ({ image, title, features, additionalInfo, price }) => {
  return (
    <div className="custom-card card mb-4">
      <div className="card-body">
        <img src={image} className="card-img-top" alt={title} />
        <h5 className="custom-card-title">{title}</h5>
        <ul className="custom-card-features">
          {features.map((feature, index) => (
            <li key={index} className="card-feature">
              <FaCheck className="custom-card-icon" />
              {feature}
            </li>
          ))}
        </ul>
        <p className="custom-card-text">{additionalInfo}</p>
        <div className="card-price">
          <strong className="custom-card-price">{price}</strong>
        </div>
      </div>
    </div>
  );
};

export default BasicServiceCard;