import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../assets/imagiflix.png';
import { faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import placeholderUser from '../assets/user.jpg';

import './Navbar.css';

const Navbar = () => (
    <nav className='navbar absolute top-0 left-0 grid grid-cols-3 items-center w-full p-8 text-white'>
        <div className='justify-self-start'>
            <h1 className='hidden'>Imagiflix</h1>
            <img src={logo} alt='Imagiflix' />
        </div>
        <ul className='justify-self-start grid grid-cols-3 gap-4'>
            <li className='font-bold'>Início</li>
            <li><a href='#series'>Séries</a></li>
            <li><a href='#movies'>Filmes</a></li>
        </ul>
        <div className='justify-self-end flex justify-items-end items-center'>
            <form className='relative w-64'>
                <input className='w-full bg-black border border-white rounded py-1 px-3 transition-all duration-300 ease-in-out opacity-0 hover:opacity-100 focus:opacity-100' type='text' placeholder='Títulos, elenco e gêneros' />
                <button className='absolute right-0 py-1 px-2' onClick={(e) => e.preventDefault()}>
                    <FontAwesomeIcon icon={ faSearch }/>
                </button>
            </form>
            <div className='flex ml-4'>
                <img src={placeholderUser} alt='Avatar do usuário'/>
                <button>
                    <FontAwesomeIcon className='ml-4' icon={ faCaretDown }/>
                </button>
                <ul className='hidden'>
                    <li><a href='#account'>Minha conta</a></li>
                    <li><a href='#logout'>Sair</a></li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;
