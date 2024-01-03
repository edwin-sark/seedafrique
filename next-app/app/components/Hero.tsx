import React from "react";
import NavBar from "./NavBar";
import "../css/style.css";
import Button from "./Button";

interface Props {
  h1: string;
  p: string;
}

const Hero = ({ h1, p }: Props) => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-content text-lime-100">
          <NavBar />
          <div className="flex flex-col items-center justify-center h-screen ">
            <div className="w-3/5 text-center">
              <h1 className="text-5xl mb-6 ">{h1}</h1>
              <p className="text-xl">{p}</p>
            </div>
            <span className="flex space-x-20 mt-12">
              <Button buttonText="Learn More" />
              <Button buttonText="Get Started"></Button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
