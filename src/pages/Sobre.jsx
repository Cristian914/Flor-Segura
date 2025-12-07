import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaUsers, FaShieldAlt, FaHandsHelping, FaStar, FaAward } from "react-icons/fa";
import { GiFlowerEmblem } from "react-icons/gi";
import Navbar from "../components/navbar";
import MulherImg from "../assets/imagens/mulher.png";

const SobrePage = () => {
  const valores = [
    {
      icon: <FaHeart className="text-pink-500" />,
      titulo: "Empatia",
      descricao: "Compreendemos e acolhemos cada mulher com carinho e respeito."
    },
    {
      icon: <FaShieldAlt className="text-purple-500" />,
      titulo: "Segurança",
      descricao: "Priorizamos a proteção e privacidade de todas as usuárias."
    },
    {
      icon: <FaUsers className="text-blue-500" />,
      titulo: "Comunidade",
      descricao: "Fortalecemos a rede de apoio entre mulheres."
    },
    {
      icon: <FaHandsHelping className="text-green-500" />,
      titulo: "Apoio",
      descricao: "Oferecemos suporte contínuo e recursos especializados."
    }
  ];



  const equipe = [
    {
      nome: "Matheus",
      cargo: "Co-Fundador",
      descricao: "Especialista em desenvolvimento e arquitetura de sistemas",
      avatar: "👨‍💻"
    },
    {
      nome: "Nycolas",
      cargo: "Co-Fundador",
      descricao: "Focado em UX/UI e experiência do usuário",
      avatar: "🎨"
    },
    {
      nome: "Cristian",
      cargo: "Co-Fundador",
      descricao: "Apaixonado por tecnologia e impacto social",
      avatar: "🚀"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 pt-28 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center gap-12 mb-20"
          >
            <div className="flex-1 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-6">
                <GiFlowerEmblem size={80} className="text-purple-600" />
              </div>
              <h1 className="text-5xl font-bold text-purple-800 mb-6">
                Sobre a Flor Segura 🌸
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Nascemos da necessidade de criar um espaço digital seguro onde mulheres possam 
                encontrar apoio, informação e proteção.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nossa missão é transformar a tecnologia em uma ferramenta de empoderamento feminino,
                conectando mulheres a recursos de segurança e apoio em tempo real.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 flex justify-center"
            >
              <img
                src={MulherImg}
                alt="Mulher empoderada"
                className="w-80 md:w-96 rounded-3xl shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Nossa História */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-4xl font-bold text-purple-700 mb-8 text-center">
                Nossa História
              </h2>
              <div className="text-center max-w-4xl mx-auto">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  A Flor Segura surgiu em 2024 com o objetivo de criar uma plataforma 
                  colaborativa que pudesse mapear áreas de risco e conectar mulheres 
                  a recursos de apoio em tempo real.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Desenvolvida com tecnologia de ponta e foco na experiência do usuário, 
                  nossa plataforma combina segurança digital, design intuitivo e 
                  funcionalidades práticas para o dia a dia.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Hoje, somos uma referência em tecnologia para segurança feminina, 
                  conectando mulheres, autoridades e organizações de apoio em uma 
                  rede colaborativa de proteção.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Nossos Valores */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-purple-700 mb-12 text-center">
              Nossos Valores
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {valores.map((valor, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/80 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-4xl mb-4 flex justify-center">
                    {valor.icon}
                  </div>
                  <h3 className="text-xl font-bold text-purple-700 mb-3">
                    {valor.titulo}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {valor.descricao}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>





          {/* Nossa Missão */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl text-center">
              <h2 className="text-4xl font-bold mb-8">
                Nossa Missão 🎯
              </h2>
              <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                Empoderar mulheres através da tecnologia, criando uma rede colaborativa 
                de segurança e apoio que transforma vidas e fortalece comunidades.
              </p>
            </div>
          </motion.section>

          {/* Tecnologias e Segurança */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-purple-700 mb-12 text-center">
              Tecnologia e Segurança
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg"
              >
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-2xl font-bold text-purple-700 mb-4">Segurança Total</h3>
                <p className="text-gray-600 leading-relaxed">
                  Seus dados são protegidos com criptografia de ponta e nunca são compartilhados 
                  sem sua autorização. Privacidade é um direito, não um privilégio.
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg"
              >
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-purple-700 mb-4">Inovação Constante</h3>
                <p className="text-gray-600 leading-relaxed">
                  Desenvolvemos continuamente novas funcionalidades baseadas no feedback 
                  das usuárias para melhorar sua experiência e segurança.
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* Call to Action Final */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 md:p-12 border-2 border-purple-200">
              <div className="text-6xl mb-6">🌸</div>
              <h2 className="text-3xl font-bold text-purple-800 mb-6">
                Juntas Somos Mais Fortes
              </h2>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Cada mulher que se junta à nossa comunidade torna todas nós mais seguras. 
                Faça parte dessa transformação.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => window.location.href = '/register'}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  Começar Agora 💜
                </button>
                <button 
                  onClick={() => window.location.href = '/mapa'}
                  className="border-2 border-purple-600 text-purple-600 font-bold py-4 px-8 rounded-xl hover:bg-purple-600 hover:text-white transition-all duration-300"
                >
                  Explorar Mapa 🗺️
                </button>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
};

export default SobrePage;