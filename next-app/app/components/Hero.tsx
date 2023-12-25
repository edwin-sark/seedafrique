import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <>
      <section className="flex flex-row justify-between h-screen">
        <div
          id="hero-content"
          className="flex flex-col justify-start max-w-2xl m-7"
        >
          <img
            style={{ width: "10em", height: "15em" }}
            src="img/seedlogo.png"
            alt="SEEDAfrique Logo"
          />
          <h1 className="text-6xl mb-6">Data to enrich your online business</h1>
          <p className="text-xl">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className="mt-10">
            <Button buttonText="Get Started" />
          </div>
        </div>

        <div className="bg-gray-900 h-screen"></div>
      </section>
    </>
  );
};

export default Hero;
