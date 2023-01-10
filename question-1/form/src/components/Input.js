import React from "react";

const Input = ({ value, handleChange, label, type }) => {
  return (
    <label>
      {label}:
      <input type={type} value={value} onChange={handleChange} />
    </label>
  );
};

export default Input;
