import React from "react";
interface ButtonProps {
  buttonText: string;
}

const Button = ({ buttonText }: ButtonProps) => {
  return (
    <button className="rounded-lg p-2 px-7 border-solid bg-lime-900 ring-2 ring-gray-600 text-gray-200">
      {buttonText}
    </button>
  );
};

export default Button;
