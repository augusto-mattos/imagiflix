import React from "react";
import Hero from "./components/Hero";
import Navbar from './components/Navbar';
import Carousel from "./components/Carousel";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <div className='m-auto antialised font-sans bg-black text-white'>
      <Hero />
      <Navbar />
      <Carousel title="Filmes em destaque"/>
      <Carousel title="Séries"/>
    </div>
  );
}

export default App;
