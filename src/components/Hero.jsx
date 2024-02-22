import React from "react";
import placeholder from "../assets/hero.webp";

function Hero() {
  return (
    <header className='relative min-h-screen'>
      <img
        className="object-cover object-center h-full w-full"
        src={placeholder}
        alt="filme em destaque"
      />
    </header>
  );
}

export default Hero;
