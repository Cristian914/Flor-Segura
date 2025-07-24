import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import carh from "../assets/imagens/carh.jpg"

const Hero = () => {
    return (
        <section
            className="relative w-auto h-screen  bg-cover bg-center flex items-center justify-center text-white"
        >
         <div
      className="relative w-full min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${carh})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-red-300/80 to-red-100/80 backdrop-blur-sm"></div>

            <div className="relative z-10 max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-10 items-center">
            
                <div className="text-red-800 text-center pt-90">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                        Bem-vindo à <span className="text-red-600">Alo-Car</span>
                    </h1>
                    <p className="text-lg text-gray-700 mb-6 max-w-lg">
                        Mobilidade inteligente, segura e sempre ao seu lado. Com a gente, cada viagem tem um destino certo: o seu conforto.
                    </p>
                  <a href="/about"><button className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all duration-300 shadow-md">
                        Conheca agora
                        <FaArrowRight className="ml-2" />
                    </button></a>
                    </div>
                </div>
                </div>
        </section>
    );
};

export default Hero;
