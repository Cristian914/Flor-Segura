import React from "react";
import { useNavigate } from "react-router-dom";
import CardHelp from "../assets/imagens/cardhelp.png";
import Navbar from "../components/navbar";

export default function PrecisoDeAjuda() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      {/* REMOVIDO o padding-top e já começamos com a hero */}
      <div className="bg-white text-purple-800 font-sans">
        {/* === SEÇÃO HERO AJUSTADA === */}
        <section className="bg-gradient-to-r from-purple-300 to-purple-200 w-full flex flex-col lg:flex-row items-center justify-between px-10 lg:px-24 py-20 lg:py-28 relative overflow-hidden">
          {/* TEXTO PRINCIPAL */}
          <div className="text-center lg:text-left max-w-xl z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug">
              Você não está sozinha. <br />
              Peça ajuda com segurança.
            </h1>
          </div>

          {/* IMAGEM À DIREITA */}
          <div className="mt-10 lg:mt-0 lg:absolute right-20 bottom-0">
            <img
              src={CardHelp}
              alt="Pessoas se abraçando"
              className="w-[360px] md:w-[420px] lg:w-[480px] object-contain drop-shadow-xl"
            />
          </div>
        </section>

        {/* === SEÇÃO PRECISA DE AJUDA === */}
        <section className="flex flex-col lg:flex-row items-center justify-center gap-8 py-16 px-8 lg:px-24">
          {/* ÍCONE + TEXTO */}
          <div className="flex items-center justify-center gap-4">
            <div className="bg-purple-200 p-5 rounded-full shadow-md">
              <span className="text-4xl">🛡️</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-purple-800">
              Precisa de Ajuda?
            </h2>
          </div>

          {/* BOTÃO */}
          <button
            onClick={() => navigate("/rede-de-apoio")}
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold text-xl px-10 py-4 rounded-2xl shadow-lg transition-transform transform hover:scale-105"
          >
            Buscar Rede de apoio
          </button>
        </section>

        {/* === SEÇÃO EXPLICATIVA === */}
        <section className="text-left px-8 lg:px-24 pb-24 max-w-5xl mx-auto">
          <h3 className="text-3xl font-extrabold text-purple-800 mb-6">
            Como uma Rede de Apoio Pode Me Ajudar?
          </h3>
          <p className="text-lg leading-relaxed text-purple-900">
            Uma rede de apoio é formada por pessoas, organizações e serviços
            preparados para oferecer ajuda em momentos de risco ou sofrimento.
            Quando você procura essa rede, não está sozinha — existem caminhos
            seguros e acolhedores para cuidar de você.
          </p>
        </section>
      </div>
    </>
  );
}
