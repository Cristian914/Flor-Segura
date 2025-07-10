import React from "react";
import Rolex from '../assets/imagens/rolex.png';
 
const CardAbout = () => {
  return (
    <div
      className="relative w-full h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${Rolex})` }}
    >
      {/* Card transparente estiloso */}
      <div className="
        absolute top-24 left-1/2 transform -translate-x-1/2
        bg-red-300/60 
        border border-white border-opacity-30
        rounded-3xl
        shadow-2xl
        max-w-lg
        p-10
        text-white
        transition-transform duration-300 hover:scale-105
        
      ">
        <h2 className="text-4xl  text-center font-extrabold mb-4 drop-shadow-md">
          ALÔCAR
        </h2>
        <p className="text-lg leading-relaxed drop-shadow-sm">
          O Mais Novo Aplicativo De Mobilidade
          <br />
          <span className="italic opacity-80">Planejamento do sobre.</span>
        </p>
      </div>
    </div>
  );
};
 
export default CardAbout;
 