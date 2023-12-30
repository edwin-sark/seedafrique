import React from "react";
import NavBar from "./NavBar";

const Hero = () => {
  return (
    <>
      <NavBar />
      <section className="flex flex-row justify-between h-screen">
        <div
          id="hero-content"
          className="flex flex-col justify-start max-w-2xl m-7"
        >
          <img
            style={{ width: "10em", height: "5em" }}
            className="mb-16 mt-20"
            src="img/seedlogo.png"
            alt="SEEDAfrique Logo"
          />
          <h1 className="text-5xl mb-6">
            Connecting People with Opportunities
          </h1>
          <p className="text-xl">
            Discover limitless opportunities. Embrace innovation and change the
            world.
          </p>
        </div>
        <div
          style={{
            backgroundImage: "url(img/hero-img.jpg)",
            backgroundPositionX: "-3.5em",
          }}
          className="min-h-screen w-full bg-no-repeat bg-auto bg-local"
        ></div>
      </section>
    </>
  );
};

export default Hero;
