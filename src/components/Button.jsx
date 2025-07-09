import React from "react";

const Button = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`w-16 h-16 border-2 shadow-[inset_-3px_-3px_0px_0px_#1a202c] rounded-3xl bg-gray-400 text-2xl hover:bg-gray-500 ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;