import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Card = ({ item: { title, image, description, subtitle } }) => {
  return (
    <div className="card-container">
      {image && (
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
      )}
      <div className="card-content">
        <div>
          <h4>{title}</h4>
          {!subtitle && <FaArrowRight />}
        </div>
        <p>{description}</p>
        {subtitle && (
          <div>
            <h4>{subtitle}</h4>
            <FaArrowRight />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
