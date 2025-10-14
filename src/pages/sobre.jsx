import React from "react";
import Navbar from "../components/navbar";

export default function Sobre() {
  return (
    <div className="bg-white min-h-screen text-purple-800 font-sans">
      <Navbar />

      <main className="pt-28 px-6 md:px-20 text-center">
        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 flex items-center justify-center gap-2">
          Sobre o FlorSegura
          <span className="text-purple-500">🌸</span>
        </h1>

        {/* Texto introdutório */}
        <p className="text-lg md:text-xl text-purple-700 leading-relaxed max-w-4xl mx-auto mb-12">
          FlorSegura é uma plataforma digital criada para ser um espaço seguro,
          anônimo e acolhedor, pensado especialmente para mulheres que vivem (ou
          suspeitam viver) situações de violência. Sabemos que, muitas vezes, a
          violência não é visível — e que o medo, a culpa e a vergonha podem
          impedir o primeiro passo.
        </p>

        {/* Cards */}
        <section className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 max-w-6xl mx-auto">
          {/* Missão */}
          <div className="bg-purple-400 text-white rounded-3xl p-8 w-full md:w-1/3 shadow-lg hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold mb-4">Nossa Missão</h2>
            <p className="text-base leading-relaxed">
              Acolher, informar e apoiar mulheres em situação de violência, de
              forma segura, prática e empática.
            </p>
          </div>

          {/* Compromisso */}
          <div className="bg-purple-400 text-white rounded-3xl p-8 w-full md:w-1/3 shadow-lg hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold mb-4">Nosso compromisso</h2>
            <p className="text-base leading-relaxed">
              Segurança e anonimato <br />
              Empatia Real <br />
              Autonomia feminina <br />
              Acesso fácil
            </p>
          </div>

          {/* Parcerias */}
          <div className="bg-purple-400 text-white rounded-3xl p-8 w-full md:w-1/3 shadow-lg hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold mb-4">
              Parcerias que fortalecem
            </h2>
            <p className="text-base leading-relaxed">
              ONGs, defensorias, delegacias da mulher, universidades e
              iniciativas feministas.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
