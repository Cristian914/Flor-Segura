import React from "react";
import { useNavigate } from "react-router-dom";
import MulherImg from "../assets/imagens/mulher.png";

export default function TesteDeRisco() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-purple-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white shadow-lg rounded-2xl flex flex-col lg:flex-row items-center p-8 gap-10 max-w-4xl">
        {/* Texto */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-purple-700 mb-4">
            Descubra seu nível de risco
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Responda algumas perguntas rápidas e veja uma avaliação de segurança.
          </p>

          {/* Botões agrupados com espaçamento */}
          <div className="flex flex-col items-center lg:items-start gap-4">
            <button
              onClick={() => navigate("/teste-de-risco/perguntas")}
              className="bg-purple-600 text-white font-bold px-8 py-3 rounded-full hover:bg-purple-700 transition-transform transform hover:scale-105"
            >
              Começar
            </button>

            <button
              onClick={() => navigate("/")}
              className="border-2 border-purple-600 text-purple-600 font-bold px-8 py-3 rounded-full hover:bg-purple-100 transition-transform transform hover:scale-105"
            >
              Voltar à Home
            </button>
          </div>
        </div>

        {/* Imagem */}
        <div className="flex-1">
          <img
            src={MulherImg}
            alt="Mulher pensando"
            className="w-full max-w-sm mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
