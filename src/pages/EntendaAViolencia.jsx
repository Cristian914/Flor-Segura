import { useState } from "react";
import {
  Brain,
  HandFist,
  Gem,
  Heart,
  ShieldX,
  Globe,
  Baby,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Navbar from "../components/navbar";

const Violencia = () => {
  const violencias = [
    {
      id: 1,
      icon: <Brain size={36} />,
      tipo: "Psicológica",
      descricao: "Ameaças, humilhações, xingamentos, chantagens ou isolamento.",
    },
    {
      id: 2,
      icon: <HandFist size={36} />,
      tipo: "Física",
      descricao: "Empurrões, tapas, socos, chutes ou uso de objetos para ferir.",
    },
    {
      id: 3,
      icon: <Gem size={36} />,
      tipo: "Patrimonial",
      descricao: "Destruição de bens, retenção de documentos ou controle financeiro.",
    },
    {
      id: 4,
      icon: <Heart size={36} />,
      tipo: "Moral e Sexual",
      descricao: "Constrangimento público, difamação ou abuso sexual sem consentimento.",
    },
    {
      id: 5,
      icon: <ShieldX size={36} />,
      tipo: "Institucional",
      descricao: "Violência praticada por instituições públicas ou privadas.",
    },
    {
      id: 6,
      icon: <Globe size={36} />,
      tipo: "Cibernética",
      descricao: "Ameaças, perseguição ou exposição de forma online.",
    },
    {
      id: 7,
      icon: <Baby size={36} />,
      tipo: "Obstétrica",
      descricao: "Violência durante a gravidez, parto ou pós-parto.",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 3;

  const nextSlide = () => {
    setStartIndex((prev) => (prev + visibleCards) % violencias.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) =>
      prev - visibleCards < 0 ? violencias.length - visibleCards : prev - visibleCards
    );
  };

  const getVisibleViolencias = () => {
    const end = startIndex + visibleCards;
    if (end <= violencias.length) {
      return violencias.slice(startIndex, end);
    } else {
      return [...violencias.slice(startIndex), ...violencias.slice(0, end - violencias.length)];
    }
  };

  return (
    <div className="bg-[#F3E5F5] min-h-screen flex flex-col items-center text-center">
      <Navbar />

      {/* Cabeçalho */}
      <section className="w-full bg-[#CE93D8] pt-28 pb-16 px-6 md:px-16 text-[#4A148C]">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">O que é Violência?</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          A violência doméstica pode se manifestar de várias formas: física, psicológica, sexual,
          moral, patrimonial e outras. Reconhecer os tipos é essencial para prevenir e denunciar.
        </p>
      </section>

      {/* Carrossel com vários cards */}
      <section className="mt-16 w-full max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-[#6A1B9A] mb-10">Tipos de Violência</h2>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-[#AB47BC] text-white hover:bg-[#8E24AA] transition"
          >
            <ChevronLeft />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
            {getVisibleViolencias().map((violencia) => (
              <div
                key={violencia.id}
                className="bg-white text-[#4A148C] p-6 rounded-3xl shadow-xl flex flex-col items-center border border-[#E1BEE7] transition hover:scale-105"
              >
                <div className="mb-3 text-[#BA68C8]">{violencia.icon}</div>
                <h3 className="text-xl font-bold mb-2">{violencia.tipo}</h3>
                <p className="text-sm text-gray-700">{violencia.descricao}</p>
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-[#AB47BC] text-white hover:bg-[#8E24AA] transition"
          >
            <ChevronRight />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Violencia;
