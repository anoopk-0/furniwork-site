import React from "react";

const Button = ({ type, label, handleClick }) => {
  return (
    <div className="button-container">
      <button type={type} onClick={handleClick}>
        {label}
      </button>
    </div>
  );
};

Button.defaultProps = {
  type: "button",
  label: "button",
};

export default Button;
