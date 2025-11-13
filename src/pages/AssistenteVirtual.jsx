import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/navbar";

// 🌸 Assistente Virtual — FlorSegura
// Alinhado à identidade visual de acolhimento e empatia
// OBS: A chave da OpenAI NÃO deve estar no frontend. Use um backend /api/chat.

export default function AssistenteVirtual() {
  const [mensagem, setMensagem] = useState("");
  const [respostas, setRespostas] = useState([]); // { role, content, time }
  const [carregando, setCarregando] = useState(false);
  const [digitando, setDigitando] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto scroll para última mensagem
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [respostas, digitando]);

  // Saída rápida — redireciona para página neutra
  const saidaRapida = () => {
    window.location.replace("https://www.google.com");
  };

  // Hora local (HH:MM)
  const horaAtual = () => {
    const d = new Date();
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const enviarMensagem = async () => {
    if (!mensagem.trim()) return;

    const novaMensagem = { role: "user", content: mensagem.trim(), time: horaAtual() };
    setRespostas((r) => [...r, novaMensagem]);
    setMensagem("");
    setCarregando(true);
    setDigitando(true);

    try {
      // Chamada segura para o backend (exemplo /api/chat)
      const payload = {
        system:
          "Você é Flor — uma assistente acolhedora que orienta mulheres em situação de risco ou com dúvidas sobre relacionamentos. Responda com empatia, clareza e linguagem acessível.",
        history: [...respostas, novaMensagem].map((m) => ({
          role: m.role,
          content: m.content,
        })),
      };

      const resp = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!resp.ok) throw new Error("Erro no servidor");

      const dados = await resp.json();
      const textoAssistente = dados.assistant || "Desculpe, não consegui responder agora.";

      setRespostas((r) => [
        ...r,
        { role: "assistant", content: textoAssistente, time: horaAtual() },
      ]);
    } catch (err) {
      console.error(err);
      setRespostas((r) => [
        ...r,
        {
          role: "assistant",
          content: "Erro ao conectar com o serviço de IA. Tente novamente mais tarde.",
          time: horaAtual(),
        },
      ]);
    } finally {
      setCarregando(false);
      setDigitando(false);
    }
  };

  // Envia com Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      enviarMensagem();
    }
  };

  return (
    <>
      <Navbar />

      {/* 👇 Compensação da Navbar fixa */}
      <div className="min-h-screen bg-gradient-to-b from-white via-[#FAF5FF] to-[#F3E8FF] px-4 pt-32 pb-8">
        <div className="max-w-4xl mx-auto">
          {/* Cabeçalho da assistente */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              {/* Avatar da Flor */}
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#6A1B9A] to-[#BA68C8] shadow-md">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z"
                    fill="#FFF"
                    opacity="0.95"
                  />
                  <path
                    d="M3 21c0-3.866 3.582-7 9-7s9 3.134 9 7v1H3v-1z"
                    fill="#F8BBD0"
                    opacity="0.15"
                  />
                </svg>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#4A148C]">
                  Flor — Assistente de Acolhimento
                </h2>
                <p className="text-sm text-[#555555]">
                  Acolhimento, orientação e passos práticos. Você está segura aqui.
                </p>
              </div>
            </div>

            {/* Botões rápidos */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => (window.location.href = "/preciso-ajuda")}
                className="hidden sm:inline-flex items-center gap-2 bg-[#BA68C8] hover:bg-[#9b47b8] text-white px-4 py-2 rounded-full shadow-sm font-semibold transition"
              >
                Preciso de ajuda agora
              </button>

              <button
                onClick={saidaRapida}
                title="Saída rápida"
                className="inline-flex items-center gap-2 bg-white border border-[#EDE7F6] px-3 py-2 rounded-full shadow-sm hover:shadow-md transition"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 17l5-5-5-5v10z" fill="#6A1B9A" />
                </svg>
                <span className="text-sm text-[#6A1B9A]">Sair</span>
              </button>
            </div>
          </div>

          {/* Card do chat */}
          <div className="bg-white rounded-3xl shadow-xl border border-[#F1E6FB] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-4">
              {/* Sidebar de ações rápidas */}
              <aside className="hidden md:block md:col-span-1 bg-gradient-to-b from-[#FBF5FF] to-white p-6 border-r border-[#F3E1FF]">
                <h3 className="text-sm font-semibold text-[#6A1B9A] mb-3">Ações rápidas</h3>
                <div className="flex flex-col gap-3">
                  <button className="text-left p-3 rounded-lg bg-[#FAF0FF] hover:bg-[#F3E6FF] transition">
                    📍 Encontrar apoio local
                  </button>
                  <button className="text-left p-3 rounded-lg bg-[#FAF0FF] hover:bg-[#F3E6FF] transition">
                    📝 Preparar denúncia
                  </button>
                  <button className="text-left p-3 rounded-lg bg-[#FAF0FF] hover:bg-[#F3E6FF] transition">
                    ☎️ Serviços de emergência
                  </button>
                </div>

                <div className="mt-6 text-xs text-[#555555]">
                  <p className="font-semibold">Privacidade</p>
                  <p>
                    Este chat é anônimo. Evite enviar dados sensíveis (endereços completos,
                    documentos).
                  </p>
                </div>
              </aside>

              {/* Área principal do chat */}
              <main className="col-span-1 md:col-span-3 p-6 flex flex-col h-[65vh]">
                <div className="flex-1 overflow-y-auto pr-2">
                  <div className="flex flex-col gap-4">
                    {respostas.length === 0 && (
                      <div className="rounded-xl p-6 bg-gradient-to-r from-[#F8EAF9] to-[#FCEFF5] border border-[#F3E1FF]">
                        <p className="text-sm text-[#6A1B9A] font-semibold">
                          Olá, eu sou a Flor. 💜
                        </p>
                        <p className="text-sm text-[#555555]">
                          Se quiser, comece contando brevemente o que aconteceu — ou clique em
                          “Preciso de ajuda agora”.
                        </p>
                      </div>
                    )}

                    {respostas.map((msg, i) => (
                      <div
                        key={i}
                        className={`max-w-3xl ${
                          msg.role === "user" ? "self-end text-right" : "self-start text-left"
                        }`}
                      >
                        <div
                          className={`inline-block px-4 py-3 rounded-2xl shadow-sm break-words ${
                            msg.role === "user"
                              ? "bg-[#F3E1FF] text-[#4A148C]"
                              : "bg-[#6A1B9A] text-white"
                          }`}
                        >
                          <div className="whitespace-pre-wrap">{msg.content}</div>
                        </div>
                        <div className="text-xs mt-1 text-[#777777]">{msg.time}</div>
                      </div>
                    ))}

                    {digitando && (
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#6A1B9A] flex items-center justify-center text-white">
                          F
                        </div>
                        <div className="bg-[#F3E6FF] px-3 py-2 rounded-xl animate-pulse">
                          Flor está digitando...
                        </div>
                      </div>
                    )}

                    <div ref={messagesEndRef} />
                  </div>
                </div>

                {/* Input e botão */}
                <div className="mt-4">
                  <div className="flex items-center gap-3">
                    <textarea
                      value={mensagem}
                      onChange={(e) => setMensagem(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Escreva aqui... (pressione Enter para enviar)"
                      className="flex-1 min-h-[48px] max-h-36 resize-none border border-[#EFE6FB] rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E1BFFF] placeholder:text-[#999999]"
                    />

                    <button
                      onClick={enviarMensagem}
                      disabled={carregando}
                      className="inline-flex items-center gap-2 bg-[#6A1B9A] hover:bg-[#5a137f] text-white font-semibold px-5 py-3 rounded-2xl shadow-md transition disabled:opacity-60"
                    >
                      {carregando ? "Enviando..." : "Enviar"}
                    </button>
                  </div>

                  <div className="mt-2 flex items-center justify-between text-xs text-[#777777]">
                    <div>Resposta em linguagem acessível • Anônima</div>
                    <div className="hidden sm:block">
                      Atendimento automatizado — em caso de emergência, ligue 190
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-[#555555]">
            Desenvolvido para acolhimento — siga boas práticas de privacidade e teste com
            especialistas antes de lançar.
          </div>
        </div>
      </div>
    </>
  );
}
