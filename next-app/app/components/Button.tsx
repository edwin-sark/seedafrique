import React from "react";
interface ButtonProps {
  buttonText: string;
}

const Button = ({ buttonText }: ButtonProps) => {
  return (
    <button className="rounded-lg p-2 px-7 border-solid ring-lime-700 bg-lime-700 hover:bg-lime-100 ring-2 hover:ring-lime-900 text-gray-200 hover:text-gray-900 transition duration-700 ease-in-out">
      {buttonText}
    </button>
  );
};

export default Button;
