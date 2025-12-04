import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaShieldAlt, FaUsers, FaClock, FaStar } from "react-icons/fa";
import { GiFlowerEmblem } from "react-icons/gi";
import { MdEmergency, MdAutoStories } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
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
      gradient: "from-purple-500/10 to-purple-600/10"
    },
    {
      title: "Descubra mais sobre a Flor Segura",
      description:
        "Conheça nossa missão, nossos valores e como ajudamos mulheres todos os dias.",
      icon: <GiFlowerEmblem size={40} className="text-pink-500 mb-4" />,
      action: () => navigate("/sobre"),
      gradient: "from-pink-500/10 to-pink-600/10"
    },
    {
      title: "Recursos de Emergência",
      description:
        "Acesso rápido a números de emergência e recursos de segurança imediatos.",
      icon: <MdEmergency size={40} className="text-red-500 mb-4" />,
      action: () => navigate("/emergencia"),
      gradient: "from-red-500/10 to-red-600/10",
      priority: true
    },
    {
      title: "Histórias Inspiradoras",
      description:
        "Leia histórias reais de superação e encontre força em experiências compartilhadas.",
      icon: <MdAutoStories size={40} className="text-green-500 mb-4" />,
      action: () => navigate("/historias"),
      gradient: "from-green-500/10 to-green-600/10"
    },
    {
      title: "Dicas de Segurança",
      description:
        "Aprenda estratégias e dicas práticas para sua proteção e bem-estar.",
      icon: <FaShieldAlt size={40} className="text-blue-500 mb-4" />,
      action: () => navigate("/seguranca"),
      gradient: "from-blue-500/10 to-blue-600/10"
    },
  ];

  const stats = [
    {
      number: "2.500+",
      label: "Mulheres Ajudadas",
      icon: <FaUsers className="text-purple-600" />,
    },
    {
      number: "24h",
      label: "Suporte Disponível",
      icon: <BiSupport className="text-pink-500" />,
    },
    {
      number: "< 5min",
      label: "Tempo de Resposta",
      icon: <FaClock className="text-blue-500" />,
    },
    {
      number: "4.9★",
      label: "Avaliação Média",
      icon: <FaStar className="text-yellow-500" />,
    },
  ];

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
            Bem-vinda à Flor Segura 💜
          </h1>
          <p className="text-gray-700 mt-2 max-w-2xl leading-relaxed text-lg">
            Um espaço seguro e acolhedor para mulheres. Aqui, você encontra apoio,
            informações e força para recomeçar.
          </p>
        </motion.div>

        {/* Seção de Estatísticas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl w-full mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -2 }}
              className="bg-white/90 backdrop-blur-md rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50"
            >
              <div className="flex justify-center mb-3 text-2xl">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-purple-800 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Cards principais */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full mb-16"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.97 }}
              onClick={card.action}
              className={`cursor-pointer bg-gradient-to-br ${card.gradient || 'from-white/80 to-white/60'} backdrop-blur-md border border-purple-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex flex-col items-center text-center relative overflow-hidden ${
                card.priority ? 'ring-2 ring-red-400 ring-opacity-50' : ''
              }`}
            >
              {card.priority && (
                <div className="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                  Urgente
                </div>
              )}
              
              <div className="mb-4">
                {card.icon}
              </div>
              
              <h2 className="text-xl font-bold text-purple-700 mb-3 leading-tight">
                {card.title}
              </h2>
              
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Card de cadastro melhorado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onClick={() => navigate("/register")}
          className="flex flex-col md:flex-row items-center justify-between cursor-pointer group max-w-6xl w-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl shadow-2xl p-8 md:p-12 gap-8 hover:shadow-3xl hover:scale-[1.02] transition-all duration-300"
        >
          {/* Texto à esquerda */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left flex-1 text-white"
          >
            <p className="text-xl md:text-2xl font-medium mb-2">
              Ainda não tem cadastro?
            </p>
            <p className="text-3xl md:text-5xl font-extrabold mb-4">
              Cadastre-se agora! 💜
            </p>
            <p className="text-lg opacity-90">
              Junte-se a milhares de mulheres que encontraram apoio aqui
            </p>
          </motion.div>

          {/* Imagem à direita */}
          <motion.img
            src={CardHome}
            alt="Card de cadastro"
            className="w-72 md:w-96 rounded-2xl shadow-2xl flex-shrink-0"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </>
  );
};

export default HomePage;
