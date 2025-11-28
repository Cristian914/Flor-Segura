import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";

export default function MeuEspacoSeguro() {
  const [anotacoes, setAnotacoes] = useState([]);
  const [texto, setTexto] = useState("");
  const [editando, setEditando] = useState(null);
  const [filtroMes, setFiltroMes] = useState("");
  const [busca, setBusca] = useState("");
  const [isPublic, setIsPublic] = useState(false); // 🔥 NOVO

  const API_URL = "http://localhost:3001/notes";
  const token = localStorage.getItem("token");

  // ======================================
  // 🔹 Carregar notas do backend
  // ======================================
  useEffect(() => {
    if (!token) return;

    fetch(API_URL, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((dados) => {
        const notasFormatadas = dados.map((nota) => ({
          id: nota.id,
          conteudo: nota.content,
          dataCompleta: new Date(nota.created_at || Date.now()),
          data: new Date(nota.created_at || Date.now()).toLocaleDateString(
            "pt-BR",
            { day: "2-digit", month: "long", year: "numeric" }
          ),
        }));
        setAnotacoes(notasFormatadas);
      })
      .catch(() => console.log("Erro ao carregar notas"));
  }, []);

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
        await fetch(`${API_URL}/${editando}`, {
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
      const res = await fetch(API_URL, {
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
        await fetch(`http://localhost:3001/publications/${nova.id}`, {
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

      setAnotacoes([obj, ...anotacoes]);

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

    fetch(`${API_URL}/${id}`, {
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
  
      <div className="min-h-screen bg-gradient-to-b from-purple-50 via-purple-100 to-white pt-28 px-4 flex flex-col items-center">
  
        {/* Título da Página */}
        <div className="text-center mb-10 animate-fadeIn">
          <h1 className="text-4xl font-extrabold text-purple-900 drop-shadow-sm">
            Meu Espaço Seguro 💜
          </h1>
          <p className="text-purple-700 mt-2 max-w-xl mx-auto">
            Um lugar protegido para você registrar e organizar seus pensamentos.
          </p>
  
          <button
            onClick={() => (window.location.href = "/publico")}
            className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-7 py-3 rounded-full shadow-md transition-all hover:scale-105"
          >
            🌍 Ver Notas Públicas
          </button>
        </div>
  
        {/* Card de Criar Anotação */}
        <div className="bg-white shadow-xl border border-purple-200 rounded-2xl p-6 max-w-3xl w-full mb-10 animate-slideUp">
  
          <h2 className="text-xl font-bold text-purple-900 mb-3 flex items-center gap-2">
            ✍️ Criar nova anotação
          </h2>
  
          <textarea
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            className="w-full h-40 border border-purple-300 rounded-xl p-4 text-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm mb-4"
            placeholder={editando ? "✏️ Editando anotação..." : "Escreva aqui com tranquilidade..."}
          />
  
          <div className="flex items-center gap-2 mb-4">
            <input
              type="checkbox"
              checked={isPublic}
              onChange={() => setIsPublic(!isPublic)}
            />
            <label className="text-purple-700 font-medium">
              Tornar esta anotação pública
            </label>
          </div>
  
          <div className="flex gap-4 justify-end">
            <button
              onClick={() => {
                setTexto("");
                setEditando(null);
                setIsPublic(false);
              }}
              className="px-6 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full font-medium transition-all"
            >
              Cancelar
            </button>
  
            <button
              onClick={salvar}
              className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold shadow-md transition-all hover:scale-105"
            >
              {editando ? "Salvar Edição" : "Salvar Anotação"}
            </button>
          </div>
        </div>
  
        {/* Filtros */}
        <div className="bg-white border border-purple-200 shadow-md rounded-2xl p-5 max-w-3xl w-full mb-10 animate-slideUp delay-150">
          <h2 className="text-lg font-bold text-purple-900 mb-4 flex items-center gap-2">
            🔎 Filtrar anotações
          </h2>
  
          <div className="flex flex-wrap gap-5 sm:justify-between justify-center">
  
            <div className="flex flex-col">
              <label className="text-purple-700 mb-1 font-medium">Filtrar por mês:</label>
              <select
                value={filtroMes}
                onChange={(e) => setFiltroMes(e.target.value)}
                className="border border-purple-300 rounded-xl px-4 py-2 text-purple-800 focus:ring-2 focus:ring-purple-400"
              >
                <option value="">Todos</option>
                {[...Array(12)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {new Date(0, i).toLocaleString("pt-BR", { month: "long" })}
                  </option>
                ))}
              </select>
            </div>
  
            <div className="flex flex-col">
              <label className="text-purple-700 mb-1 font-medium">Buscar:</label>
              <input
                type="text"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Ex: ajuda, casa..."
                className="border border-purple-300 rounded-xl px-4 py-2 text-purple-800 focus:ring-2 focus:ring-purple-400"
              />
            </div>
          </div>
        </div>
  
        {/* Lista de Anotações */}
        <div className="grid gap-5 max-w-3xl w-full animate-fadeIn delay-300">
  
          {anotacoesFiltradas.length === 0 ? (
            <p className="text-purple-700 text-center italic">
              Nenhuma anotação encontrada 💬
            </p>
          ) : (
            anotacoesFiltradas.map((nota) => (
              <div
                key={nota.id}
                className="bg-white border border-purple-200 p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.01]"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-bold text-purple-900 flex items-center gap-2">
                    📝 {nota.data}
                  </h3>
  
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        setTexto(nota.conteudo);
                        setEditando(nota.id);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      Editar
                    </button>
  
                    <button
                      onClick={() => apagar(nota.id)}
                      className="text-red-600 hover:text-red-800 font-semibold"
                    >
                      Apagar
                    </button>
                  </div>
                </div>
  
                <p className="text-purple-700 whitespace-pre-wrap leading-relaxed">
                  {nota.conteudo}
                </p>
              </div>
            ))
          )}
  
        </div>
  
        <p className="text-sm text-purple-500 mt-10 text-center">
          Pressione <strong>ESC</strong> para sair rapidamente para uma página neutra.
        </p>
      </div>
    </>
  );
}