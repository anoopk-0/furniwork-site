import React from "react";

const HeroImage = ({ image, alt = "img" }) => {
  return (
    <picture className="hero-img">
      <source media={`(min-width: #{'$breakpoint-m'})`} srcSet={image} />
      {/* Interpolate the $breakpoint-m variable using #{...} */}
      <source media={`(min-width: #{'$breakpoint-sm'})`} srcSet={image} />
      {/* Make sure $breakpoint-sm is defined similarly */}
      <img src={image} alt={alt} />
    </picture>
  );
};

export default HeroImage;
