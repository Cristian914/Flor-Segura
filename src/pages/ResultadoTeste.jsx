import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ResultadoTeste() {
  const location = useLocation();
  const navigate = useNavigate();
  const pontuacao = location.state?.pontuacao;

  if (pontuacao === undefined) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <p className="text-xl text-red-500">Erro: Nenhuma pontuação recebida.</p>
        <button
          onClick={() => navigate("/teste-de-risco")}
          className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          Voltar
        </button>
      </div>
    );
  }

  // Determinar nível de risco
  let nivel = "";
  let mensagem = "";

  if (pontuacao <= 2) {
    nivel = "Baixo risco";
    mensagem =
      "Com base nas suas respostas, aparentemente não há sinais claros de risco elevado. Continue atento aos seus sentimentos e busque apoio sempre que precisar.";
  } else if (pontuacao <= 5) {
    nivel = "Risco moderado";
    mensagem =
      "Alguns sinais podem indicar uma situação preocupante. Reflita sobre sua segurança emocional e física. Conversar com alguém de confiança pode ser um passo importante.";
  } else {
    nivel = "Alto risco";
    mensagem =
      "Há fortes indícios de que você possa estar em uma situação de risco. Considere buscar apoio imediatamente. Você não está sozinha! Existem redes de apoio prontas para ajudar.";
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-300 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-purple-800 mb-6">Resultado do Teste</h1>

        <h2 className="text-2xl font-semibold text-purple-700 mb-3">{nivel}</h2>

        <p className="text-lg text-gray-700 mb-6">{mensagem}</p>

        <button
          onClick={() => navigate("/rede-de-apoio")}
          className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-all mb-4"
        >
          Buscar ajuda agora
        </button>

        <button
          onClick={() => navigate("/home")}
          className="px-6 py-3 bg-gray-300 text-purple-700 rounded-lg font-medium hover:bg-gray-400 transition-all"
        >
          Voltar à Home
        </button>
      </div>
    </div>
  );
}
