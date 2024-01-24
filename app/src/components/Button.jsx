import React from "react";

const Button = ({ value, takeInput }) => {
  return (
    <>
      <button onClick={() => {takeInput(value)}}>{value}</button>
    </>
  );
};

export default Button;
