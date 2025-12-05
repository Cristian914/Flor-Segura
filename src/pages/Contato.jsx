import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaTelegram } from "react-icons/fa";
import Navbar from "../components/navbar";

const ContatoPage = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
    urgencia: "normal"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode integrar com o back-end
    alert("Mensagem enviada! Entraremos em contato em breve. 💜");
    setFormData({ nome: "", email: "", telefone: "", mensagem: "", urgencia: "normal" });
  };

  const contatos = [
    {
      tipo: "Emergência 24h",
      numero: "190",
      descricao: "Polícia Militar",
      icon: <FaPhoneAlt className="text-red-500" />,
      cor: "bg-red-50 border-red-200"
    },
    {
      tipo: "Central de Atendimento",
      numero: "(35) 3422-3344",
      descricao: "Suporte Flor Segura",
      icon: <FaPhoneAlt className="text-purple-500" />,
      cor: "bg-purple-50 border-purple-200"
    },
    {
      tipo: "WhatsApp",
      numero: "(35) 99999-9999",
      descricao: "Chat direto",
      icon: <FaWhatsapp className="text-green-500" />,
      cor: "bg-green-50 border-green-200"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 pt-28 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Cabeçalho */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-purple-800 mb-4">
              Entre em Contato 💜
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Estamos aqui para ajudar. Não hesite em nos procurar quando precisar de apoio, orientação ou apenas alguém para conversar.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Formulário */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl"
            >
              <h2 className="text-3xl font-bold text-purple-700 mb-6">Envie uma Mensagem</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    value={formData.nome}
                    onChange={(e) => setFormData({...formData, nome: e.target.value})}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Seu nome"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone (opcional)
                  </label>
                  <input
                    type="tel"
                    value={formData.telefone}
                    onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="(35) 99999-9999"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nível de Urgência
                  </label>
                  <select
                    value={formData.urgencia}
                    onChange={(e) => setFormData({...formData, urgencia: e.target.value})}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="normal">Normal</option>
                    <option value="urgente">Urgente</option>
                    <option value="emergencia">Emergência</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    value={formData.mensagem}
                    onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                    rows={5}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                    placeholder="Conte-nos como podemos ajudar..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-6 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Enviar Mensagem 💜
                </button>
              </form>
            </motion.div>

            {/* Informações de Contato */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-purple-700 mb-6">Canais de Atendimento</h2>
              
              {contatos.map((contato, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className={`${contato.cor} border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300`}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">
                      {contato.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{contato.tipo}</h3>
                      <p className="text-2xl font-bold text-purple-700">{contato.numero}</p>
                      <p className="text-gray-600">{contato.descricao}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Horários */}
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center gap-2">
                  <FaClock /> Horários de Atendimento
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Segunda a Sexta:</strong> 08:00 - 18:00</p>
                  <p><strong>Sábados:</strong> 08:00 - 12:00</p>
                  <p><strong>Emergências:</strong> 24 horas (190)</p>
                </div>
              </div>

              {/* Localização */}
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center gap-2">
                  <FaMapMarkerAlt /> Nossa Localização
                </h3>
                <p className="text-gray-700">
                  Centro de Atendimento à Mulher<br />
                  Rua Professor José Garcia, 1020<br />
                  Centro - Pouso Alegre/MG<br />
                  CEP: 37550-000
                </p>
              </div>
            </motion.div>
          </div>

          {/* Aviso Importante */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 text-center"
          >
            <h3 className="text-2xl font-bold text-red-700 mb-2">⚠️ Em Caso de Emergência</h3>
            <p className="text-red-600 mb-4">
              Se você está em perigo imediato, não hesite em ligar para:
            </p>
            <div className="flex justify-center gap-4">
              <a href="tel:190" className="bg-red-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-600 transition">
                📞 190 - Polícia
              </a>
              <a href="tel:180" className="bg-purple-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-purple-600 transition">
                📞 180 - Mulher
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ContatoPage;