import React from "react";
import Button from "./Button";
import "../css/style.css";

interface Props {
  summaryH3: string;
  summaryP: string;
}

const Summary = ({ summaryH3, summaryP }: Props) => {
  return (
    <div className="flex pt-28 pb-28">
      {/* Left side with text*/}
      <div className="flex flex-col justify-center w-1/2 p-8">
        <h3 className="text-5xl font-bold mb-4 typewriter">{summaryH3}</h3>
        <p className="pb-12">{summaryP}</p>
        <Button buttonText="Learn More" />
      </div>

      {/*  Right side with image  */}
      <div className="w-1/2 p-8">
        <img
          src="/img/hero-img.jpg"
          alt="Image"
          className="w-full h-auto rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Summary;
