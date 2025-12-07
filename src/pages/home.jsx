import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { GiFlowerEmblem } from "react-icons/gi";
import LogoHome from "../assets/imagens/logohome.png"; 
import Navbar from "../components/navbar";

const HomePage = () => {
  const navigate = useNavigate();



  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-200 flex flex-col items-center justify-center p-6">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <img
            src={LogoHome}
            alt="Logo Flor Segura"
            className="w-40 md:w-56 mb-6 drop-shadow-lg"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-4">
            Você não está sozinha 💜
          </h1>
          <p className="text-gray-700 mt-2 max-w-2xl leading-relaxed text-lg">
            Um espaço seguro onde mulheres se apoiam mutuamente. Aqui você encontra acolhimento,
            proteção e a força de uma comunidade que se importa com você.
          </p>
        </motion.div>

        {/* Mensagem de Acolhimento */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-8 md:p-12 max-w-5xl w-full mb-16 text-center border border-pink-200"
        >
          <div className="text-4xl mb-6">🤗</div>
          <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-6">
            "Sua força é maior do que qualquer medo"
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Sabemos que às vezes o mundo pode parecer assustador, mas você tem o direito de se sentir segura 
            e protegida. Estamos aqui para te apoiar em cada passo dessa jornada.
          </p>
        </motion.div>

        {/* Ações Principais */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/mapa-de-apoio")}
            className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 text-left"
          >
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-3xl mr-4" />
              <div>
                <h3 className="text-2xl font-bold">Encontrar Apoio</h3>
                <p className="text-purple-100">Locais seguros perto de você</p>
              </div>
            </div>
            <p className="text-purple-100 leading-relaxed">
              Delegacias especializadas, hospitais e centros de acolhimento com rotas seguras
            </p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open('tel:180')}
            className="bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 text-left relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 bg-pink-400 text-white text-xs px-2 py-1 rounded-full font-semibold">
              24H
            </div>
            <div className="flex items-center mb-4">
              <FaPhoneAlt className="text-3xl mr-4" />
              <div>
                <h3 className="text-2xl font-bold">Central da Mulher</h3>
                <p className="text-pink-100">Ligue 180 - Gratuito</p>
              </div>
            </div>
            <p className="text-pink-100 leading-relaxed">
              Atendimento especializado para denúncias e orientações sobre violência
            </p>
          </motion.button>
        </motion.div>

        {/* Como Podemos Te Ajudar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-5xl w-full mb-16"
        >
          <h2 className="text-3xl font-bold text-purple-800 text-center mb-12">
            Como podemos te ajudar hoje? 🌸
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg text-center"
            >
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-purple-700 mb-3">Proteção Imediata</h3>
              <p className="text-gray-600 leading-relaxed">
                Acesso rápido a números de emergência e locais seguros quando você mais precisa
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg text-center"
            >
              <div className="text-4xl mb-4">💜</div>
              <h3 className="text-xl font-bold text-purple-700 mb-3">Acolhimento</h3>
              <p className="text-gray-600 leading-relaxed">
                Um espaço seguro onde você pode buscar ajuda sem julgamentos, com total privacidade
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg text-center"
            >
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-purple-700 mb-3">Comunidade</h3>
              <p className="text-gray-600 leading-relaxed">
                Conecte-se com outras mulheres e faça parte de uma rede de apoio e proteção mútua
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Você Merece Ser Respeitada */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl max-w-5xl w-full mb-16 text-center"
        >
          <div className="text-5xl mb-6">✨</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Você merece respeito, segurança e amor
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Nenhuma forma de violência é aceitável. Você tem o direito de viver livre do medo, 
            de ser tratada com dignidade e de buscar ajuda sempre que precisar.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/preciso-de-ajuda")}
            className="bg-white/20 backdrop-blur-md rounded-xl py-4 px-8 text-center hover:bg-white/30 transition-all duration-300 font-semibold text-lg"
          >
            🆘 Precisa de Ajuda? Clique Aqui
          </motion.button>
        </motion.div>



        {/* Call to Action Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center max-w-4xl w-full"
        >
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 md:p-12 border-2 border-pink-200">
            <GiFlowerEmblem className="text-6xl text-purple-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-6">
              Juntas somos mais fortes 🌸
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Cada mulher que se junta à nossa comunidade torna todas nós mais seguras. 
              Sua voz importa, sua segurança importa, você importa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/register")}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Fazer Parte da Comunidade 💜
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/sobre")}
                className="border-2 border-purple-600 text-purple-600 font-bold py-4 px-8 rounded-xl hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                Nossa História
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default HomePage;
