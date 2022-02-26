import React from "react";
import "./button.css";
const Button = ({ type, variant, children, style }) => {
  return (
    <button
      style={style}
      className={`hc-button hc-button__${type} hc-button__${variant}`}
    >{children}
    </button>
  );
};

export default Button;
