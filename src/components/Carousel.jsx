import React from "react";
import Slick from "react-slick";
import CONST from "../data/constantes";
import "./Carousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import Score from "./Score";

function Carousel({ data = [], title, name, onItemClick }) {

  const { IMAGEURL } = CONST;
  
  const SlickArrow = ({ direction, onClick }) => (
    <button
      type="button"
      className={`absolute w-16 h-full z-10 bg-black bg-opacity-50 top-0 ${
        direction === "right" ? "right-0" : "left-0"
      }`}
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={direction === "right" ? faChevronRight : faChevronLeft}
        size="3x"
      />
    </button>
  );

  const options = {
    dots: false,
    infinite: false,
    slideToShow: 10,
    slideToScroll: 1, 
    prevArrow: <SlickArrow direction="left" />,
    nextArrow: <SlickArrow direction="right" />,
  };

  const handleClick = (item) => {
    if (onItemClick) {
      onItemClick(item);
    }
  };

  return (
    <section className="carousel">
      <h2 className="relative z-10 font-light text-2xl ml-16 mt-8">
      {title !== undefined ? title : name}
      </h2>
      <Slick
        className="relative mb-8"
        {...options}
      >
        {data.map(({ id, cover, poster_path, title, name, index, vote_average, original_title, original_name, overview, first_air_date, release_date }) => (
          <article key={index} onClick={() => handleClick({ id, cover, poster_path, title, name, vote_average, original_title, original_name, overview, first_air_date, release_date })} className="relative transition-all duration-500 ease-in-out transform hover:scale-110">
            <img
              src={poster_path ? `${IMAGEURL}/w200/${poster_path}` : cover}
              alt={title ? title : name}
            />
          <div className="absolute inset-0 w-full h-full px-4 py-8 grid place-items-center text-center bg-black bg-opacity-50 transition-all duration-500 ease-in-out opacity-0 hover:opacity-100 ">
            <h2 className="text-xl leading-5 font-regular">{title ? title : name}</h2>
            <button>
              <FontAwesomeIcon icon={faPlayCircle} size="5x" />
            </button>
            <Score value={vote_average ? vote_average.toFixed(1) : 0} />
          </div>
          </article>
        ))}
      </Slick>
    </section>
  );
}

export default Carousel;
