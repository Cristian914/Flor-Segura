import React, { useState } from "react";
import carh from '../assets/imagens/carh.jpg';
 
const faqs = [
  {
    question: "Como pedir uma corrida?",
    answer:
      "Abra o app, informe seu local de partida e destino, escolha o tipo de veículo e confirme o pedido. Um motorista próximo aceitará sua corrida.",
  },
  {
    question: "Quais métodos de pagamento são aceitos?",
    answer:
      "Aceitamos cartões de crédito, débito, PayPal e saldo digital dentro do app.",
  },
  {
    question: "O que fazer se o motorista estiver atrasado?",
    answer:
      "Você pode cancelar a corrida sem custo ou entrar em contato pelo suporte dentro do app para maiores informações.",
  },
  {
    question: "Como funciona o suporte 24h?",
    answer:
      "Nossa equipe está disponível pelo WhatsApp, e-mail e chat dentro do app para ajudar você a qualquer momento.",
  },
];
 
const HelpCenter = () => {
  const [activeIndex, setActiveIndex] = useState(null);
 
  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
 
  return (
    <div
      className="relative w-full min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${carh})` }}
    >
 
      <div className="absolute inset-0 bg-gradient-to-b from-red-300/80 to-red-100/80 backdrop-blur-sm"></div>
 
      <div className="relative max-w-5xl mx-auto py-20 px-6 space-y-14 text-red-900">
        <h1 className="text-5xl font-extrabold text-center mb-12 drop-shadow-lg">
          🚗 Central de Ajuda ALÔCAR
        </h1>
 
 
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <Card
            icon="📱"
            title="Como pedir uma corrida?"
            description="Abra o app, informe seu destino e escolha o tipo de veículo que deseja."
          />
          <Card
            icon="💳"
            title="Métodos de pagamento"
            description="Adicione ou altere seus cartões de crédito e saldo digital direto no app."
          />
          <Card
            icon="🚖"
            title="Problemas com a corrida"
            description="Se algo não saiu como esperado, entre em contato pelo suporte no app ou por e-mail."
          />
          <Card
            icon="📞"
            title="Atendimento 24h"
            description="Suporte via WhatsApp: (11) 99999-9999, e-mail: suporte@alocar.com."
            isContact
          />
        </div>
 
   
        <div className="flex justify-center">
          <a
            href="mailto:suporte@alocar.com"
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-10 py-3 rounded-2xl shadow-lg transition"
          >
            📧 Fale Conosco
          </a>
        </div>
 
     
        <section className="bg-red-50 bg-opacity-70 rounded-3xl p-8 shadow-lg max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Perguntas Frequentes</h2>
 
          <div className="space-y-4">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="border border-red-300 rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-red-700 hover:bg-red-200 transition"
                >
                  <span>{item.question}</span>
                  <span className="text-2xl select-none">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="px-6 py-4 bg-red-100 text-red-900 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
 
        <p className="text-center italic text-sm opacity-70 mt-10">
          Na ALÔCAR, sua segurança e conforto são nossa prioridade. Conte conosco para uma viagem sem preocupações!
        </p>
      </div>
    </div>
  );
};
 
const Card = ({ icon, title, description, isContact }) => (
  <div
    className="
      bg-white bg-opacity-90
      rounded-3xl
      shadow-lg
      p-8
      flex flex-col
      items-start
      space-y-4
      cursor-pointer
      hover:scale-105
      transition-transform duration-300
      border border-red-300
      "
  >
    <div className="text-5xl">{icon}</div>
    <h3 className="text-2xl font-semibold">{title}</h3>
    <p className="text-red-800">{description}</p>
    {isContact && (
      <a
        href="tel:+5511999999999"
        className="mt-auto text-red-600 font-semibold underline hover:text-red-700"
      >
        Ligue agora
      </a>
    )}
  </div>
);
 
export default HelpCenter;