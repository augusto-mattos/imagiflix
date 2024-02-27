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
  
  const getFeaturedMovie = () => movies && movies.results[0];

  const getMovieList = () => {
    if(movies) {
      const [featured, ...movieList] = movies?.results;
      return movieList;
    }
    return [];
  }
 
  return (
    <div className='m-auto antialised font-sans bg-black text-white'>
      <Hero {...getFeaturedMovie()} />
      <Navbar />
      <Carousel title="Filmes em destaque" data={getMovieList()}/>
      <Carousel title="Séries"/>
    </div>
  );
}

export default App;
