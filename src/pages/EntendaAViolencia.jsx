import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Brain,
  HandFist,
  Gem,
  Heart,
  Shield,
  Eye,
  FileText,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Navbar from "../components/Navbar";

export default function Violencia() {
  const violencias = [
    {
      id: 1,
      icon: <Brain size={55} />,
      tipo: "Psicológica",
      cor: "from-purple-500 to-pink-400",
      descricao:
        "A violência psicológica atua silenciosamente, afetando emoções, autoestima e autonomia da vítima.",
      exemplos: [
        "Humilhações e xingamentos",
        "Manipulação (gaslighting)",
        "Ameaças emocionais",
        "Isolamento social",
      ],
    },
    {
      id: 2,
      icon: <HandFist size={55} />,
      tipo: "Física",
      cor: "from-red-500 to-orange-400",
      descricao:
        "Envolve qualquer agressão corporal, com ou sem marcas visíveis.",
      exemplos: ["Socos e empurrões", "Queimaduras", "Agressões com objetos"],
    },
    {
      id: 3,
      icon: <Heart size={55} />,
      tipo: "Sexual",
      cor: "from-rose-500 to-fuchsia-500",
      descricao:
        "A violência sexual ocorre quando não existe consentimento ou há coerção física ou psicológica.",
      exemplos: ["Estupro", "Obrigar relações", "Assédio persistente"],
    },
    {
      id: 4,
      icon: <Gem size={55} />,
      tipo: "Patrimonial",
      cor: "from-emerald-500 to-teal-400",
      descricao:
        "Controle, retenção ou destruição de bens da vítima.",
      exemplos: ["Tomar documentos", "Controlar dinheiro", "Destruir objetos"],
    },
    {
      id: 5,
      icon: <FileText size={55} />,
      tipo: "Moral",
      cor: "from-indigo-500 to-blue-400",
      descricao:
        "Atinge a dignidade da vítima por meio de difamação ou insultos públicos.",
      exemplos: ["Calúnias", "Exposição da vida privada"],
    },
    {
      id: 6,
      icon: <Shield size={55} />,
      tipo: "Institucional",
      cor: "from-gray-500 to-gray-300",
      descricao:
        "Ocorre quando instituições negam direitos ou atendimento adequado.",
      exemplos: ["Negar atendimento", "Abuso de autoridade"],
    },
    {
      id: 7,
      icon: <Eye size={55} />,
      tipo: "Digital",
      cor: "from-cyan-500 to-blue-400",
      descricao:
        "A violência digital envolve ataques, perseguição e exposição online.",
      exemplos: ["Ameaças online", "Vazamento de fotos", "Controle digital"],
    },
  ];

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % violencias.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + violencias.length) % violencias.length);
    setProgress(0);
  };

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          nextSlide();
          return 0;
        }
        return p + 1;
      });
    }, 60);
    return () => clearInterval(t);
  }, [paused, index]);

  const slideVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: { opacity: 0, scale: 0.9 },
  };

  return (
    <div className="bg-gradient-to-b from-pink-100 to-pink-50 min-h-screen text-purple-900 font-sans">
      <Navbar />

      {/* HERO — Estilo igual ao "Sobre" */}
      <section className="px-6 md:px-20 py-24 text-center bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-b-[40px] shadow-xl">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold drop-shadow-xl"
        >
          Entenda a Violência
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-2xl mt-6 max-w-3xl mx-auto text-purple-100"
        >
          Conheça de forma clara, visual e segura os tipos de violência — e como
          identificá-los.
        </motion.p>
      </section>

      {/* SEÇÃO TRIPLA ESTILO "SOBRE" */}
      <section className="px-6 md:px-20 mt-20 grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {[
          {
            titulo: "Reconhecer",
            texto:
              "Muitas violências começam de forma discreta. Entender sinais é o primeiro passo.",
          },
          {
            titulo: "Informar",
            texto:
              "Educação e informação empoderam e ajudam mulheres a quebrar ciclos.",
          },
          {
            titulo: "Agir",
            texto:
              "Identificar a violência permite buscar ajuda e garantir segurança.",
          },
        ].map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-white rounded-3xl p-10 shadow-lg border border-purple-100 hover:shadow-2xl transition"
          >
            <h3 className="text-2xl font-bold text-purple-800 mb-3">
              {c.titulo}
            </h3>
            <p className="text-purple-700 text-base leading-relaxed">
              {c.texto}
            </p>
          </motion.div>
        ))}
      </section>

      {/* CARROSSEL — Menor, arredondado e elegante */}
      <section
        className="relative w-full max-w-4xl mx-auto px-6 mt-24 mb-24 select-none"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <h2 className="text-4xl font-bold text-purple-800 mb-10 text-center">
          Tipos de Violência
        </h2>

        <div className="flex items-center justify-center gap-3">
          <button
            onClick={prevSlide}
            className="p-4 rounded-full bg-purple-400 text-white shadow-md hover:scale-110 transition"
          >
            <ChevronLeft size={26} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={violencias[index].id}
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`w-full rounded-3xl p-10 text-white shadow-xl bg-gradient-to-br ${violencias[index].cor} relative overflow-hidden transition`}
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="p-5 bg-white/20 rounded-full border border-white/30">
                  {violencias[index].icon}
                </div>

                <h3 className="text-3xl font-extrabold">
                  {violencias[index].tipo}
                </h3>
                <p className="text-base text-white/90 max-w-md">
                  {violencias[index].descricao}
                </p>

                <ul className="mt-4 space-y-1 text-white/90 text-left">
                  {violencias[index].exemplos.map((ex, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-white"></span>
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>

              <motion.div
                style={{ width: `${progress}%` }}
                className="absolute bottom-0 left-0 h-1 bg-white/70"
              />
            </motion.div>
          </AnimatePresence>

          <button
            onClick={nextSlide}
            className="p-4 rounded-full bg-purple-400 text-white shadow-md hover:scale-110 transition"
          >
            <ChevronRight size={26} />
          </button>
        </div>
      </section>
    </div>
  );
}
