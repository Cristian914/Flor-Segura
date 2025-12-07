import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaMapMarkerAlt, FaUsers, FaShieldAlt, FaHeart, FaExclamationTriangle } from "react-icons/fa";
import CardHelp from "../assets/imagens/cardhelp.png";
import Navbar from "../components/navbar";

export default function PrecisoDeAjuda() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="bg-white text-purple-800 font-sans">
        {/* === SEÇÃO HERO AJUSTADA (diminuí altura e subi imagem) === */}
        <section className="bg-gradient-to-r from-purple-300 to-purple-200 w-full flex flex-col lg:flex-row items-center justify-between px-10 lg:px-24 py-16 lg:py-20 relative overflow-hidden">
          {/* TEXTO PRINCIPAL */}
          <div className="text-center lg:text-left max-w-xl z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug">
              Você não está sozinha. <br />
              Peça ajuda com segurança.
            </h1>
          </div>

          {/* IMAGEM AJUSTADA (subi aproximando do texto) */}
          <div className="mt-6 lg:mt-6 flex justify-center lg:justify-end">
            <img
              src={CardHelp}
              alt="Pessoas se abraçando"
              className="w-[360px] md:w-[420px] lg:w-[480px] object-contain drop-shadow-xl"
            />
          </div>
        </section>

        {/* === NÚMEROS DE EMERGÊNCIA === */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border-l-4 border-red-500 py-8 px-8 lg:px-24 mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <FaExclamationTriangle className="text-red-500 text-2xl" />
            <h2 className="text-2xl font-bold text-red-700">Emergência? Ligue Agora!</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md border border-red-200">
              <div className="flex items-center gap-2 mb-2">
                <FaPhoneAlt className="text-red-500" />
                <span className="font-bold text-red-700">190</span>
              </div>
              <p className="text-sm text-gray-700">Polícia Militar</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border border-red-200">
              <div className="flex items-center gap-2 mb-2">
                <FaPhoneAlt className="text-red-500" />
                <span className="font-bold text-red-700">180</span>
              </div>
              <p className="text-sm text-gray-700">Central de Atendimento à Mulher</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border border-red-200">
              <div className="flex items-center gap-2 mb-2">
                <FaPhoneAlt className="text-red-500" />
                <span className="font-bold text-red-700">192</span>
              </div>
              <p className="text-sm text-gray-700">SAMU - Emergência Médica</p>
            </div>
          </div>
        </motion.section>

        {/* === OPÇÕES DE AJUDA === */}
        <section className="py-16 px-8 lg:px-24">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="bg-purple-200 p-5 rounded-full shadow-md">
                <FaShieldAlt className="text-purple-600 text-3xl" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-purple-800">
                Como Podemos Te Ajudar?
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-lg border border-purple-100 hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaMapMarkerAlt className="text-purple-500 text-2xl" />
                <h3 className="text-xl font-bold text-purple-800">Locais Seguros</h3>
              </div>
              <p className="text-gray-700 mb-4">Encontre delegacias, hospitais e centros de apoio próximos a você.</p>
              <button
                onClick={() => navigate("/mapa-de-apoio")}
                className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Ver Mapa de Apoio
              </button>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-lg border border-purple-100 hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaUsers className="text-purple-500 text-2xl" />
                <h3 className="text-xl font-bold text-purple-800">Comunidade</h3>
              </div>
              <p className="text-gray-700 mb-4">Compartilhe experiências e receba apoio de outras mulheres.</p>
              <button
                onClick={() => navigate("/publico")}
                className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Acessar Comunidade
              </button>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-lg border border-purple-100 hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaHeart className="text-purple-500 text-2xl" />
                <h3 className="text-xl font-bold text-purple-800">Espaço Pessoal</h3>
              </div>
              <p className="text-gray-700 mb-4">Registre suas experiências em um ambiente privado e seguro.</p>
              <button
                onClick={() => navigate("/meu-espaco-seguro")}
                className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Meu Espaço Seguro
              </button>
            </motion.div>


          </div>
        </section>

        {/* === INFORMAÇÕES IMPORTANTES === */}
        <section className="bg-purple-50 py-16 px-8 lg:px-24">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-extrabold text-purple-800 mb-8 text-center">
              Como uma Rede de Apoio Pode Te Ajudar?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="text-xl font-bold text-purple-700 mb-3">🤝 Apoio Emocional</h4>
                <p className="text-gray-700">
                  Profissionais e voluntários treinados para oferecer suporte psicológico e emocional em momentos difíceis.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="text-xl font-bold text-purple-700 mb-3">🏥 Atendimento Médico</h4>
                <p className="text-gray-700">
                  Hospitais e postos de saúde preparados para atendimento especializado e sigiloso.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="text-xl font-bold text-purple-700 mb-3">⚖️ Orientação Jurídica</h4>
                <p className="text-gray-700">
                  Advogados e defensores públicos especializados em direitos da mulher e violência doméstica.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="text-xl font-bold text-purple-700 mb-3">🏠 Abrigo Seguro</h4>
                <p className="text-gray-700">
                  Casas de acolhimento temporário para mulheres em situação de risco e seus filhos.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-500">
              <p className="text-lg leading-relaxed text-purple-900 text-center">
                <strong>Lembre-se:</strong> Uma rede de apoio é formada por pessoas, organizações e serviços
                preparados para oferecer ajuda em momentos de risco ou sofrimento.
                Quando você procura essa rede, não está sozinha — existem caminhos
                seguros e acolhedores para cuidar de você.
              </p>
            </div>
          </div>
        </section>


      </div>
    </>
  );
}
