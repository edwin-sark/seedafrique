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
        {/* Hero side Image not displaying, Have to fix this */}
        <div
          style={{
            backgroundImage: "url(img/hero-img.jpg)",
            backgroundPositionX: "-3.05em",
          }}
          className="min-h-screen w-full bg-no-repeat bg-auto bg-local"
        ></div>
      </section>
    </>
  );
};

export default Hero;
