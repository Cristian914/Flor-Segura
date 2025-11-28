import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/navbar";

export default function PublicoNota() {
  const { id } = useParams();
  const [nota, setNota] = useState(null);
  const [comentarios, setComentarios] = useState([]);
  const [novoComentario, setNovoComentario] = useState("");

  useEffect(() => {
    // PEGAR A NOTA
    fetch(`http://localhost:3001/publications/${id}`)
      .then((res) => res.json())
      .then((data) => setNota(data));

    // PEGAR COMENTÁRIOS
    fetch(`http://localhost:3001/comments/${id}`)
      .then((res) => res.json())
      .then((data) => setComentarios(data));
  }, [id]);

  function enviarComentario() {
    const token = localStorage.getItem("token");

    fetch(`http://localhost:3001/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`   // 🔥 TOKEN AQUI
      },
      body: JSON.stringify({
        public_note_id: id,
        comment: novoComentario
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.error("Erro ao comentar:", data.error);
          return;
        }

        // adiciona o novo comentário na tela
        setComentarios([...comentarios, data]);

        setNovoComentario("");
      });
  }

  if (!nota) return <p>Carregando...</p>;

  return (
    <>
      <Navbar />

      <div className="pt-28 px-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-900 mb-6">
          Comentários da Publicação 💭
        </h1>

        <div className="bg-white shadow-md rounded-2xl p-5 border border-purple-200 mb-6">
          <h3 className="text-purple-900 font-bold text-lg">{nota.author}</h3>
          <p className="text-purple-700 whitespace-pre-wrap">{nota.content}</p>
        </div>

        <h2 className="text-xl font-semibold text-purple-900 mb-2">Comentários</h2>

        {comentarios.length === 0 ? (
          <p className="text-purple-700">Nenhum comentário ainda.</p>
        ) : (
          comentarios.map((c) => (
            <div
              key={c.id}
              className="bg-purple-50 border border-purple-200 rounded-xl p-3 mb-3"
            >
              <p className="text-purple-900 font-semibold">{c.author}</p>
              <p className="text-purple-700">{c.comment}</p>
            </div>
          ))
        )}

        <div className="mt-6">
          <textarea
            value={novoComentario}
            onChange={(e) => setNovoComentario(e.target.value)}
            placeholder="Escreva seu comentário..."
            className="w-full p-3 border border-purple-300 rounded-xl focus:outline-purple-600"
          ></textarea>
          <button
            disabled={!novoComentario.trim()}
            onClick={enviarComentario}
            className={`mt-2 px-4 py-2 rounded-xl transition text-white
              ${!novoComentario.trim() 
                ? "bg-purple-300 cursor-not-allowed" 
                : "bg-purple-700 hover:bg-purple-800"}`}
          >
            Comentar
          </button>
        </div>
      </div>
    </>
  );
}
