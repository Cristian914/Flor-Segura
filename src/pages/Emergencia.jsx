import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaMapMarkerAlt, FaExclamationTriangle, FaShieldAlt, FaAmbulance, FaGavel } from "react-icons/fa";
import { MdEmergency, MdLocalPolice } from "react-icons/md";
import Navbar from "../components/navbar";

const EmergenciaPage = () => {
  const [localizacao, setLocalizacao] = useState(null);

  const obterLocalizacao = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocalizacao({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          alert("Localização obtida! Você pode compartilhar com as autoridades se necessário.");
        },
        (error) => {
          alert("Não foi possível obter sua localização. Tente novamente.");
        }
      );
    }
  };

  const numerosEmergencia = [
    {
      numero: "190",
      nome: "Polícia Militar",
      descricao: "Emergências gerais, crimes em andamento",
      icon: <MdLocalPolice className="text-blue-600" />,
      cor: "bg-blue-50 border-blue-200 hover:bg-blue-100"
    },
    {
      numero: "180",
      nome: "Central de Atendimento à Mulher",
      descricao: "Violência doméstica e familiar contra a mulher",
      icon: <FaShieldAlt className="text-purple-600" />,
      cor: "bg-purple-50 border-purple-200 hover:bg-purple-100"
    },
    {
      numero: "192",
      nome: "SAMU",
      descricao: "Emergências médicas e ambulância",
      icon: <FaAmbulance className="text-red-600" />,
      cor: "bg-red-50 border-red-200 hover:bg-red-100"
    },
    {
      numero: "193",
      nome: "Bombeiros",
      descricao: "Incêndios, resgates e emergências",
      icon: <MdEmergency className="text-orange-600" />,
      cor: "bg-orange-50 border-orange-200 hover:bg-orange-100"
    }
  ];

  const contatosLocais = [
    {
      nome: "Delegacia Regional de Polícia Civil",
      telefone: "(35) 3422-2244",
      endereco: "Rua Silvestre Ferraz, 226 – Centro",
      horario: "08:00 - 18:00"
    },
    {
      nome: "Centro de Atendimento à Mulher",
      telefone: "(35) 3422-3344",
      endereco: "Rua Professor José Garcia, 1020 – Centro",
      horario: "08:00 - 18:00"
    },
    {
      nome: "Hospital das Clínicas Samuel Libânio",
      telefone: "(35) 3429-3200",
      endereco: "Rua Comendador José Garcia, 777 – Centro",
      horario: "24 horas"
    }
  ];

  const dicasEmergencia = [
    {
      titulo: "Mantenha a Calma",
      descricao: "Respire fundo e tente manter a calma para tomar decisões claras",
      icon: "🧘‍♀️"
    },
    {
      titulo: "Saia do Local",
      descricao: "Se possível, vá para um local seguro e público",
      icon: "🏃‍♀️"
    },
    {
      titulo: "Ligue para Ajuda",
      descricao: "Use os números de emergência ou peça ajuda a pessoas próximas",
      icon: "📞"
    },
    {
      titulo: "Documente Tudo",
      descricao: "Se seguro, tire fotos, grave áudios ou anote detalhes importantes",
      icon: "📱"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-purple-50 to-pink-50 pt-28 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Cabeçalho de Emergência */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="bg-red-500 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <FaExclamationTriangle size={40} />
            </div>
            <h1 className="text-5xl font-bold text-red-700 mb-4">
              Recursos de Emergência 🚨
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Em situações de perigo, cada segundo conta. Aqui você encontra todos os recursos 
              necessários para obter ajuda rapidamente.
            </p>
          </motion.div>

          {/* Botão de Localização */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <button
              onClick={obterLocalizacao}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-8 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto"
            >
              <FaMapMarkerAlt /> Compartilhar Minha Localização
            </button>
            {localizacao && (
              <p className="mt-4 text-green-600 font-semibold">
                ✅ Localização obtida: {localizacao.lat.toFixed(4)}, {localizacao.lng.toFixed(4)}
              </p>
            )}
          </motion.div>

          {/* Números de Emergência */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-purple-700 mb-8 text-center">
              Números de Emergência
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {numerosEmergencia.map((emergencia, index) => (
                <motion.a
                  key={index}
                  href={`tel:${emergencia.numero}`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${emergencia.cor} border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl block`}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4 flex justify-center">
                      {emergencia.icon}
                    </div>
                    <div className="text-3xl font-bold text-gray-800 mb-2">
                      {emergencia.numero}
                    </div>
                    <h3 className="text-lg font-bold text-gray-700 mb-2">
                      {emergencia.nome}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {emergencia.descricao}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.section>

          {/* Contatos Locais */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-purple-700 mb-8 text-center">
              Contatos Locais - Pouso Alegre
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {contatosLocais.map((contato, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-purple-700 mb-3">
                    {contato.nome}
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-center gap-2">
                      <FaPhoneAlt className="text-purple-500" />
                      <a href={`tel:${contato.telefone.replace(/\D/g, '')}`} className="hover:text-purple-600">
                        {contato.telefone}
                      </a>
                    </p>
                    <p className="flex items-start gap-2">
                      <FaMapMarkerAlt className="text-purple-500 mt-1" />
                      {contato.endereco}
                    </p>
                    <p className="text-sm font-semibold text-green-600">
                      {contato.horario}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Dicas de Emergência */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-purple-700 mb-8 text-center">
              O Que Fazer em Emergências
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dicasEmergencia.map((dica, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/80 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{dica.icon}</div>
                  <h3 className="text-xl font-bold text-purple-700 mb-3">
                    {dica.titulo}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {dica.descricao}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Aviso Importante */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-3xl p-8 md:p-12 text-center shadow-2xl"
          >
            <h2 className="text-3xl font-bold mb-6">⚠️ Lembre-se Sempre</h2>
            <div className="grid md:grid-cols-3 gap-6 text-lg">
              <div>
                <div className="text-3xl mb-2">🚨</div>
                <p><strong>Em perigo imediato:</strong><br />Ligue 190 imediatamente</p>
              </div>
              <div>
                <div className="text-3xl mb-2">📱</div>
                <p><strong>Mantenha o celular:</strong><br />Sempre carregado e acessível</p>
              </div>
              <div>
                <div className="text-3xl mb-2">👥</div>
                <p><strong>Confie em pessoas:</strong><br />Peça ajuda quando necessário</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default EmergenciaPage;