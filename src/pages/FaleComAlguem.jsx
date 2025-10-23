import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Copy, CheckCircle2, AlertTriangle } from "lucide-react";
import Navbar from "../components/Navbar";
import maoImg from "../assets/imagens/mao.png";
 
export default function FaleComAlguem() {
  const navigate = useNavigate();
  const [copiado, setCopiado] = useState(null);
 
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
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-[#F3E5F5] via-[#E1BEE7] to-[#CE93D8] text-[#4A148C] font-sans">
      {/* Efeito de fundo suave */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#F8BBD0_0%,_transparent_70%),_radial-gradient(circle_at_bottom_right,_#BA68C8_0%,_transparent_70%)] opacity-50 blur-2xl pointer-events-none"></div>
 
      <Navbar />
 
      {/* Saída rápida */}
      <div className="fixed top-5 right-5 z-50">
        <button
          onClick={handleSaidaRapida}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg shadow-lg flex items-center gap-2 font-semibold tracking-tight transition-all hover:scale-105"
        >
          <AlertTriangle size={18} /> SAÍDA RÁPIDA
        </button>
      </div>
 
      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-stretch gap-10">
        {/* Texto acolhedor */}
        <div className="md:w-1/2 bg-white/50 backdrop-blur-md border border-white/30 shadow-xl rounded-3xl p-10 flex flex-col justify-center transition hover:shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent mb-6">
            Você não está sozinha.
          </h1>
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            Falar é um ato de coragem. Se você está passando por um momento
            difícil, existem pessoas preparadas para te ouvir e oferecer apoio.
            Estes são canais oficiais e seguros para buscar ajuda.
          </p>
          <p className="text-sm text-gray-600 italic">
            Clique em um dos números abaixo para copiá-lo rapidamente.
          </p>
        </div>
 
        {/* Lado direito */}
        <div className="md:w-1/2 flex flex-col items-center justify-center gap-8">
          <img
            src={maoImg}
            alt="Mãos estendidas"
            className="w-64 md:w-80 object-contain drop-shadow-2xl animate-float"
          />
 
          <div className="w-full max-w-md flex flex-col gap-5">
            {[
              {
                numero: "180",
                titulo: "Disque 180",
                desc: "Central de Atendimento à Mulher",
                cor: "from-pink-500 to-purple-500",
              },
              {
                numero: "190",
                titulo: "Ligue 190",
                desc: "Polícia Militar (em caso de emergência)",
                cor: "from-red-500 to-orange-500",
              },
              {
                numero: "100",
                titulo: "Disque 100",
                desc: "Direitos Humanos (violência, abuso e discriminação)",
                cor: "from-blue-500 to-cyan-400",
              },
            ].map((item) => (
              <button
                key={item.numero}
                onClick={() => copyToClipboard(item.numero, item.numero)}
                className={`group flex items-center justify-between gap-4 bg-gradient-to-r ${item.cor} text-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all hover:scale-[1.02]`}
              >
                <div className="text-left">
                  <p className="text-xl font-bold drop-shadow-sm">
                    {item.titulo}
                  </p>
                  <p className="text-sm opacity-90">{item.desc}</p>
                </div>
                <div className="flex items-center gap-2">
                  {copiado === item.numero ? (
                    <>
                      <CheckCircle2 size={20} className="text-white" />
                      <span className="text-sm">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={18} className="opacity-80 group-hover:opacity-100" />
                      <span className="text-sm">Copiar</span>
                    </>
                  )}
                </div>
              </button>
            ))}
 
            {/* Botões inferiores */}
            <div className="flex gap-4 mt-4">
              <button
                onClick={() => navigate("/")}
                className="flex-1 bg-white/70 text-purple-700 py-3 rounded-lg font-semibold shadow-md hover:bg-white hover:shadow-lg transition-all"
              >
                Voltar à Home
              </button>
              <button
                onClick={() => navigate("/rede-de-apoio")}
                className="flex-1 bg-gradient-to-r from-purple-700 to-pink-600 text-white py-3 rounded-lg font-semibold shadow-md hover:scale-[1.03] hover:shadow-lg transition-all"
              >
                Rede de Apoio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
/* 🌟 Pequeno efeito flutuante animado */
const style = document.createElement("style");
style.innerHTML = `
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
}
.animate-float {
  animation: float 4s ease-in-out infinite;
}
`;
document.head.appendChild(style);
 
 