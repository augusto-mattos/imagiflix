import React, { useEffect, useState } from "react";
import CONST from "./data/constantes";
import Loading from "./components/Loading";
import Hero from "./components/Hero";
import Navbar from './components/Navbar';
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {

  const { URL, APISTRING } = CONST;

  const [movies, setMovies] = useState();
  const [series, setSeries] = useState();
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null); // State para o item selecionado
  const [modalOpen, setModalOpen] = useState(false); // State para controlar se a modal está aberta

  useEffect(() => {
    const fetchData = async () => {
      
      const moviesResponse = await fetch(`${URL}/discover/movie${APISTRING}&sort_by=popularity.desc`);
      const moviesData = await moviesResponse.json();
      setMovies(moviesData);

      const seriesResponse = await fetch(`${URL}/discover/tv${APISTRING}&sort_by=popularity.desc`);
      const seriesData = await seriesResponse.json();
      setSeries(seriesData);

      setLoading(false)
    }
    fetchData();
  }, []);
  
  const getFeaturedMovie = () => movies && movies.results[0];

  const getMovieList = () => {
    if (movies) {
      const [featured, ...movieList] = movies.results;
      return movieList.map(movie => ({
        ...movie,
        type: 'movie' 
      }));
    }
    return [];
  };
  
  const getSeriesList = () => {
    if (series) {
      return series.results.map(serie => ({
        ...serie,
        type: 'series' 
      }));
    }
    return [];
  };
 
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setModalOpen(true); // Abrir a modal
  };

  return (
    <div className='m-auto antialised font-sans bg-black text-white'>
      {loading &&
        <>
          <Loading />
          <Navbar />
        </> 
      }
     {!loading && (
     <>
     <Hero {...getFeaturedMovie()} />
      <Navbar />
      <Carousel title="Filmes em destaque" data={getMovieList()} onItemClick={handleItemClick} />
      <Carousel title="Séries populares" data={getSeriesList()}  onItemClick={handleItemClick} />
      <Footer />
      {modalOpen && <Modal selectedItem={selectedItem} onClose={() => setModalOpen(false)} />}
     </>
     )}
    </div>
  );
}

export default App;
