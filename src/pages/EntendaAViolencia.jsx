import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Home, Brain, HandFist, Gem, ChevronLeft, ChevronRight, Heart } from "lucide-react";

const Violencia = () => {
  const violencias = [
    {
      id: 1,
      icon: <Brain size={48} />,
      tipo: "Psicológica",
      descricao: "Ameaças, humilhações, xingamentos, chantagens ou isolamento.",
    },
    {
      id: 2,
      icon: <HandFist size={48} />,
      tipo: "Física",
      descricao: "Agressões, empurrões, tapas, socos, chutes ou uso de objetos para ferir.",
    },
    {
      id: 3,
      icon: <Gem size={48} />,
      tipo: "Patrimonial",
      descricao: "Destruição de bens, retenção de documentos ou controle financeiro.",
    },
    {
      id: 4,
      icon: <Heart size={48} />,
      tipo: "Moral e Sexual",
      descricao:
        "Difamação, insultos, constrangimento público ou coerção sexual sem consentimento.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const nextSlide = () => setIndex((prev) => (prev + 1) % violencias.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + violencias.length) % violencias.length);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => nextSlide(), 4000);
    return () => clearInterval(timer);
  }, [paused, index]);

  return (
    <div className="bg-[#F3E5F5] min-h-screen flex flex-col items-center text-center">
      {/* Navbar Temporária (Pode trocar pela sua depois) */}
      <nav className="w-full bg-[#6A1B9A] text-white flex justify-between items-center px-8 py-4 shadow-lg">
        <div className="flex items-center gap-2 font-semibold text-lg cursor-pointer">
          <Home size={20} />
          <span>Home</span>
        </div>
        <ul className="flex gap-6 font-medium text-sm md:text-base">
          <li className="hover:text-pink-200 cursor-pointer transition">Preciso de Ajuda</li>
          <li className="hover:text-pink-200 cursor-pointer transition">Mapa de Apoio</li>
          <li className="hover:text-pink-200 cursor-pointer transition">Teste de Risco</li>
          <li className="hover:text-pink-200 cursor-pointer transition">Entenda a Violência</li>
          <li className="hover:text-pink-200 cursor-pointer transition">Fale com Alguém</li>
          <li className="hover:text-pink-200 cursor-pointer transition">Sobre</li>
        </ul>
      </nav>

      {/* Header */}
      <section className="w-full bg-[#CE93D8] py-16 px-6 md:px-16 text-[#4A148C]">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          O que é Violência?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl max-w-3xl mx-auto"
        >
          A violência doméstica pode se manifestar de várias formas: física, psicológica, sexual,
          moral e patrimonial. Reconhecer esses sinais é o primeiro passo para buscar ajuda e proteção.
        </motion.p>
      </section>

      {/* Carrossel */}
      <section
        className="relative mt-16 mb-10 w-full max-w-4xl px-6"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-[#6A1B9A] mb-8"
        >
          Tipos de Violência
        </motion.h2>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-[#AB47BC] text-white hover:bg-[#8E24AA] transition"
          >
            <ChevronLeft />
          </button>

          <motion.div
            key={violencias[index].id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-[#9C27B0] text-white p-10 rounded-2xl shadow-lg w-80 flex flex-col items-center justify-center"
          >
            <div className="mb-4 text-pink-200">{violencias[index].icon}</div>
            <h3 className="text-2xl font-semibold mb-3">{violencias[index].tipo}</h3>
            <p className="text-base">{violencias[index].descricao}</p>
          </motion.div>

          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-[#AB47BC] text-white hover:bg-[#8E24AA] transition"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-2 mt-6">
          {violencias.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-[#6A1B9A]" : "bg-[#E1BEE7]"
              } transition-all`}
            ></span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Violencia;
