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

  const conquistas = [
    { numero: "2.500+", texto: "Mulheres Atendidas" },
    { numero: "50+", texto: "Locais Mapeados" },
    { numero: "24/7", texto: "Suporte Disponível" },
    { numero: "98%", texto: "Satisfação" }
  ];

  const equipe = [
    {
      nome: "Cristian",
      cargo: "Fundador & Desenvolvedor",
      descricao: "Apaixonado por tecnologia e impacto social",
      avatar: "👨‍💻"
    },
    {
      nome: "Equipe Técnica",
      cargo: "Desenvolvimento & Suporte",
      descricao: "Especialistas em segurança digital",
      avatar: "👥"
    },
    {
      nome: "Parceiros",
      cargo: "Rede de Apoio",
      descricao: "Delegacias, hospitais e ONGs",
      avatar: "🤝"
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

          {/* Conquistas */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
              <h2 className="text-4xl font-bold mb-12 text-center">
                Nosso Impacto
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {conquistas.map((conquista, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className="text-4xl md:text-5xl font-bold mb-2">
                      {conquista.numero}
                    </div>
                    <div className="text-lg opacity-90">
                      {conquista.texto}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Nossa Equipe */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-purple-700 mb-12 text-center">
              Quem Somos
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {equipe.map((membro, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white/80 backdrop-blur-md rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-6xl mb-4">
                    {membro.avatar}
                  </div>
                  <h3 className="text-2xl font-bold text-purple-700 mb-2">
                    {membro.nome}
                  </h3>
                  <p className="text-purple-500 font-semibold mb-3">
                    {membro.cargo}
                  </p>
                  <p className="text-gray-600">
                    {membro.descricao}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Missão, Visão e Valores */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-purple-700 mb-4">Missão</h3>
                <p className="text-gray-600 leading-relaxed">
                  Empoderar mulheres através da tecnologia, criando uma rede colaborativa 
                  de segurança e apoio que salva vidas e transforma comunidades.
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg text-center">
                <div className="text-4xl mb-4">🔮</div>
                <h3 className="text-2xl font-bold text-purple-700 mb-4">Visão</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ser a principal plataforma de segurança feminina no Brasil, 
                  reconhecida pela inovação, impacto social e transformação de vidas.
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg text-center">
                <div className="text-4xl mb-4">💎</div>
                <h3 className="text-2xl font-bold text-purple-700 mb-4">Compromisso</h3>
                <p className="text-gray-600 leading-relaxed">
                  Manter sempre a privacidade, segurança e bem-estar das usuárias 
                  como nossa prioridade número um em todas as decisões.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl font-bold text-purple-700 mb-6">
                Faça Parte da Nossa História
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Junte-se a milhares de mulheres que já encontraram segurança, 
                apoio e empoderamento através da Flor Segura.
              </p>
              <button 
                onClick={() => window.location.href = '/register'}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-8 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Cadastre-se Gratuitamente 💜
              </button>
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
};

export default SobrePage;