import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import placeholder from "../assets/hero.webp";
import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import Score from "./Score";

function Hero({ title = "Avengers Endgame", score = 10 }) {
  return (
    <header className="relative min-h-screen -mb-64">
      <img
        className="object-cover object-center h-full w-full"
        src={placeholder}
        alt="filme em destaque"
      />
      <div className="absolute left-0 bottom-0 w-full h-full bg-gradient-to-b from-transparent to-black"></div>
      <article className="absolute bottom-0 mb-64 px-8 flex flex-col gap-2">
        <p className="text-3xl font-light">Assista agora: </p>
        <h2 className="text-5xl font-bold">{title}</h2>
        <p className="text-base">
          Nota{" "}
          <Score value={score} />
        </p>
        <div className="flex gap-4">
          <button className="text-base rounded py-2 px-8 mr-2 mt-8 bg-black bg-opacity-50 transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:bg-opacity-75">
            <FontAwesomeIcon className="mr-2" icon={faPlay}/> Assistir
          </button>
          <button className="text-base rounded py-2 px-8 mr-2 mt-8 bg-black bg-opacity-50 transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:bg-opacity-75">
            <FontAwesomeIcon className="mr-2" icon={faPlus}/> Minha lista
          </button>
        </div>
      </article>
    </header>
  );
}

export default Hero;
