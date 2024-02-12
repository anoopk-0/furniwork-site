import React from "react";

const Product = ({ item: { title, image } }) => {
  return (
    <div className="product-wrapper">
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default Product;
