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

      <div className="min-h-screen bg-gradient-to-b from-purple-50 via-purple-100 to-white pt-28 px-6 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-purple-900 mb-4">
          Meu Espaço Seguro 💜
        </h1>
        <p className="text-purple-700 text-center mb-6 max-w-2xl">
          Aqui você pode escrever, editar e guardar suas anotações com segurança.
        </p>

        {/* 🔥 Botão ir para público */}
        <button
          onClick={() => (window.location.href = "/publico")}
          className="mb-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full shadow"
        >
          🌍 Ver Notas Públicas
        </button>

        {/* Campo de anotação */}
        <textarea
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          className="w-full max-w-2xl h-40 border border-purple-300 rounded-2xl p-4 text-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm mb-4"
          placeholder={
            editando ? "✏️ Edite sua anotação..." : "✍️ Escreva aqui sua anotação..."
          }
        />

        {/* 🔥 Checkbox tornar público */}
        <div className="w-full max-w-2xl flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            checked={isPublic}
            onChange={() => setIsPublic(!isPublic)}
          />
          <label className="text-purple-700 font-semibold">
            Tornar esta anotação pública
          </label>
        </div>

        {/* Botões */}
        <div className="flex flex-wrap gap-4 mb-6 justify-center">
          <button
            onClick={salvar}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded-full transition"
          >
            {editando ? "Salvar Edição" : "Salvar Anotação"}
          </button>

          <button
            onClick={() => {
              setTexto("");
              setEditando(null);
              setIsPublic(false);
            }}
            className="bg-gray-400 hover:bg-gray-500 text-white font-bold px-6 py-3 rounded-full transition"
          >
            Cancelar
          </button>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center items-center">
          <div className="flex items-center gap-2">
            <label className="text-purple-700 font-semibold">Filtrar por mês:</label>
            <select
              value={filtroMes}
              onChange={(e) => setFiltroMes(e.target.value)}
              className="border border-purple-300 rounded-xl px-4 py-2 text-purple-700 focus:ring-2 focus:ring-purple-400"
            >
              <option value="">Todos</option>
              {[...Array(12)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {new Date(0, i).toLocaleString("pt-BR", { month: "long" })}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-purple-700 font-semibold">Buscar:</label>
            <input
              type="text"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Ex: ajuda, casa..."
              className="border border-purple-300 rounded-xl px-4 py-2 text-purple-700 focus:ring-2 focus:ring-purple-400"
            />
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-4 w-full max-w-3xl">
          {anotacoesFiltradas.length === 0 ? (
            <p className="text-purple-600 text-center italic">
              Nenhuma anotação encontrada 💬
            </p>
          ) : (
            anotacoesFiltradas.map((nota) => (
              <div
                key={nota.id}
                className="bg-white shadow-md rounded-2xl p-5 border border-purple-200 hover:shadow-lg transition"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-bold text-purple-800">
                    📝 Minha Anotação — {nota.data}
                  </h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setTexto(nota.conteudo);
                        setEditando(nota.id);
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

                <p className="text-purple-700 whitespace-pre-wrap">
                  {nota.conteudo}
                </p>
              </div>
            ))
          )}
        </div>

        <p className="text-sm text-purple-500 mt-6 max-w-2xl text-center">
          Dica: pressione <strong>ESC</strong> para sair rapidamente para uma página neutra.
        </p>
      </div>
    </>
  );
}
