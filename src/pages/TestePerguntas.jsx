import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";

export default function TestePerguntas() {
  const navigate = useNavigate();

  const perguntas = [
    { texto: "Você se sente controlada nas suas decisões?", valor: 1 },
    { texto: "Alguém já te ameaçou fisicamente ou verbalmente?", valor: 2 },
    { texto: "Você sente medo dentro da sua própria casa?", valor: 2 },
    { texto: "Você é impedida de falar com amigos ou familiares?", valor: 1 },
    { texto: "Já sofreu agressão física recentemente?", valor: 3 },
  ];

  const [respostas, setRespostas] = useState(Array(perguntas.length).fill(null));

  const handleChange = (index, valor) => {
    const novasRespostas = [...respostas];
    novasRespostas[index] = valor;
    setRespostas(novasRespostas);
  };

  const enviarTeste = () => {
    if (respostas.includes(null)) {
      alert("Por favor, responda todas as perguntas.");
      return;
    }

    const pontuacao = respostas.reduce((a, b) => a + b, 0);
    navigate("/teste-de-risco/resultado", { state: { pontuacao } });
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-purple-100 p-8 flex flex-col items-center">
      <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-purple-800 mb-6 text-center">
          Responda com sinceridade
        </h1>

        {perguntas.map((pergunta, index) => (
          <div key={index} className="mb-6">
            <p className="text-lg font-medium text-gray-700 mb-3">{pergunta.texto}</p>
            <div className="flex gap-4">
              <button
                onClick={() => handleChange(index, pergunta.valor)}
                className={`px-6 py-2 rounded-lg border ${
                  respostas[index] === pergunta.valor
                    ? "bg-purple-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                Sim
              </button>
              <button
                onClick={() => handleChange(index, 0)}
                className={`px-6 py-2 rounded-lg border ${
                  respostas[index] === 0 ? "bg-purple-600 text-white" : "bg-gray-200"
                }`}
              >
                Não
              </button>
            </div>
          </div>
        ))}

        <button
          onClick={enviarTeste}
          className="bg-purple-600 text-white px-10 py-3 rounded-full font-bold hover:bg-purple-700 transition-all w-full"
        >
          Ver resultado
        </button>
      </div>
    </div>
    </>
  );
}
