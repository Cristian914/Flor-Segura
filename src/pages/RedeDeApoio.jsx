import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import CardHelp from "../assets/imagens/cardhelp.png";
import IconMapa from "../assets/imagens/iconmapa.png"; // ícone do mapa de apoio
import Navbar from "../components/navbar";

export default function RedeDeApoio() {
  const navigate = useNavigate();

  const handleSaidaRapida = () => {
    window.open("https://www.google.com", "_blank");
    window.location.href = "https://www.climatempo.com.br/";
  };

  return (
    <>
      <Navbar />
      <div className="bg-white text-purple-800 font-sans">
        {/* SEÇÃO HERO */}
        <section className="bg-purple-300 flex flex-col lg:flex-row items-center justify-between px-10 lg:px-24 py-12 lg:py-16 relative overflow-hidden min-h-[60vh]">
          {/* Texto */}
          <div className="text-center lg:text-left z-10 max-w-xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug text-purple-900">
              Sua vida importa. <br />
              Você merece viver sem medo.
            </h1>
          </div>

          {/* Imagem */}
          <div className="mt-10 lg:mt-0 z-10">
            <img
              src={CardHelp}
              alt="Ilustração de apoio"
              className="w-full max-w-[380px] lg:max-w-[440px] object-contain"
            />
          </div>

          {/* Fundo decorativo roxo claro */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-400 rounded-full blur-3xl opacity-30"></div>
          </div>
        </section>

        {/* SEÇÃO PRINCIPAL */}
        <section className="flex flex-col lg:flex-row justify-between items-start gap-10 px-10 lg:px-24 py-16">
          {/* ESQUERDA */}
          <div className="flex flex-col gap-4 max-w-lg">
            <h2 className="text-2xl lg:text-3xl font-bold text-purple-800">
              Buscar Rede de Apoio
            </h2>
            <p className="text-lg text-purple-900">
              Busquem Mapa de Apoio e busque pelo mapa sua necessidade
            </p>

            {/* ÍCONE DO MAPA */}
            <div
              className="mt-4 cursor-pointer"
              onClick={() => navigate("/mapa-de-apoio")}
            >
              <img
                src={IconMapa}
                alt="Ícone de mapa"
                className="w-28 h-28 bg-purple-400 rounded-2xl p-3"
              />
            </div>
          </div>

          {/* DIREITA */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-purple-800">
              Contatos Úteis
            </h2>

            {/* Contato 190 */}
            <div className="flex items-center justify-between border border-purple-400 rounded-md p-3 w-80 shadow-sm">
              <div className="flex items-center gap-3 text-purple-800">
                <FaPhone className="text-xl" />
                <span className="text-2xl font-bold">190</span>
              </div>
              <a
                href="tel:190"
                className="text-purple-700 font-semibold hover:underline"
              >
                Ligar Agora
              </a>
            </div>

            {/* Contato 180 */}
            <div className="flex items-center justify-between border border-purple-400 rounded-md p-3 w-80 shadow-sm">
              <div className="flex items-center gap-3 text-purple-800">
                <FaPhone className="text-xl" />
                <span className="text-2xl font-bold">180</span>
              </div>
              <a
                href="tel:180"
                className="text-purple-700 font-semibold hover:underline"
              >
                Ligar Agora
              </a>
            </div>

            {/* BOTÃO SAÍDA RÁPIDA */}
            <button
              onClick={handleSaidaRapida}
              className="bg-gradient-to-r from-purple-500 to-pink-400 text-white text-xl font-bold px-10 py-4 rounded-full shadow-lg mt-6 transition-transform transform hover:scale-105"
            >
              Saída Rápida
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
