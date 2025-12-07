import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaEdit, FaTrash, FaPlus, FaSearch, FaCalendarAlt, FaGlobe, FaLock, FaHeart } from "react-icons/fa";
import Navbar from "../components/navbar";

export default function MeuEspacoSeguro() {
  const [anotacoes, setAnotacoes] = useState([]);
  const [texto, setTexto] = useState("");
  const [editando, setEditando] = useState(null);
  const [filtroMes, setFiltroMes] = useState("");
  const [busca, setBusca] = useState("");
  const [isPublic, setIsPublic] = useState(false); // 🔥 NOVO

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
  const token = localStorage.getItem("token");

  // ======================================
  // 🔹 Carregar notas do backend
  // ======================================
  useEffect(() => {
    if (!token) {
      console.log('Token não encontrado');
      setAnotacoes([]);
      return;
    }

    fetch(`${API_URL}/notes`, {
      headers: { 
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        return res.json();
      })
      .then((dados) => {
        if (Array.isArray(dados)) {
          const notasFormatadas = dados.map((nota) => ({
            id: nota.id,
            conteudo: nota.content || '',
            dataCompleta: new Date(nota.created_at || Date.now()),
            data: new Date(nota.created_at || Date.now()).toLocaleDateString(
              "pt-BR",
              { day: "2-digit", month: "long", year: "numeric" }
            ),
          }));
          setAnotacoes(notasFormatadas);
        } else {
          setAnotacoes([]);
        }
      })
      .catch((error) => {
        console.log("Erro ao carregar notas:", error);
        // Fallback: usar dados do localStorage se existirem
        const savedNotes = localStorage.getItem('flor-segura-notes');
        if (savedNotes) {
          try {
            const parsedNotes = JSON.parse(savedNotes);
            setAnotacoes(parsedNotes);
          } catch (e) {
            setAnotacoes([]);
          }
        } else {
          setAnotacoes([]);
        }
      });
  }, [token, API_URL]);

  // ======================================
  // 🔹 Salvar (CRIAR OU EDITAR)
  // ======================================
  const salvar = async () => {
    if (!texto.trim()) {
      alert("Digite algo antes de salvar 💜");
      return;
    }

    // ===========================
    // 🔧 EDITAR NOTA (PUT)
    // ===========================
    if (editando) {
      try {
        await fetch(`${API_URL}/notes/${editando}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ content: texto }),
        });

        setAnotacoes(
          anotacoes.map((n) =>
            n.id === editando ? { ...n, conteudo: texto } : n
          )
        );

        alert("✏️ Anotação atualizada!");
        setTexto("");
        setEditando(null);
        setIsPublic(false);
      } catch {
        alert("Erro ao atualizar anotação.");
      }
      return;
    }

    // ===========================
    // 🆕 CRIAR NOTA (POST)
    // ===========================
    try {
      const res = await fetch(`${API_URL}/notes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ content: texto }),
      });

      const nova = await res.json();

      // 🔥 PUBLICAR SE ESTIVER MARCADO COMO PÚBLICA
      if (isPublic) {
        await fetch(`${API_URL}/publications/${nova.id}`, {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
        });
      }

      const obj = {
        id: nova.id,
        conteudo: nova.content,
        dataCompleta: new Date(),
        data: new Date().toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }),
      };

      const newNotes = [obj, ...anotacoes];
      setAnotacoes(newNotes);
      // Salvar no localStorage como backup
      localStorage.setItem('flor-segura-notes', JSON.stringify(newNotes));

      alert("💾 Anotação salva!");
      setTexto("");
      setIsPublic(false);
    } catch {
      alert("Erro ao salvar anotação.");
    }
  };

  // ======================================
  // 🔹 Apagar anotação
  // ======================================
  const apagar = (id) => {
    if (!window.confirm("Deseja realmente apagar esta anotação?")) return;

    fetch(`${API_URL}/notes/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(() => {
        setAnotacoes(anotacoes.filter((nota) => nota.id !== id));
      })
      .catch(() => alert("Erro ao apagar anotação."));
  };

  // ======================================
  // 🔹 Filtros
  // ======================================
  const anotacoesFiltradas = anotacoes.filter((nota) => {
    if (!nota || !nota.dataCompleta || !nota.conteudo) return false;
    
    const mesNota = new Date(nota.dataCompleta).getMonth() + 1;
    const coincideMes = filtroMes ? mesNota === parseInt(filtroMes) : true;
    const coincideBusca = busca
      ? nota.conteudo.toLowerCase().includes(busca.toLowerCase())
      : true;
    return coincideMes && coincideBusca;
  });

  return (
    <>
      <Navbar />
  
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 pt-20 px-4">
        <div className="max-w-6xl mx-auto">
  
          {/* Header com Título e Estatísticas */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-purple-200">
              <div className="flex items-center justify-center gap-3 mb-4">
                <FaHeart className="text-purple-500 text-3xl" />
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Meu Espaço Seguro
                </h1>
              </div>
              <p className="text-purple-700 text-lg max-w-2xl mx-auto mb-6">
                Um lugar protegido e acolhedor para você registrar seus pensamentos, sentimentos e experiências com total privacidade.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <div className="bg-purple-100 px-4 py-2 rounded-full">
                  <span className="text-purple-700 font-semibold">{anotacoes.length} anotações</span>
                </div>
                <div className="bg-pink-100 px-4 py-2 rounded-full">
                  <span className="text-pink-700 font-semibold">100% privado</span>
                </div>
              </div>
  
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => (window.location.href = "/publico")}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full shadow-lg transition-all font-semibold flex items-center gap-2 mx-auto"
              >
                <FaGlobe /> Ver Comunidade Pública
              </motion.button>
            </div>
          </motion.div>
  
          {/* Card de Criar/Editar Anotação */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/90 backdrop-blur-md shadow-2xl border border-purple-200 rounded-3xl p-8 mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full">
                <FaPlus className="text-white text-xl" />
              </div>
              <h2 className="text-2xl font-bold text-purple-900">
                {editando ? "Editando Anotação" : "Nova Anotação"}
              </h2>
            </div>
  
            <div className="relative mb-6">
              <textarea
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                className="w-full h-48 border-2 border-purple-200 rounded-2xl p-6 text-purple-900 focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-100 shadow-inner resize-none transition-all"
                placeholder={editando ? "✏️ Editando sua anotação..." : "Escreva aqui seus pensamentos, sentimentos ou experiências... Este é seu espaço seguro 💜"}
              />
              <div className="absolute bottom-4 right-4 text-sm text-purple-400">
                {texto.length} caracteres
              </div>
            </div>
  
            <div className="flex items-center gap-3 mb-6 p-4 bg-purple-50 rounded-xl border border-purple-100">
              <div className="flex items-center gap-2">
                {isPublic ? <FaGlobe className="text-purple-500" /> : <FaLock className="text-purple-500" />}
                <input
                  type="checkbox"
                  checked={isPublic}
                  onChange={() => setIsPublic(!isPublic)}
                  className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
                />
                <label className="text-purple-700 font-medium cursor-pointer">
                  {isPublic ? "Compartilhar com a comunidade" : "Manter privado"}
                </label>
              </div>
            </div>
  
            <div className="flex gap-4 justify-end">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setTexto("");
                  setEditando(null);
                  setIsPublic(false);
                }}
                className="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-xl font-medium transition-all"
              >
                Cancelar
              </motion.button>
  
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={salvar}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-semibold shadow-lg transition-all flex items-center gap-2"
              >
                <FaHeart /> {editando ? "Salvar Alterações" : "Salvar Anotação"}
              </motion.button>
            </div>
          </motion.div>
  
          {/* Filtros */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/90 backdrop-blur-md border border-purple-200 shadow-xl rounded-3xl p-6 mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full">
                <FaSearch className="text-white" />
              </div>
              <h2 className="text-xl font-bold text-purple-900">
                Filtrar e Buscar
              </h2>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-purple-700 mb-2 font-medium">
                  <FaCalendarAlt /> Filtrar por mês:
                </label>
                <select
                  value={filtroMes}
                  onChange={(e) => setFiltroMes(e.target.value)}
                  className="w-full border-2 border-purple-200 rounded-xl px-4 py-3 text-purple-800 focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all"
                >
                  <option value="">Todos os meses</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={`month-${i + 1}`} value={i + 1}>
                      {new Date(0, i).toLocaleString("pt-BR", { month: "long" })}
                    </option>
                  ))}
                </select>
              </div>
  
              <div>
                <label className="flex items-center gap-2 text-purple-700 mb-2 font-medium">
                  <FaSearch /> Buscar no conteúdo:
                </label>
                <input
                  type="text"
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  placeholder="Digite palavras-chave..."
                  className="w-full border-2 border-purple-200 rounded-xl px-4 py-3 text-purple-800 focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all"
                />
              </div>
            </div>
          </motion.div>
  
          {/* Lista de Anotações */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            {anotacoesFiltradas.length === 0 ? (
              <div className="text-center py-16">
                <div className="bg-white/80 backdrop-blur-md rounded-3xl p-12 border border-purple-200">
                  <div className="text-6xl mb-4">💭</div>
                  <h3 className="text-2xl font-bold text-purple-800 mb-2">
                    {busca || filtroMes ? "Nenhuma anotação encontrada" : "Suas primeiras palavras"}
                  </h3>
                  <p className="text-purple-600">
                    {busca || filtroMes 
                      ? "Tente ajustar os filtros ou criar uma nova anotação" 
                      : "Comece escrevendo seus pensamentos no espaço acima"}
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid gap-6">
                {anotacoesFiltradas.map((nota, index) => (
                  <motion.div
                    key={nota.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/90 backdrop-blur-md border border-purple-200 p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:scale-[1.01] group"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-2 rounded-full">
                          <FaHeart className="text-white text-sm" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-purple-900">
                            {nota.data}
                          </h3>
                          <p className="text-sm text-purple-500">
                            {nota.conteudo.length} caracteres
                          </p>
                        </div>
                      </div>
  
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => {
                            setTexto(nota.conteudo);
                            setEditando(nota.id);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                          className="p-2 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full transition-all"
                          title="Editar anotação"
                        >
                          <FaEdit />
                        </motion.button>
  
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => apagar(nota.id)}
                          className="p-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-full transition-all"
                          title="Apagar anotação"
                        >
                          <FaTrash />
                        </motion.button>
                      </div>
                    </div>
  
                    <div className="bg-purple-50 rounded-2xl p-4 border border-purple-100">
                      <p className="text-purple-800 whitespace-pre-wrap leading-relaxed">
                        {nota.conteudo}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
  
          {/* Footer */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12 p-6 bg-white/60 backdrop-blur-md rounded-2xl border border-purple-200"
          >
            <p className="text-purple-600 mb-2">
              💜 Suas anotações são privadas e seguras
            </p>
            <p className="text-sm text-purple-500">
              Pressione <kbd className="bg-purple-100 px-2 py-1 rounded text-purple-700 font-mono">ESC</kbd> para sair rapidamente
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}