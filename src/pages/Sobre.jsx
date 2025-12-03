import React from "react";
import Navbar from "../components/navbar";
import {
  FaHandsHelping,
  FaShieldAlt,
  FaUsers,
  FaHeart,
  FaRobot,
  FaMapMarkerAlt,
  FaBolt,
  FaBook,
  FaCheckCircle,
} from "react-icons/fa";
import { GiLotusFlower } from "react-icons/gi";

import MulherImg from "../assets/imagens/mulher.png";

export default function Sobre () {
  return (
    <div className="bg-gradient-to from-pink-100 to-pink-50 min-h-screen text-purple-900 font-sans">
      <Navbar />

      <main className="pt-28 px-6 md:px-20 text-center max-w-6xl mx-auto">

        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 flex items-center justify-center gap-3 text-purple-800">
          Sobre o FlorSegura
          <GiLotusFlower className="text-purple-500 text-5xl" />
        </h1>

        {/* Texto introdutório */}
        <p className="text-lg md:text-xl text-purple-700 leading-relaxed max-w-4xl mx-auto mb-12 italic">
          O FlorSegura é um espaço seguro, acolhedor e anônimo criado para apoiar
          mulheres que enfrentam situações difíceis — com informação, tecnologia,
          acolhimento e humanidade.
        </p>

        {/* Seção Quem Somos */}
        <section className="flex flex-col md:flex-row items-center justify-center gap-10 mb-20">
          <img
            src={MulherImg}
            alt="Ilustração de mulher"
            className="w-64 md:w-80 rounded-3xl shadow-xl"
          />

          <div className="max-w-xl text-left text-purple-800">
            <h2 className="text-3xl font-extrabold mb-4">Quem Somos</h2>

            <p className="text-lg leading-relaxed">
              Somos uma plataforma desenvolvida para oferecer apoio prático e
              emocional, com ferramentas modernas e acessíveis. Nosso propósito é
              garantir que nenhuma mulher se sinta sozinha ao enfrentar situações
              de risco, medo ou dúvidas.
            </p>

            <p className="text-lg leading-relaxed mt-4">
              Combinamos tecnologia, empatia e informação para guiar mulheres em
              busca de orientação, segurança e fortalecimento.
            </p>
          </div>
        </section>

        {/* Assistente IA */}
        <section className="bg-purple-100 border border-purple-200 rounded-3xl p-10 shadow-lg max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-extrabold text-purple-800 mb-6 flex items-center justify-center gap-3">
            <FaRobot className="text-purple-600 text-4xl" />
            Flor — Assistente Inteligente de Acolhimento
          </h2>

          <p className="text-lg leading-relaxed text-purple-700 max-w-3xl mx-auto">
            A Flor é uma assistente baseada em IA criada especialmente para oferecer
            acolhimento, orientação e respostas acessíveis — sempre de forma
            anônima, segura e respeitosa. Ela foi desenvolvida para ser a primeira
            escuta de mulheres que precisam conversar ou pedir ajuda.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-md">
              <FaHeart className="text-4xl text-purple-500 mb-3" />
              <h4 className="text-xl font-bold mb-2">Escuta acolhedora</h4>
              <p className="text-center text-purple-700">
                A linguagem é simples, empática e pensada para reduzir ansiedade.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-md">
              <FaShieldAlt className="text-4xl text-purple-500 mb-3" />
              <h4 className="text-xl font-bold mb-2">Anonimato total</h4>
              <p className="text-center text-purple-700">
                Não pedimos nome, endereço ou qualquer dado sensível.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-md">
              <FaBolt className="text-4xl text-purple-500 mb-3" />
              <h4 className="text-xl font-bold mb-2">Apoio imediato</h4>
              <p className="text-center text-purple-700">
                Orientações rápidas, claras e adaptadas ao que a mulher precisa.
              </p>
            </div>
          </div>
        </section>

        {/* Cards principais */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          <div className="bg-purple-500 text-white rounded-3xl p-8 shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center">
            <FaHandsHelping className="text-5xl mb-4" />
            <h2 className="text-2xl font-bold mb-4">Nossa Missão</h2>
            <p className="text-base leading-relaxed">
              Acolher, orientar e fortalecer mulheres por meio de apoio seguro e
              ferramentas efetivas.
            </p>
          </div>

          <div className="bg-purple-500 text-white rounded-3xl p-8 shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center">
            <FaShieldAlt className="text-5xl mb-4" />
            <h2 className="text-2xl font-bold mb-4">Nosso Compromisso</h2>
            <ul className="list-disc list-inside space-y-2 text-left text-sm md:text-base">
              <li>Garantir segurança e anonimato</li>
              <li>Oferecer acolhimento e empatia real</li>
              <li>Promover autonomia e informação</li>
              <li>Facilitar o acesso a ajuda imediata</li>
            </ul>
          </div>

          <div className="bg-purple-500 text-white rounded-3xl p-8 shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center">
            <FaUsers className="text-5xl mb-4" />
            <h2 className="text-2xl font-bold mb-4">Parcerias que fortalecem</h2>
            <p className="text-base leading-relaxed">
              Trabalhamos com ONGs, defensorias, psicólogas, universidades e
              redes de proteção para expandir nosso impacto.
            </p>
          </div>
        </section>

        {/* Funcionalidades principais — corrigido */}
        <section className="bg-pink-100 rounded-3xl p-10 shadow-lg max-w-5xl mx-auto mb-20">
          <h3 className="text-3xl font-extrabold text-purple-800 mb-10">
            Funcionalidades Principais
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-purple-800">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-4xl text-purple-500" />
              <p className="text-lg"><strong>Mapa de Apoio</strong>: encontre serviços próximos.</p>
            </div>

            <div className="flex items-start gap-4">
              <FaRobot className="text-4xl text-purple-500" />
              <p className="text-lg"><strong>Assistente via IA</strong>: apoio imediato e anônimo.</p>
            </div>

            <div className="flex items-start gap-4">
              <FaBook className="text-4xl text-purple-500" />
              <p className="text-lg"><strong>Informações sobre violência</strong> explicadas de forma clara.</p>
            </div>

            <div className="flex items-start gap-4">
              <FaBolt className="text-4xl text-purple-500" />
              <p className="text-lg"><strong>Acesso rápido a emergência</strong> e orientação segura.</p>
            </div>
          </div>
        </section>

        {/* Quem se beneficia — corrigido */}
        <section className="bg-pink-100 rounded-3xl p-10 shadow-lg max-w-5xl mx-auto mb-20">
          <h3 className="text-3xl font-extrabold text-purple-700 mb-6">
            Quem se beneficia?
          </h3>

          <ul className="space-y-4 text-left text-lg text-purple-800 max-w-3xl mx-auto">
            <li className="flex gap-3 items-start">
              <FaCheckCircle className="text-purple-500 mt-1" />
              Mulheres vivendo violência.
            </li>

            <li className="flex gap-3 items-start">
              <FaCheckCircle className="text-purple-500 mt-1" />
              Mulheres que suspeitam estar em um relacionamento abusivo.
            </li>

            <li className="flex gap-3 items-start">
              <FaCheckCircle className="text-purple-500 mt-1" />
              Pessoas que desejam ajudar amigas ou familiares.
            </li>

            <li className="flex gap-3 items-start">
              <FaCheckCircle className="text-purple-500 mt-1" />
              Profissionais que buscam materiais simples e confiáveis.
            </li>
          </ul>
        </section>

        {/* Conclusão */}
        <section className="text-center max-w-4xl mx-auto mt-10 mb-20">
          <p className="text-xl text-purple-800 font-semibold leading-relaxed">
            A FlorSegura foi criada para proteger, orientar e acolher —  
            com tecnologia, humanidade e segurança.  
            Nenhuma mulher deve enfrentar o medo sozinha.
          </p>
        </section>

      </main>
    </div>
  );
}
