import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";

export default function Publico() {
  const [notas, setNotas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/publications")
      .then((res) => res.json())
      .then((data) => setNotas(data))
      .catch((err) => console.log("Erro ao carregar notas públicas", err));
  }, []);

  return (
    <>
      <Navbar />

      <div className="pt-28 px-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-900 mb-6">
          Espaço Público 💬
        </h1>

        {notas.length === 0 ? (
          <p className="text-purple-700">Nenhuma nota pública ainda.</p>
        ) : (
          notas.map((n) => (
            <div
              key={n.id}
              className="bg-white shadow-md rounded-2xl p-5 border border-purple-200 mb-4"
            >
              <h3 className="text-purple-900 font-bold text-lg">
                {n.author}
              </h3>
              <p className="text-purple-700 my-2 whitespace-pre-wrap">
                {n.content}
              </p>
              <a
                href={`/publico/${n.id}`}
                className="text-purple-600 font-semibold hover:underline"
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
