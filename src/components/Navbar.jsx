import React from "react";
import logo from "../assets/imagiflix.png";
import placeholderUser from "../assets/user.webp";

function Navbar() {
  return (
    <nav className='absolute top-0 left-0 grid grid-cols-2 items-center w-full p-8'>
      <div className="justify-self-start grid grid-cols-2 gap-4 items-center">
        <h1 className="hidden">Imagiflix</h1>
        <img
          src={logo}
          alt="Imagiflix"
        />
      <ul className="grid grid-flow-col gap-4">
        <li className="font-bold">Início</li>
        <li>
          <a href="#series">Séries</a>
        </li>
        <li>
          <a href="#movies">Filmes</a>
        </li>
      </ul>
      </div>
      <div className="justify-self-end grid grid-cols-2 justify-items-end items-center">
        <form>
          <input
            className="p-2"
            type="text"
            placeholder="Títulos, gente e gênero"
          />
          <button>
            <i></i>
          </button>
        </form>
        <div className="flex">
          <img
            src={placeholderUser}
            alt="foto do usuario"
          />
          <button>
            <ul className="hidden">
              <li><a href="#account">Conta</a></li>
              <li><a href="#logout">Sair</a></li>
            </ul>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
