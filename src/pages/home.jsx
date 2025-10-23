import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Cardhome from "../assets/imagens/cardhome.png";
import LogoFlor from "../assets/imagens/logohome.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-purple-50 flex items-center justify-center py-20 px-6">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

          {/* COLUNA ESQUERDA */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-12 px-4 lg:px-0">
            <div className="drop-shadow-md transition-transform duration-300 hover:scale-105">
              <img
                src={LogoFlor}
                alt="Logo Flor Segura"
                className="w-60 md:w-52 lg:w-66 mx-auto lg:mx-0"
              />
            </div>

            <div className="relative w-full max-w-md bg-white rounded-3xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <img
                src={Cardhome}
                alt="Card de Cadastro"
                className="w-full rounded-2xl mb-4"
              />
              <h2 className="text-gray-800 font-extrabold text-2xl mb-3">
                Ainda não possui cadastro?
              </h2>
              <button
                className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-3 rounded-full shadow-md transition transform hover:scale-105"
                onClick={() => navigate("/register")}
              >
                Clique aqui para começar!
              </button>
            </div>
          </div>

          {/* COLUNA DIREITA */}
          <div className="flex flex-col items-center justify-center gap-16 px-4 lg:px-0">
            <div className="bg-gradient-to-tr from-purple-700 to-purple-900 rounded-3xl shadow-lg p-12 w-full max-w-md flex flex-col items-center text-center text-white">
              <div className="text-6xl mb-5 animate-bounce">🛡️</div>
              <h2 className="text-3xl font-extrabold mb-8 tracking-wide">
                Precisa de ajuda?
              </h2>
              <button
                className="bg-pink-500 hover:bg-pink-600 font-extrabold text-3xl px-14 py-5 rounded-3xl shadow-md transition-transform transform hover:scale-110"
                onClick={() => navigate("/preciso-de-ajuda")}
              >
                CLIQUE AQUI!
              </button>
            </div>

            <div className="flex flex-wrap gap-6 justify-center w-full max-w-md">
              <button
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-3xl flex items-center gap-3 shadow-md transition-transform transform hover:scale-105"
                onClick={() => navigate("/fale-com-alguem")}
              >
                <span className="text-2xl">👥</span> Entre em Contato com Alguém
              </button>

              <button
                className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-8 py-4 rounded-3xl flex items-center gap-3 shadow-md transition-transform transform hover:scale-105"
                onClick={() => navigate("/sobre")}
              >
                <span className="text-2xl">❓</span> Descubra Mais Sobre a Flor Segura
              </button>
            </div>
          </div>

        </div>
      </main>
    </>
  );
};

export default Home;
