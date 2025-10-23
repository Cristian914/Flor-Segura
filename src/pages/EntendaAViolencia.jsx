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


const Violencia = () => {
  const violencias = [
    {
      id: 1,
      icon: <Brain size={80} />,
      tipo: "Psicológica",
      cor: "from-purple-600 to-pink-500",
      descricao:
        "A violência psicológica causa dano emocional, destrói a autoestima e busca controlar o comportamento da vítima.",
      exemplos: [
        "Ameaças e humilhações constantes",
        "Isolamento social e vigilância",
        "Manipulação, gaslighting e chantagens",
        "Controle de decisões pessoais",
      ],
    },
    {
      id: 2,
      icon: <HandFist size={80} />,
      tipo: "Física",
      cor: "from-red-600 to-orange-500",
      descricao:
        "A violência física é qualquer ação que cause dor, lesões ou sofrimento corporal, mesmo que não deixe marcas visíveis.",
      exemplos: [
        "Tapas, empurrões, socos e chutes",
        "Uso de objetos para agredir",
        "Queimaduras, sufocamento ou ferimentos",
        "Privação de sono, comida ou remédios",
      ],
    },
    {
      id: 3,
      icon: <Heart size={80} />,
      tipo: "Sexual",
      cor: "from-rose-600 to-fuchsia-500",
      descricao:
        "A violência sexual ocorre quando há qualquer forma de coerção, assédio ou ato sexual sem consentimento.",
      exemplos: [
        "Estupro ou tentativa de estupro",
        "Obrigar a manter relações contra a vontade",
        "Controle sobre o corpo ou reprodução",
        "Toques e comentários inapropriados",
      ],
    },
    {
      id: 4,
      icon: <Gem size={80} />,
      tipo: "Patrimonial",
      cor: "from-emerald-600 to-teal-400",
      descricao:
        "A violência patrimonial envolve o controle, destruição ou retenção de bens e recursos da vítima.",
      exemplos: [
        "Destruição de documentos e objetos pessoais",
        "Controle de dinheiro e contas bancárias",
        "Impedir o uso de bens ou moradia",
        "Tomar pertences sem permissão",
      ],
    },
    {
      id: 5,
      icon: <FileText size={80} />,
      tipo: "Moral",
      cor: "from-indigo-600 to-blue-500",
      descricao:
        "A violência moral fere a honra e a imagem da vítima por meio de difamação, calúnia ou insultos públicos.",
      exemplos: [
        "Acusações falsas e humilhações",
        "Exposição de intimidade",
        "Falas ofensivas e constrangedoras",
        "Desrespeito em público ou online",
      ],
    },
    {
      id: 6,
      icon: <Shield size={80} />,
      tipo: "Institucional",
      cor: "from-gray-600 to-gray-400",
      descricao:
        "A violência institucional é praticada por agentes do Estado ou instituições ao negar direitos ou negligenciar atendimentos.",
      exemplos: [
        "Negar atendimento médico ou jurídico",
        "Tratamento discriminatório em delegacias",
        "Demora proposital em processos",
        "Desrespeito de servidores públicos",
      ],
    },
    {
      id: 7,
      icon: <Eye size={80} />,
      tipo: "Digital",
      cor: "from-cyan-500 to-blue-400",
      descricao:
        "A violência digital ocorre no ambiente online, por meio de ameaças, exposição íntima e perseguições virtuais.",
      exemplos: [
        "Divulgação de imagens íntimas",
        "Ameaças e chantagens online",
        "Rastreamento e controle digital",
        "Fake news e difamação nas redes",
      ],
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


    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + 1;
      });
    }, 50);


    return () => clearInterval(timer);
  }, [paused, index]);


  const slideVariants = {
    hiddenRight: { opacity: 0, x: 150, rotateY: -20 },
    hiddenLeft: { opacity: 0, x: -150, rotateY: 20 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
    exit: { opacity: 0, scale: 0.9 },
  };


  return (
    <div className="bg-gradient-to-b from-[#F3E5F5] via-[#F8EAF6] to-[#EDE7F6] min-h-screen flex flex-col items-center text-center overflow-hidden text-[#4A148C] font-sans">
      <Navbar />


      {/* HEADER */}
      <section className="w-full bg-gradient-to-r from-[#7B1FA2] to-[#BA68C8] py-24 px-6 md:px-16 text-white shadow-inner relative overflow-hidden">
        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold drop-shadow-lg tracking-tight"
        >
          O que é Violência?
        </motion.h1>


        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed mt-6 text-pink-50"
        >
          A violência assume diferentes formas — física, psicológica, moral,
          sexual, patrimonial, digital e até institucional.  
          Compreender cada uma delas é o primeiro passo para combater e
          proteger quem sofre.
        </motion.p>
      </section>


      {/* CARROSSEL */}
      <section
        className="relative mt-20 mb-16 w-full max-w-7xl px-6 select-none"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-[#6A1B9A] mb-12"
        >
          Tipos de Violência
        </motion.h2>


        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prevSlide}
            className="p-4 rounded-full bg-gradient-to-r from-[#AB47BC] to-[#8E24AA] text-white hover:scale-110 hover:shadow-lg hover:shadow-pink-400/40 transition-all"
          >
            <ChevronLeft size={28} />
          </button>


          <AnimatePresence mode="wait">
            <motion.div
              key={violencias[index].id}
              variants={slideVariants}
              initial="hiddenRight"
              animate="visible"
              exit="exit"
              className={`relative group w-full max-w-5xl rounded-3xl p-12 md:p-16 text-white shadow-2xl bg-gradient-to-br ${violencias[index].cor} border border-white/10 overflow-hidden`}
            >
              <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
                <motion.div
                  initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className="bg-white/20 backdrop-blur-md p-6 rounded-full border border-white/30 shadow-inner"
                >
                  {violencias[index].icon}
                </motion.div>


                <div className="text-left flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                    {violencias[index].tipo}
                  </h3>
                  <p className="text-lg mb-6 text-white/90 leading-relaxed">
                    {violencias[index].descricao}
                  </p>


                  <ul className="space-y-2 text-white/90">
                    {violencias[index].exemplos.map((exemplo, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="w-3 h-3 rounded-full bg-white/70 shadow-md"></span>
                        {exemplo}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>


              {/* Barra de progresso */}
              <motion.div
                style={{ width: `${progress}%` }}
                className="absolute bottom-0 left-0 h-1 bg-white/70 rounded-full transition-all duration-100"
              ></motion.div>
            </motion.div>
          </AnimatePresence>


          <button
            onClick={nextSlide}
            className="p-4 rounded-full bg-gradient-to-r from-[#AB47BC] to-[#8E24AA] text-white hover:scale-110 hover:shadow-lg hover:shadow-pink-400/40 transition-all"
          >
            <ChevronRight size={28} />
          </button>
        </div>


        {/* Indicadores */}
        <div className="flex justify-center gap-3 mt-10">
          {violencias.map((_, i) => (
            <motion.span
              key={i}
              animate={{
                scale: i === index ? 1.4 : 1,
                backgroundColor: i === index ? "#6A1B9A" : "#E1BEE7",
              }}
              transition={{ duration: 0.3 }}
              className="w-4 h-4 rounded-full shadow-inner"
            ></motion.span>
          ))}
        </div>
      </section>
    </div>
  );
};


export default Violencia;


 