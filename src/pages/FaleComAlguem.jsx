import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import maoImg from "../assets/imagens/mao.png";

export default function FaleComAlguem() {
  const navigate = useNavigate();
  const [copiado, setCopiado] = useState(null);

  const contatos = [
    {
      numero: "180",
      label: "Disque 180",
      descricao: "Central de Atendimento à Mulher",
    },
    {
      numero: "190",
      label: "Ligue 190",
      descricao: "Polícia Militar (em caso de emergência)",
    },
    {
      numero: "100",
      label: "Disque 100",
      descricao: "Direitos Humanos",
    },
  ];

  const handleSaidaRapida = () => {
    window.open("https://www.google.com", "_blank", "noopener,noreferrer");
    window.location.replace("https://www.bing.com");
  };

  const copyToClipboard = async (texto, label) => {
    try {
      await navigator.clipboard.writeText(texto);
      setCopiado(label);
      setTimeout(() => setCopiado(null), 2000);
    } catch {
      alert(`Número: ${texto}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 text-purple-800 font-sans">
      <Navbar />

      <button
        onClick={handleSaidaRapida}
        className="fixed top-4 right-4 z-50 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg shadow-lg font-semibold transition"
        aria-label="Saída rápida"
      >
        SAÍDA RÁPIDA
      </button>

      <main className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
        <section className="md:w-1/2 bg-white bg-opacity-80 backdrop-blur-md rounded-3xl p-10 shadow-lg">
          <h1 className="text-4xl font-extrabold mb-6 leading-tight">
            Você <span className="text-purple-600">não está sozinha.</span>
          </h1>
          <p className="text-lg leading-relaxed mb-6">
            Falar é um ato de coragem. Se você está passando por um momento
            difícil, existem pessoas preparadas para te ouvir e oferecer apoio.
            Aqui listamos canais e números que podem ajudar no seu momento de
            necessidade.
          </p>
          <p className="text-sm text-gray-600">
            Observação: os números abaixo são exibidos para referência. Ao
            clicar, o número será copiado para sua área de transferência.
          </p>
        </section>

        <section className="md:w-1/2 flex flex-col items-center gap-10">
          <img
            src={maoImg}
            alt="Mãos estendidas simbolizando apoio"
            className="w-64 md:w-72 rounded-2xl shadow-lg"
          />

          {/* Card Lista de Contatos */}
          <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-purple-700 mb-4 text-center">
              Contatos Úteis
            </h2>
            <ul className="divide-y divide-purple-200">
              {contatos.map(({ numero, label, descricao }) => (
                <li key={numero}>
                  <button
                    onClick={() => copyToClipboard(numero, numero)}
                    className="w-full text-left py-4 flex justify-between items-center hover:bg-purple-50 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400"
                    aria-label={`Copiar número ${numero}`}
                  >
                    <div>
                      <p className="font-semibold text-purple-700 text-lg">{label}</p>
                      <p className="text-gray-600 text-sm">{descricao}</p>
                    </div>
                    <div
                      className={`text-sm select-none ${
                        copiado === numero ? "text-green-600 font-bold" : "text-purple-400"
                      }`}
                    >
                      {copiado === numero ? "Copiado!" : "Clique para copiar"}
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-6 w-full max-w-md mt-4">
            <button
              onClick={() => navigate("/")}
              className="flex-1 bg-gray-300 hover:bg-gray-400 text-purple-700 font-semibold py-3 rounded-lg transition"
            >
              Voltar à Home
            </button>
            <button
              onClick={() => navigate("/rede-de-apoio")}
              className="flex-1 bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 rounded-lg transition"
            >
              Ver Rede de Apoio
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
