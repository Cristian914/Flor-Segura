import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { GiFlowerEmblem } from "react-icons/gi";
import LogoHome from "../assets/imagens/logohome.png"; 
import CardHome from "../assets/imagens/cardhome.png"; 
import Navbar from "../components/navbar";

const HomePage = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Entre em contato com alguém",
      description:
        "Precisa conversar? Encontre apoio, ajuda e orientação de forma rápida e segura.",
      icon: <FaPhoneAlt size={40} className="text-purple-600 mb-4" />,
      action: () => navigate("/contato"),
    },
    {
      title: "Descubra mais sobre a Flor Segura",
      description:
        "Conheça nossa missão, nossos valores e como ajudamos mulheres todos os dias.",
      icon: <GiFlowerEmblem size={40} className="text-pink-500 mb-4" />,
      action: () => navigate("/sobre"),
    },
  ];

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-200 flex flex-col items-center justify-center p-6">
      {/* Cabeçalho */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center mb-10"
      >
        <img
          src={LogoHome}
          alt="Logo Flor Segura"
          className="w-40 md:w-56 mb-4 drop-shadow-lg"
        />
        <h1 className="text-3xl md:text-4xl font-bold text-purple-800">
          Bem-vinda à Flor Segura 💜
        </h1>
        <p className="text-gray-700 mt-3 max-w-lg leading-relaxed">
          Um espaço seguro e acolhedor para mulheres. Aqui, você encontra apoio,
          informações e força para recomeçar.
        </p>
      </motion.div>

      {/* Cards principais */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full mb-10"
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={card.action}
            className="cursor-pointer bg-white/80 backdrop-blur-md border border-purple-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center"
          >
            {card.icon}
            <h2 className="text-xl font-semibold text-purple-700 mb-2">
              {card.title}
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              {card.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Card de cadastro com texto à esquerda e imagem à direita */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        onClick={() => navigate("/register")}
        className="flex flex-col md:flex-row items-center justify-between cursor-pointer group max-w-4xl w-full bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6 md:p-10 gap-6 hover:shadow-2xl transition-shadow duration-300"
      >
        {/* Texto à esquerda */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left flex-1"
        >
          <p className="text-gray-700 text-lg md:text-xl font-medium">
            Ainda não tem cadastro?
          </p>
          <p className="text-purple-600 text-3xl md:text-4xl font-extrabold mt-2 underline decoration-purple-400 decoration-4 underline-offset-8 hover:text-purple-900 transition-colors flex items-center gap-2">
            Cadastre-se agora <span className="text-2xl">💜</span>
          </p>
        </motion.div>

        {/* Imagem à direita */}
        <motion.img
          src={CardHome}
          alt="Card de cadastro"
          className="w-80 md:w-96 rounded-2xl shadow-lg flex-shrink-0"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
    </>
  );
};

export default HomePage;
