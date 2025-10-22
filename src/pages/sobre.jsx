import React from "react";
import Navbar from "../components/navbar";
import { FaHandsHelping, FaShieldAlt, FaUsers, FaHeart, FaLightbulb, FaGlobe } from "react-icons/fa";
import LogoFlor from "../assets/imagens/logo.png"; // importando sua flor roxa

export default function Sobre() {
  return (
    <div className="bg-gradient-to-b from-pink-100 to-pink-50 min-h-screen text-purple-900 font-sans">
      <Navbar />

      <main className="pt-28 px-6 md:px-20 text-center max-w-6xl mx-auto">
        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 flex items-center justify-center gap-3 text-purple-800">
          Sobre o FlorSegura <span className="text-purple-500">🌸</span>
        </h1>

        {/* Texto introdutório */}
        <p className="text-lg md:text-xl text-purple-700 leading-relaxed max-w-4xl mx-auto mb-12 italic">
          O FlorSegura é mais que uma plataforma — é um abraço digital. Um espaço
          seguro, anônimo e acolhedor para mulheres que buscam força, apoio e esperança
          em meio a situações difíceis.
        </p>

        {/* Destaque visual com logo */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-16">
          <img
            src={LogoFlor}
            alt="Flor Segura Logo"
            className="w-40 md:w-48 drop-shadow-lg animate-pulse"
          />
          <div className="max-w-xl text-left text-purple-800">
            <h2 className="text-3xl font-extrabold mb-4">Uma flor que simboliza a força e o renascimento</h2>
            <p className="text-lg leading-relaxed">
              Assim como uma flor que desabrocha mesmo nas condições mais difíceis,
              nosso objetivo é ajudar mulheres a florescerem em suas vidas,
              superando o medo e a violência com coragem e apoio.
            </p>
          </div>
        </div>

        {/* Cards dinâmicos com ícones */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {/* Missão */}
          <div className="bg-purple-500 text-white rounded-3xl p-8 shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center">
            <FaHandsHelping className="text-5xl mb-4" />
            <h2 className="text-2xl font-bold mb-4">Nossa Missão</h2>
            <p className="text-base leading-relaxed">
              Oferecer acolhimento, informação e apoio prático para mulheres que
              enfrentam violência, fortalecendo sua segurança e autonomia.
            </p>
          </div>

          {/* Compromisso */}
          <div className="bg-purple-500 text-white rounded-3xl p-8 shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center">
            <FaShieldAlt className="text-5xl mb-4" />
            <h2 className="text-2xl font-bold mb-4">Nosso Compromisso</h2>
            <ul className="list-disc list-inside space-y-2 text-left text-sm md:text-base">
              <li>Garantir segurança e anonimato</li>
              <li>Oferecer empatia real e acolhedora</li>
              <li>Promover autonomia feminina</li>
              <li>Facilitar acesso rápido e fácil</li>
            </ul>
          </div>

          {/* Parcerias */}
          <div className="bg-purple-500 text-white rounded-3xl p-8 shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center">
            <FaUsers className="text-5xl mb-4" />
            <h2 className="text-2xl font-bold mb-4">Parcerias que fortalecem</h2>
            <p className="text-base leading-relaxed">
              Trabalhamos com ONGs, defensorias, delegacias especializadas,
              universidades e movimentos feministas para ampliar nosso impacto.
            </p>
          </div>
        </section>

        {/* Seção de valores */}
        <section className="bg-purple-50 rounded-3xl p-10 shadow-md max-w-5xl mx-auto">
          <h3 className="text-3xl font-extrabold text-purple-700 mb-10">
            Nossos Valores Fundamentais
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-purple-800">
            <div className="flex flex-col items-center gap-3">
              <FaHeart className="text-4xl text-purple-500" />
              <h4 className="text-xl font-semibold">Empatia</h4>
              <p className="text-center">
                Colocamos o coração em cada ação para garantir acolhimento genuíno.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <FaLightbulb className="text-4xl text-purple-500" />
              <h4 className="text-xl font-semibold">Inovação</h4>
              <p className="text-center">
                Buscamos soluções criativas para apoiar mulheres de forma prática.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <FaGlobe className="text-4xl text-purple-500" />
              <h4 className="text-xl font-semibold">Inclusão</h4>
              <p className="text-center">
                Um espaço para todas, respeitando todas as histórias e diversidades.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
