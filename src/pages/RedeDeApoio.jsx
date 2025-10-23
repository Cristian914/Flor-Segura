import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaPhone,
  FaHandsHelping,
  FaBrain,
  FaQuestionCircle,
  FaHeart,
} from "react-icons/fa";
import CardHelp from "../assets/imagens/cardhelp.png";
import IconMapa from "../assets/imagens/iconmapa.png";
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
          <div className="text-center lg:text-left z-10 max-w-xl animate-fadeIn">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug text-purple-900">
              Sua vida importa. <br />
              Você merece viver sem medo.
            </h1>
          </div>

          <div className="mt-10 lg:mt-0 z-10 animate-zoomIn">
            <img
              src={CardHelp}
              alt="Ilustração de apoio"
              className="w-full max-w-[380px] lg:max-w-[440px] object-contain"
            />
          </div>
        </section>

        {/* SEÇÃO PRINCIPAL */}
        <section className="flex flex-col lg:flex-row justify-between items-start gap-10 px-10 lg:px-24 py-16">
          {/* ESQUERDA */}
          <div className="flex flex-col gap-6 max-w-lg animate-fadeIn">
            <h2 className="text-2xl lg:text-3xl font-bold text-purple-800">
              Buscar Rede de Apoio
            </h2>
            <p className="text-lg text-purple-900">
              Clique no mapa e encontre apoio perto de você.
            </p>

            {/* MAPA + CARD AO LADO */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mt-6">
              {/* ÍCONE DE MAPA */}
              <div
                className="cursor-pointer"
                onClick={() => navigate("/mapa-de-apoio")}
              >
                <img
                  src={IconMapa}
                  alt="Ícone de mapa"
                  className="w-28 h-28 bg-purple-400 rounded-2xl p-3 hover:scale-105 transition-transform shadow-md"
                />
              </div>

              {/* CARD MOTIVACIONAL */}
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-5 rounded-2xl shadow-md hover:shadow-xl transition-transform hover:scale-105 max-w-xs text-center">
                <FaHeart className="text-4xl text-pink-500 mx-auto mb-3 animate-pulse" />
                <h3 className="text-lg font-bold text-purple-800 mb-2">
                  Você merece apoio e acolhimento 💜
                </h3>
                <p className="text-sm text-purple-700 mb-3">
                  Sempre há alguém disposto a ouvir, acolher e te ajudar a
                  recomeçar. Dê o primeiro passo!
                </p>
                <button
                  onClick={() => navigate("/mapa-de-apoio")}
                  className="bg-gradient-to-r from-purple-500 to-pink-400 text-white font-semibold px-4 py-2 rounded-full text-sm shadow hover:brightness-110 transition-all"
                >
                  Encontre Ajuda Agora
                </button>
              </div>
            </div>
          </div>

          {/* DIREITA - CONTATOS */}
          <div className="flex flex-col gap-6 animate-zoomIn">
            <h2 className="text-2xl lg:text-3xl font-bold text-purple-800">
              Contatos Úteis
            </h2>

            <div className="flex items-center justify-between border border-purple-400 rounded-md p-3 w-80 shadow-sm bg-gradient-to-r from-purple-50 to-purple-100">
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

            <div className="flex items-center justify-between border border-purple-400 rounded-md p-3 w-80 shadow-sm bg-gradient-to-r from-purple-50 to-purple-100">
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

            <button
              onClick={handleSaidaRapida}
              className="bg-gradient-to-r from-purple-500 to-pink-400 text-white text-xl font-bold px-10 py-4 rounded-full shadow-lg mt-6 transition-transform transform hover:scale-105"
            >
              Saída Rápida
            </button>
          </div>
        </section>

        {/* NOVOS CARDS EXPLICATIVOS */}
        <section className="px-10 lg:px-24 py-12 flex flex-col md:flex-row justify-center items-stretch gap-8 animate-fadeIn">
          {/* CARD 1 */}
          <div className="flex-1 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition-transform hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <FaHandsHelping className="text-3xl text-purple-700" />
              <h3 className="text-xl font-bold text-purple-800">
                O que é Rede de Apoio?
              </h3>
            </div>
            <p className="text-purple-900 leading-relaxed">
              É um conjunto de pessoas e instituições que podem te acolher e
              oferecer suporte emocional, jurídico e social quando você mais
              precisa.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="flex-1 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition-transform hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <FaBrain className="text-3xl text-purple-700" />
              <h3 className="text-xl font-bold text-purple-800">
                Por que buscar ajuda?
              </h3>
            </div>
            <p className="text-purple-900 leading-relaxed">
              Buscar ajuda é um ato de coragem e amor-próprio. Você não precisa
              enfrentar situações difíceis sozinha — há pessoas dispostas a
              ouvir e apoiar.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="flex-1 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition-transform hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <FaQuestionCircle className="text-3xl text-purple-700" />
              <h3 className="text-xl font-bold text-purple-800">
                Quando ligar?
              </h3>
            </div>
            <p className="text-purple-900 leading-relaxed">
              Sempre que sentir medo, ameaça, agressão física, verbal ou
              psicológica. Ligar para 180 ou 190 pode salvar vidas.
            </p>
          </div>
        </section>

        {/* MENSAGEM FINAL */}
        <section className="text-center px-10 lg:px-24 py-12 animate-fadeIn">
          <h2 className="text-3xl font-bold text-purple-900 mb-4">
            Você não está sozinha.
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed text-purple-800">
            Buscar ajuda é um passo importante para reconstruir sua segurança e
            bem-estar. Sempre há alguém pronto para te ouvir.
          </p>
        </section>
      </div>
    </>
  );
}
