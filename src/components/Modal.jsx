import React from "react";
import CONST from "../data/constantes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const { IMAGEURL } = CONST;


function Modal({ selectedItem, onClose }) {
    const { title, name, cover, vote_average } = selectedItem;
    return (
        <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-10">
            <div className="w-4/5 h-4/5 bg-black bg-opacity-90 p-8 rounded-lg relative">
                <button className="absolute top-4 right-4 text-white" onClick={onClose}>
                    <FontAwesomeIcon icon={faTimes} size="2x" />
                </button>
                <h1 className="text-white text-3xl mb-4">{title ? title : name}</h1>
                <img src={`${IMAGEURL}/w200/${cover}`} alt={title ? title : name} className="rounded-lg mb-4" />
                <p className="text-white">Vote Average: {vote_average.toFixed(1)}</p>
            </div>
        </div>
    )
}

export default Modal;
