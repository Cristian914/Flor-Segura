import React from "react";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Cardhome from "../assets/imagens/cardhome.png";
import LogoFlor from "../assets/imagens/logohome.png";

const Home = () => {
  const navigate = useNavigate();
=======
import Footer from "../components/footer"
import Hero from "../components/hero";


const Home = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <div>
                    <Hero/>
                </div>
>>>>>>> 5fd61a78676dd7b294d1be40fb5db72c7686ed6c

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white flex items-center justify-center py-16 px-10">
        {/* CONTAINER PRINCIPAL */}
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* COLUNA ESQUERDA */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-12">
            
            {/* LOGO */}
            <img
              src={LogoFlor}
              alt="Logo Flor Segura"
              className="w-64 mx-auto lg:mx-0"
            />

            {/* CARD DE CADASTRO (dentro da imagem) */}
            <div className="relative w-full max-w-md">
              <img
                src={Cardhome}
                alt="Card de Cadastro"
                className="w-full object-cover rounded-3xl shadow-lg"
              />
              
              {/* TEXTO E BOTÃO SOBRE A IMAGEM */}
              <div className="absolute bottom-6 left-6 text-left">
                <h2 className="bg-purple-700/90 text-white font-bold text-xl px-4 py-2 rounded-lg inline-block mb-3 shadow-md">
                  Não possui cadastro?
                </h2>
                <button
                  onClick={() => navigate("/cadastro")}
                  className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg transition-transform transform hover:scale-105"
                >
                  Clique aqui para começar!
                </button>
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA */}
          <div className="flex flex-col items-center justify-center gap-10">
            
            {/* CARD DE AJUDA */}
            <div className="bg-purple-400 rounded-[2rem] shadow-lg p-10 w-full max-w-lg flex flex-col items-center text-center border-[6px] border-purple-700">
              <div className="text-6xl mb-4">🛡️</div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Precisa de ajuda?
              </h2>
              <button
                onClick={() => navigate("/ajuda")}
                className="bg-pink-300 hover:bg-pink-400 text-white font-extrabold text-4xl px-14 py-8 rounded-[1.5rem] shadow-md transition-transform transform hover:scale-105"
              >
                CLIQUE AQUI!
              </button>
            </div>

            {/* BOTÕES DE AÇÃO */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-lg">
              <button
                onClick={() => navigate("/contato")}
                className="bg-purple-700 hover:bg-purple-800 text-white font-semibold text-lg px-8 py-8 rounded-[1.5rem] flex flex-col items-center justify-center gap-3 shadow-lg transition-transform transform hover:scale-105"
              >
                <span>Entre em Contato com Alguém</span>
                <span className="text-3xl">👥</span>
              </button>

              <button
                onClick={() => navigate("/sobre")}
                className="bg-purple-800 hover:bg-purple-900 text-white font-semibold text-lg px-8 py-8 rounded-[1.5rem] flex flex-col items-center justify-center gap-3 shadow-lg transition-transform transform hover:scale-105"
              >
                <span>Descubra Mais Sobre A Flor Segura</span>
                <span className="text-3xl">❓</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
