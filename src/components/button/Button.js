import React from "react";

const Button = ({ type, label, handleClick, variant }) => {
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
