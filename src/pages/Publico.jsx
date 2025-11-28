import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";

export default function Publico() {
  const [notas, setNotas] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/publications")
      .then((res) => res.json())
      .then((data) => setNotas(data))
      .catch((err) => console.log("Erro ao carregar notas públicas", err));
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

      <div className="pt-28 px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-purple-900 mb-10">
          Espaço Público 💬
        </h1>

        {/* 🔍 Barra de busca */}
        <input
          type="text"
          placeholder="Buscar por autor ou conteúdo..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="w-full p-3 mb-6 rounded-xl border border-purple-300 focus:ring-2 
                     focus:ring-purple-500 outline-none shadow-sm"
        />

        {notasFiltradas.length === 0 ? (
          <p className="text-purple-700 text-lg bg-purple-100/50 p-4 rounded-xl border border-purple-200">
            Nenhuma nota encontrada.
          </p>
        ) : (
          notasFiltradas.map((n) => (
            <div
              key={n.id}
              className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 
                         rounded-2xl p-6 border border-purple-200 mb-6 cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center 
                                justify-center text-purple-700 font-bold">
                  {n.author?.charAt(0) || "U"}
                </div>
                <h3 className="text-purple-900 font-bold text-lg">{n.author}</h3>
              </div>

              <p className="text-purple-700 my-3 whitespace-pre-wrap leading-relaxed">
                {n.content}
              </p>

              <a
                href={`/publico/${n.id}`}
                className="text-purple-600 font-semibold hover:text-purple-800 
                           hover:underline transition-colors"
              >
                Ver comentários →
              </a>
            </div>
          ))
        )}
      </div>
    </>
  );
}
