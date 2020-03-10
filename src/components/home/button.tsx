import React from "react";

const Button: React.FC = ({ children, type }) => {
  return <button className={type}>{children}</button>;
};

export default Button;

