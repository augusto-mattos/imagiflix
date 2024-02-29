import React, { useEffect } from "react";
import CONST from "../data/constantes";
import Score from "./Score";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const { IMAGEURL } = CONST;

function Modal({ selectedItem, onClose }) {
  const {
    title,
    name,
    poster_path,
    vote_average,
    original_title,
    original_name,
    overview,
    first_air_date,
    release_date,
  } = selectedItem;

  const handleKeyPress = (event) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    // Adiciona o event listener quando o componente for montado
    document.addEventListener("keydown", handleKeyPress);

    // Remove o event listener quando o componente for desmontado
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []); // Executa apenas uma vez, quando o componente é montado

  return (
    <div className="fixed top-0 left-0 p-12 w-full h-screen flex items-center justify-center z-10">
      <article className="relative w-11/12 h-full flex gap-4 p-8 bg-black shadow-lg opacity-90">
        <img
          src={`${IMAGEURL}/w500/${poster_path}`}
          alt={title ? title : name}
          className="w-auto h-full"
        />
        <div className="flex flex-col">
          <h2 className="text-white text-3xl font-bold">
            {title ? title : name}
          </h2>
          <h6 className="font-light">
            {original_title ? original_title : original_name}
          </h6>
          <p className="py-8 mr-8">{overview}</p>
          <div>
            <Score value={vote_average.toFixed(1)} />
            <span className="bg-red-500 rounded py-2 px-4 ml-2">
              Data de lançamento:{" "}
              {first_air_date ? `${first_air_date}` : `${release_date}`}
            </span>
          </div>
          <FontAwesomeIcon
            className="cursor-pointer absolute top-0 right-0 mt-4 mr-4 text-red-600"
            icon={faTimes}
            size="2x"
            onClick={onClose}
          />
        </div>
      </article>
    </div>
  );
}

export default Modal;
