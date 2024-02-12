import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Card = ({ item }) => {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={item.image} alt={""} />
      </div>
      <div className="card-content">
        <div>
          <h4>{item.title}</h4>
          <FaArrowRight />
        </div>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default Card;
