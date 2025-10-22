import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar"; // ajuste caso o arquivo seja Navbar.jsx com N maiúsculo
import maoImg from "../assets/imagens/mao.png"; // ajuste se seu arquivo estiver em outro caminho

export default function FaleComAlguem() {
  const navigate = useNavigate();
  const [copiado, setCopiado] = useState(null); // guarda qual número foi copiado

  // função de saída rápida: abre nova aba neutra e redireciona a página atual
  const handleSaidaRapida = () => {
    // abre uma página neutra em nova aba (não mostra seu site)
    window.open("https://www.google.com", "_blank", "noopener,noreferrer");
    // redireciona a aba atual pra uma página neutra (substitui o histórico)
    window.location.replace("https://www.bing.com");
  };

  const copyToClipboard = async (texto, label) => {
    try {
      await navigator.clipboard.writeText(texto);
      setCopiado(label);
      // limpa a notificação depois de 2s
      setTimeout(() => setCopiado(null), 2000);
    } catch (e) {
      // fallback simples
      alert(`Número: ${texto}`);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-200 via-purple-100 to-white">
      {/* Navbar */}
      <Navbar />

      {/* Conteúdo principal */}
      <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row items-stretch gap-8">
        {/* Botão saída rápida no topo direito (posição fixa relativa à viewport) */}
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={handleSaidaRapida}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg font-semibold"
          >
            SAÍDA RÁPIDA
          </button>
        </div>

        {/* Lado esquerdo - texto acolhedor */}
        <div className="md:w-1/2 bg-white/60 backdrop-blur-sm rounded-2xl p-8 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4">
            Você não está sozinha.
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Falar é um ato de coragem. Se você está passando por um momento
            difícil, existem pessoas preparadas para te ouvir e oferecer apoio.
            Aqui listamos canais e números que podem ajudar no seu momento de
            necessidade.
          </p>

          <div className="mt-4">
            <p className="text-sm text-gray-600">
              Observação: os números abaixo são exibidos para referência. Ao
              clicar, o número será copiado para sua área de transferência.
            </p>
          </div>
        </div>

        {/* Lado direito - imagem + cards (em coluna) */}
        <div className="md:w-1/2 flex flex-col items-center justify-center gap-6">
          <img
            src={maoImg}
            alt="Mãos estendidas"
            className="w-64 md:w-80 object-contain drop-shadow-lg"
          />

          {/* Cards de contato */}
          <div className="w-full max-w-md flex flex-col gap-4">
            <button
              onClick={() => copyToClipboard("180", "180")}
              className="flex items-center justify-between gap-4 bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition"
            >
              <div>
                <p className="text-purple-700 font-bold text-lg">Disque 180</p>
                <p className="text-gray-600 text-sm">Central de Atendimento à Mulher</p>
              </div>
              <div className="text-sm text-gray-500">{copiado === "180" ? "Copiado!" : "Clique para copiar"}</div>
            </button>

            <button
              onClick={() => copyToClipboard("190", "190")}
              className="flex items-center justify-between gap-4 bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition"
            >
              <div>
                <p className="text-purple-700 font-bold text-lg">Ligue 190</p>
                <p className="text-gray-600 text-sm">Polícia Militar (em caso de emergência)</p>
              </div>
              <div className="text-sm text-gray-500">{copiado === "190" ? "Copiado!" : "Clique para copiar"}</div>
            </button>

            <button
              onClick={() => copyToClipboard("100", "100")}
              className="flex items-center justify-between gap-4 bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition"
            >
              <div>
                <p className="text-purple-700 font-bold text-lg">Disque 100</p>
                <p className="text-gray-600 text-sm">Direitos Humanos</p>
              </div>
              <div className="text-sm text-gray-500">{copiado === "100" ? "Copiado!" : "Clique para copiar"}</div>
            </button>

            {/* Botão voltar / ajuda */}
            <div className="flex gap-4 mt-2">
              <button
                onClick={() => navigate("/")}
                className="flex-1 bg-gray-200 text-purple-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Voltar à Home
              </button>
              <button
                onClick={() => navigate("/rede-de-apoio")}
                className="flex-1 bg-purple-700 text-white py-3 rounded-lg font-semibold hover:bg-purple-800 transition"
              >
                Ver Rede de Apoio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
