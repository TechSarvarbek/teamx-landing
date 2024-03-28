import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { FaCheckCircle } from "react-icons/fa";
import './card.css';
import './ServiceCard.css';


const ServiceCard = ({ image, title, features, additionalInfo }) => {
  return (
    <div className="card mb-4 custom-card">
      <img src={image} className="card-img-top custom-card-img" alt={title} />
      <div className="card-body">
        <h5 className="card-title custom-card-title">{title}</h5>
      </div>
    </div>
  );
};

export default ServiceCard;