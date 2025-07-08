import React from "react";

const Button = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`w-16 h-16 border-2 rounded-3xl bg-gray-400 text-2xl hover:bg-gray-500 ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;