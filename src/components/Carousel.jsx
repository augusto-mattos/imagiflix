import React from "react";
import Slick from "react-slick";
import mockData from "../data/mockData";
import "./Carousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import Score from "./Score";

function Carousel({ data = mockData, title, value }) {
  
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

  const scoreValue = value === undefined ? 5 : value;

  return (
    <section className="carousel">
      <h2 className="relative z-10 font-light text-2xl ml-16 mt-8">
        {title}
      </h2>
      <Slick
        className="relative mb-8"
        {...options}
      >
        {data.map(({ cover, title, index }) => (
          <article key={index} className="relative transition-all duration-500 ease-in-out transform hover:scale-110">
            <img
              src={cover}
              alt={title}
            />
          <div className="absolute inset-0 w-full h-full px-4 py-8 grid place-items-center text-center bg-black bg-opacity-50 transition-all duration-500 ease-in-out opacity-0 hover:opacity-100 ">
            <button>
              <FontAwesomeIcon icon={faPlayCircle} size="5x" />
            </button>
            <h2 className="text-2xl font-bold">{title}</h2>
            <Score value={scoreValue} />
          </div>
          </article>
        ))}
      </Slick>
    </section>
  );
}

export default Carousel;
