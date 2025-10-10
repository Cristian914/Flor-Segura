import React from "react";
import Navbar from "../components/navbar";
import Cardhome from "../assets/imagens/cardhome.png"; // imagem de cadastro
import LogoFlor from "../assets/imagens/logohome.png"; // logo da flor segura

const Home = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white flex items-center justify-center py-12 px-6">
        {/* container principal */}
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* COLUNA ESQUERDA */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-10">
            <div>
              <img
                src={LogoFlor}
                alt="Logo Flor Segura"
                className="w-36 mx-auto lg:mx-0"
              />
            
            </div>

            <div className="relative w-full max-w-md">
              <img
                src={Cardhome}
                alt="Card de Cadastro"
                className="rounded-3xl shadow-lg w-full"
              />
              <div className="absolute top-6 left-6">
                <h2 className="text-white font-bold text-xl">
                  Não possui cadastro?
                </h2>
                <button className="mt-3 bg-pink-400 hover:bg-pink-500 text-white px-6 py-3 rounded-full shadow-md transition-all">
                  Clique aqui para começar!
                </button>
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA */}
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="bg-purple-300 rounded-3xl shadow-xl p-8 w-full max-w-md flex flex-col items-center">
              <div className="text-5xl mb-2">🛡️</div>
              <h2 className="text-xl font-semibold text-white mb-3">
                Precisa de ajuda?
              </h2>
              <button className="bg-pink-300 hover:bg-pink-400 text-white font-extrabold text-3xl px-10 py-5 rounded-2xl shadow-lg transition-all">
                CLIQUE AQUI!
              </button>
            </div>

            <div className="flex gap-4 flex-wrap justify-center">
              <button className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6 py-4 rounded-2xl flex items-center gap-2 transition-all">
                👥 Entre em Contato com Alguém
              </button>
              <button className="bg-purple-800 hover:bg-purple-900 text-white font-semibold px-6 py-4 rounded-2xl flex items-center gap-2 transition-all">
                ❓ Descubra Mais Sobre a Flor Segura
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
