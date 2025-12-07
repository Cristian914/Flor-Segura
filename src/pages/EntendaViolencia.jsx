import React from "react";
import { motion } from "framer-motion";
import { FaExclamationTriangle, FaHeart, FaShieldAlt, FaPhoneAlt, FaUsers, FaBook, FaLightbulb } from "react-icons/fa";
import Navbar from "../components/navbar";

export default function EntendaViolencia() {
  const tiposViolencia = [
    {
      tipo: "Violência Física",
      emoji: "🤕",
      cor: "red",
      descricao: "Qualquer ação que cause dor, lesão ou sofrimento físico",
      exemplos: ["Tapas, socos, chutes", "Empurrões e puxões de cabelo", "Uso de objetos para machucar", "Queimaduras e cortes"]
    },
    {
      tipo: "Violência Psicológica",
      emoji: "😢",
      cor: "orange", 
      descricao: "Ações que causam dano emocional e diminuição da autoestima",
      exemplos: ["Humilhações e xingamentos", "Chantagem emocional", "Isolamento de amigos e família", "Controle excessivo"]
    },
    {
      tipo: "Violência Sexual",
      emoji: "🚫",
      cor: "purple",
      descricao: "Qualquer ato sexual sem consentimento ou com uso de força",
      exemplos: ["Estupro e tentativa de estupro", "Assédio sexual", "Exploração sexual", "Pornografia não consensual"]
    },
    {
      tipo: "Violência Patrimonial",
      emoji: "💰",
      cor: "blue",
      descricao: "Controle, retenção ou destruição de bens e recursos",
      exemplos: ["Controle do dinheiro", "Destruição de objetos pessoais", "Roubo de documentos", "Impedimento de trabalhar"]
    },
    {
      tipo: "Violência Moral",
      emoji: "📢",
      cor: "pink",
      descricao: "Ações que atacam a dignidade e reputação da mulher",
      exemplos: ["Calúnia e difamação", "Exposição da vida íntima", "Críticas à conduta", "Acusações falsas"]
    }
  ];

  const sinaisAlerta = [
    "Controla onde você vai e com quem fala",
    "Verifica seu celular e redes sociais constantemente", 
    "Te impede de trabalhar ou estudar",
    "Critica sua aparência e comportamento",
    "Te isola de amigos e familiares",
    "Controla o dinheiro da casa",
    "Tem ciúmes excessivos",
    "Te ameaça ou intimida",
    "Quebra seus objetos quando está com raiva",
    "Te força a fazer coisas que não quer"
  ];

  const cicloViolencia = [
    {
      fase: "Tensão",
      cor: "yellow",
      descricao: "Aumento da tensão, irritabilidade, ameaças verbais"
    },
    {
      fase: "Explosão", 
      cor: "red",
      descricao: "Episódio de violência física, sexual ou psicológica"
    },
    {
      fase: "Reconciliação",
      cor: "green", 
      descricao: "Pedidos de desculpa, promessas de mudança, 'lua de mel'"
    }
  ];

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 pt-20 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-purple-200">
              <div className="flex items-center justify-center gap-3 mb-4">
                <FaBook className="text-purple-500 text-3xl" />
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Entenda a Violência
                </h1>
              </div>
              <p className="text-purple-700 text-lg max-w-3xl mx-auto">
                Conhecimento é poder. Entenda os tipos de violência contra a mulher, reconheça os sinais e saiba como buscar ajuda.
              </p>
            </div>
          </motion.div>



          {/* Tipos de Violência */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-purple-200">
              <div className="flex items-center gap-3 mb-8">
                <FaLightbulb className="text-purple-500 text-2xl" />
                <h2 className="text-3xl font-bold text-purple-900">Tipos de Violência Contra a Mulher</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tiposViolencia.map((violencia, index) => (
                  <motion.div
                    key={violencia.tipo}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all"
                  >
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-2">{violencia.emoji}</div>
                      <h3 className="text-xl font-bold text-gray-800">{violencia.tipo}</h3>
                    </div>
                    
                    <p className="text-gray-700 mb-4 text-center">
                      {violencia.descricao}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800 text-sm">Exemplos:</h4>
                      <ul className="space-y-1">
                        {violencia.exemplos.map((exemplo, idx) => (
                          <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-xs mt-1">•</span>
                            <span>{exemplo}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sinais de Alerta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
          >
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-orange-200">
              <div className="flex items-center gap-3 mb-6">
                <FaExclamationTriangle className="text-orange-500 text-2xl" />
                <h2 className="text-2xl font-bold text-orange-800">Sinais de Alerta</h2>
              </div>
              
              <p className="text-orange-700 mb-6">
                Reconheça comportamentos que podem indicar uma relação abusiva:
              </p>
              
              <div className="space-y-3">
                {sinaisAlerta.map((sinal, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.05 }}
                    className="flex items-start gap-3 p-3 bg-orange-50 rounded-xl"
                  >
                    <span className="text-orange-500 text-sm mt-1">⚠️</span>
                    <span className="text-orange-800 text-sm">{sinal}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Ciclo da Violência */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-purple-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">🔄</span>
                </div>
                <h2 className="text-2xl font-bold text-purple-800">Ciclo da Violência</h2>
              </div>
              
              <p className="text-purple-700 mb-6">
                A violência doméstica segue um padrão cíclico que tende a se repetir e intensificar:
              </p>
              
              <div className="space-y-4">
                {cicloViolencia.map((fase, index) => (
                  <motion.div
                    key={fase.fase}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.2 }}
                    className="p-4 bg-gray-50 border border-gray-200 rounded-xl"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <h3 className="font-bold text-gray-800">{fase.fase}</h3>
                    </div>
                    <p className="text-gray-700 text-sm ml-11">{fase.descricao}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-purple-100 rounded-xl border border-purple-300">
                <p className="text-purple-800 text-sm font-medium text-center">
                  💜 Lembre-se: O ciclo pode ser quebrado. Você merece uma vida livre de violência.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Como Buscar Ajuda */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-green-200 mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <FaHeart className="text-green-500 text-2xl" />
              <h2 className="text-2xl font-bold text-green-800">Como Buscar Ajuda</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaPhoneAlt className="text-green-600 text-2xl" />
                </div>
                <h3 className="font-bold text-green-800 mb-2">Ligue 180</h3>
                <p className="text-green-700 text-sm">Central de Atendimento à Mulher - 24h, gratuito e sigiloso</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaShieldAlt className="text-green-600 text-2xl" />
                </div>
                <h3 className="font-bold text-green-800 mb-2">Delegacia</h3>
                <p className="text-green-700 text-sm">Registre boletim de ocorrência e solicite medidas protetivas</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="text-green-600 text-2xl" />
                </div>
                <h3 className="font-bold text-green-800 mb-2">Rede de Apoio</h3>
                <p className="text-green-700 text-sm">Conte com família, amigos e organizações de apoio</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHeart className="text-green-600 text-2xl" />
                </div>
                <h3 className="font-bold text-green-800 mb-2">Acompanhamento</h3>
                <p className="text-green-700 text-sm">Busque apoio psicológico e jurídico especializado</p>
              </div>
            </div>
          </motion.div>

          {/* Mensagem Final */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white text-center shadow-2xl"
          >
            <div className="text-5xl mb-4">💜</div>
            <h2 className="text-3xl font-bold mb-4">Você Não Está Sozinha</h2>
            <p className="text-xl mb-6 opacity-90 max-w-3xl mx-auto">
              A violência contra a mulher é crime e não é culpa sua. Existem pessoas e organizações prontas para te ajudar. 
              Sua vida tem valor e você merece ser tratada com respeito e dignidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/preciso-de-ajuda"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all"
              >
                Buscar Ajuda Agora
              </motion.a>
              <motion.a
                href="/mapa-de-apoio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-purple-600 transition-all"
              >
                Ver Locais de Apoio
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}