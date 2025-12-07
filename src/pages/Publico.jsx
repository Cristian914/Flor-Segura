import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaComments, FaUsers, FaHeart, FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import Navbar from "../components/navbar";

export default function Publico() {
  const [notas, setNotas] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
    
    fetch(`${API_URL}/publications`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        // Se não há notas, adicionar algumas de exemplo
        if (!data || data.length === 0) {
          const notasExemplo = [
            {
              id: 'exemplo-1',
              author: 'Anônima',
              content: 'Hoje me senti mais segura caminhando pela rua principal. É bom saber que temos esse espaço para compartilhar experiências. 💜',
              created_at: new Date().toISOString()
            },
            {
              id: 'exemplo-2', 
              author: 'Esperança',
              content: 'Quero agradecer a todas que compartilham suas histórias aqui. Vocês me dão força para continuar. Juntas somos mais fortes! ✨',
              created_at: new Date().toISOString()
            },
            {
              id: 'exemplo-3',
              author: 'Coragem',
              content: 'Encontrei um local de apoio próximo à minha casa através do mapa. Foi muito útil saber que posso contar com ajuda quando precisar.',
              created_at: new Date().toISOString()
            }
          ];
          setNotas(notasExemplo);
        } else {
          setNotas(data);
        }
      })
      .catch((err) => {
        console.log("Erro ao carregar notas públicas", err);
        // Fallback para notas de exemplo se a API falhar
        const notasExemplo = [
          {
            id: 'exemplo-1',
            author: 'Anônima',
            content: 'Hoje me senti mais segura caminhando pela rua principal. É bom saber que temos esse espaço para compartilhar experiências. 💜',
            created_at: new Date().toISOString()
          },
          {
            id: 'exemplo-2',
            author: 'Esperança', 
            content: 'Quero agradecer a todas que compartilham suas histórias aqui. Vocês me dão força para continuar. Juntas somos mais fortes! ✨',
            created_at: new Date().toISOString()
          }
        ];
        setNotas(notasExemplo);
      });
  }, []);

  // 🔍 FILTRAR NOTAS
  const notasFiltradas = notas.filter((n) => {
    const termo = busca.toLowerCase();
    return (
      n.author?.toLowerCase().includes(termo) ||
      n.content?.toLowerCase().includes(termo)
    );
  });

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 pt-20 px-4">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-purple-200">
              <div className="flex items-center justify-center gap-3 mb-4">
                <FaUsers className="text-purple-500 text-3xl" />
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Comunidade Flor Segura
                </h1>
              </div>
              <p className="text-purple-700 text-lg max-w-2xl mx-auto mb-6">
                Um espaço seguro onde mulheres compartilham experiências, oferecem apoio e constroem uma rede de proteção mútua.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-purple-100 px-4 py-2 rounded-full flex items-center gap-2">
                  <FaHeart className="text-purple-600" />
                  <span className="text-purple-700 font-semibold">{notas.length} histórias compartilhadas</span>
                </div>
                <div className="bg-pink-100 px-4 py-2 rounded-full flex items-center gap-2">
                  <FaComments className="text-pink-600" />
                  <span className="text-pink-700 font-semibold">Comunidade ativa</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Barra de busca */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-purple-200 mb-8"
          >
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400" />
              <input
                type="text"
                placeholder="Buscar por autor, conteúdo ou palavras-chave..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-purple-200 focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all text-purple-800 placeholder-purple-400"
              />
            </div>
          </motion.div>

          {/* Lista de Notas */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {notasFiltradas.length === 0 ? (
              <div className="text-center py-16">
                <div className="bg-white/80 backdrop-blur-md rounded-3xl p-12 border border-purple-200">
                  <div className="text-6xl mb-6">🔍</div>
                  <h3 className="text-2xl font-bold text-purple-800 mb-4">
                    {busca ? "Nenhuma história encontrada" : "Seja a primeira a compartilhar"}
                  </h3>
                  <p className="text-purple-600 mb-6">
                    {busca 
                      ? "Tente buscar por outras palavras-chave ou explore todas as histórias." 
                      : "Compartilhe sua experiência e ajude outras mulheres da comunidade."}
                  </p>
                  {busca && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setBusca("")}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all"
                    >
                      Ver Todas as Histórias
                    </motion.button>
                  )}
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {notasFiltradas.map((n, index) => (
                  <motion.div
                    key={n.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/90 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl p-8 border border-purple-200 group hover:scale-[1.01]"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {n.author?.charAt(0) || "💜"}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-purple-900">{n.author}</h3>
                        <div className="flex items-center gap-2 text-sm text-purple-500">
                          <FaCalendarAlt />
                          <span>
                            {new Date(n.created_at || Date.now()).toLocaleDateString('pt-BR', {
                              day: '2-digit',
                              month: 'long',
                              year: 'numeric'
                            })}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100 mb-6">
                      <p className="text-purple-800 leading-relaxed whitespace-pre-wrap text-lg">
                        {n.content}
                      </p>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-purple-600">
                          <FaHeart className="text-pink-500" />
                          <span className="text-sm font-medium">Apoio da comunidade</span>
                        </div>
                      </div>
                      
                      <motion.a
                        href={`/publico/${n.id}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all flex items-center gap-2 group-hover:shadow-xl"
                      >
                        <FaComments />
                        Ver Comentários
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </motion.a>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
}
