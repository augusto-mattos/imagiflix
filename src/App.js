import React, { useEffect, useState } from "react";
import CONST from "./data/constantes";
import Hero from "./components/Hero";
import Navbar from './components/Navbar';
import Carousel from "./components/Carousel";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {

  const { URL, APISTRING } = CONST;

  const [movies, setMovies] = useState();

  useEffect(() => {
    const fetchData = async () => {
      
      const response = await fetch(`${URL}/discover/movie${APISTRING}&sort_by=popularity.desc`);
      
      const data = await response.json();
      
      setMovies(data);
    }
    fetchData();
  }, []);
  
  return (
    <div className='m-auto antialised font-sans bg-black text-white'>
      <Hero {...movies?.results[0]} />
      <Navbar />
      <Carousel title="Filmes em destaque"/>
      <Carousel title="Séries"/>
    </div>
  );
}

export default App;
