import React from "react";
import Hero from "./components/Hero";
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='m-auto antialised font-sans bg-black text-white'>
      <Hero />
      <Navbar />
    </div>
  );
}

export default App;
