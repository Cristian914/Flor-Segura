import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaComments, FaHeart, FaPaperPlane, FaUser, FaCalendarAlt, FaReply } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/navbar";
import Loading from "../components/Loading";

export default function PublicoNota() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();
  const [nota, setNota] = useState(null);
  const [comentarios, setComentarios] = useState([]);
  const [novoComentario, setNovoComentario] = useState("");
  const [loading, setLoading] = useState(true);
  const [enviandoComentario, setEnviandoComentario] = useState(false);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function carregarDados() {
      try {
        setLoading(true);
        setErro("");
        
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
        
        // Se for um ID de exemplo, criar dados fictícios
        if (id.startsWith('exemplo-')) {
          const notasExemplo = {
            'exemplo-1': {
              id: 'exemplo-1',
              author: 'Anônima',
              content: 'Hoje me senti mais segura caminhando pela rua principal. É bom saber que temos esse espaço para compartilhar experiências. 💜',
              created_at: new Date().toISOString()
            },
            'exemplo-2': {
              id: 'exemplo-2',
              author: 'Esperança',
              content: 'Quero agradecer a todas que compartilham suas histórias aqui. Vocês me dão força para continuar. Juntas somos mais fortes! ✨',
              created_at: new Date().toISOString()
            },
            'exemplo-3': {
              id: 'exemplo-3',
              author: 'Coragem',
              content: 'Encontrei um local de apoio próximo à minha casa através do mapa. Foi muito útil saber que posso contar com ajuda quando precisar.',
              created_at: new Date().toISOString()
            }
          };
          
          const notaExemplo = notasExemplo[id];
          if (notaExemplo) {
            setNota(notaExemplo);
            // Comentários de exemplo
            setComentarios([
              {
                id: 1,
                author: 'Solidariedade',
                comment: 'Obrigada por compartilhar! Sua experiência me inspira. 💜',
                created_at: new Date().toISOString()
              },
              {
                id: 2,
                author: 'Força',
                comment: 'Que bom saber que você se sentiu segura! Isso é muito importante.',
                created_at: new Date().toISOString()
              }
            ]);
            return;
          }
        }
        
        // PEGAR A NOTA DA API
        if (!id || id === 'undefined') {
          throw new Error('ID da publicação inválido');
        }
        
        const resNota = await fetch(`${API_URL}/publications/${id}`);
        if (!resNota.ok) {
          throw new Error('Publicação não encontrada');
        }
        const dataNota = await resNota.json();
        setNota(dataNota);

        // PEGAR COMENTÁRIOS
        if (id && id !== 'undefined') {
          const resComentarios = await fetch(`${API_URL}/api/comments/${id}`);
          if (resComentarios.ok) {
            const dataComentarios = await resComentarios.json();
            setComentarios(Array.isArray(dataComentarios) ? dataComentarios : []);
          }
        }
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
        setErro("Erro ao carregar a publicação. Tente novamente.");
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      carregarDados();
    }
  }, [id]);

  async function enviarComentario() {
    const token = localStorage.getItem("token");
    
    if (!token) {
      alert("Você precisa estar logada para comentar.");
      navigate("/login");
      return;
    }

    if (!novoComentario.trim()) {
      alert("Por favor, escreva um comentário antes de enviar.");
      return;
    }

    try {
      setEnviandoComentario(true);
      setErro("");
      
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      
      // Se for nota de exemplo, simular comentário
      if (id.startsWith('exemplo-')) {
        const novoComentarioObj = {
          id: Date.now(),
          comment: novoComentario.trim(),
          author: user?.name || "Usuário",
          created_at: new Date().toISOString()
        };
        setComentarios([novoComentarioObj, ...comentarios]);
        setNovoComentario("");
        alert("Comentário adicionado! (Modo demonstração)");
        return;
      }
      
      const response = await fetch(`${API_URL}/api/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          note_id: parseInt(id),
          comment: novoComentario.trim(),
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        console.error("Erro completo do servidor:", {
          status: response.status,
          statusText: response.statusText,
          data: data
        });
        
        if (response.status === 401) {
          alert("Sua sessão expirou. Faça login novamente.");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          navigate("/login");
          return;
        }
        
        if (response.status === 500) {
          alert("Erro interno do servidor. Verifique o console do backend.");
        }
        
        throw new Error(data.error || data.message || `Erro ${response.status}: ${response.statusText}`);
      }

      // Criar objeto do comentário com os dados do usuário atual
      const novoComentarioObj = {
        id: data.id || Date.now(),
        comment: novoComentario.trim(),
        author: user?.name || "Usuário",
        created_at: new Date().toISOString(),
        ...data
      };

      // Adiciona o novo comentário na lista
      setComentarios([novoComentarioObj, ...comentarios]);
      setNovoComentario("");
      
      alert("Comentário enviado com sucesso!");
      
    } catch (error) {
      console.error("Erro ao enviar comentário:", error);
      setErro(error.message || "Erro ao enviar comentário. Tente novamente.");
    } finally {
      setEnviandoComentario(false);
    }
  }

  if (loading) return <Loading message="Carregando publicação..." />;
  
  if (erro && !nota) {
    return (
      <>
        <Navbar />
        <div className="pt-28 px-6 max-w-3xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-12 shadow-lg border border-purple-200">
            <div className="text-6xl mb-6">😔</div>
            <h1 className="text-3xl font-bold text-purple-800 mb-4">Ops! Algo deu errado</h1>
            <p className="text-gray-700 mb-8 text-lg">
              Não conseguimos encontrar essa publicação. Ela pode ter sido removida ou o link está incorreto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/publico')} 
                className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition-all duration-300"
              >
                ← Voltar para Notas Públicas
              </button>
              <button 
                onClick={() => window.location.reload()} 
                className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-xl hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                🔄 Tentar Novamente
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  if (!nota) return <Loading message="Carregando publicação..." />;

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 pt-20 px-4">
        <div className="max-w-4xl mx-auto">

          {/* Header com botão voltar */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/publico')}
              className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-purple-200 text-purple-700 hover:text-purple-900 transition-all mb-6"
            >
              <FaArrowLeft /> Voltar para Comunidade
            </motion.button>
            
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-2 shadow-xl border border-purple-200">
              <div className="flex items-center gap-3 p-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full">
                  <FaComments className="text-white text-2xl" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Comentários e Apoio
                </h1>
              </div>
            </div>
          </motion.div>

          {/* Publicação Original */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-8 border border-purple-200 mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                {nota.author?.charAt(0) || "💜"}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-purple-900">{nota.author}</h3>
                <div className="flex items-center gap-2 text-purple-500">
                  <FaCalendarAlt />
                  <span>
                    {new Date(nota.created_at || Date.now()).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
              <p className="text-purple-800 leading-relaxed whitespace-pre-wrap text-lg">
                {nota.content}
              </p>
            </div>
          </motion.div>

          {/* Seção de Comentários */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-purple-200 mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full">
                <FaHeart className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-purple-900">
                Apoio da Comunidade ({comentarios.length})
              </h2>
            </div>

            {comentarios.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">💕</div>
                <h3 className="text-xl font-bold text-purple-800 mb-2">
                  Seja a primeira a apoiar
                </h3>
                <p className="text-purple-600">
                  Deixe uma mensagem de apoio e carinho para fortalecer nossa comunidade.
                </p>
              </div>
            ) : (
              <div className="space-y-4 mb-8">
                {comentarios.map((c, index) => (
                  <motion.div
                    key={c.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-purple-50 border border-purple-200 rounded-2xl p-6 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                        {c.author?.charAt(0) || "💜"}
                      </div>
                      <div>
                        <p className="text-purple-900 font-bold">{c.author}</p>
                        <p className="text-sm text-purple-500">
                          {new Date(c.created_at || Date.now()).toLocaleDateString('pt-BR')}
                        </p>
                      </div>
                    </div>
                    <p className="text-purple-800 leading-relaxed pl-13">{c.comment}</p>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Formulário de Comentário */}
            <div className="border-t border-purple-200 pt-6">
              {erro && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4 flex items-center gap-2"
                >
                  <div className="text-red-500 text-xl">⚠️</div>
                  <p className="text-red-700">{erro}</p>
                </motion.div>
              )}
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                  {user?.name?.charAt(0) || <FaUser />}
                </div>
                <div>
                  <p className="text-purple-900 font-semibold">
                    {user?.name || "Visitante"}
                  </p>
                  <p className="text-sm text-purple-500">
                    {user?.name ? "Pronta para apoiar" : "Faça login para comentar"}
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <textarea
                  value={novoComentario}
                  onChange={(e) => setNovoComentario(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && e.ctrlKey && novoComentario.trim()) {
                      e.preventDefault();
                      enviarComentario();
                    }
                  }}
                  placeholder="Escreva uma mensagem de apoio e carinho... (Ctrl+Enter para enviar)"
                  className="w-full p-4 border-2 border-purple-200 rounded-2xl focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all resize-none text-purple-800 placeholder-purple-400"
                  rows={4}
                  disabled={enviandoComentario}
                />
                <div className="absolute bottom-4 right-4 text-sm text-purple-400">
                  {novoComentario.length} caracteres
                </div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <p className="text-sm text-purple-500">
                  💜 Sua mensagem pode fazer a diferença na vida de alguém
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!novoComentario.trim() || enviandoComentario || !user?.name}
                  onClick={enviarComentario}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 shadow-lg
                    ${
                      !novoComentario.trim() || enviandoComentario || !user?.name
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white hover:shadow-xl"
                    }`}
                >
                  {enviandoComentario ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Enviar Apoio
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
