import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaPhoneAlt,
  FaHandsHelping,
  FaMapMarkerAlt,
  FaArrowRight,
  FaShieldAlt,
  FaHeart,
} from "react-icons/fa";
import Navbar from "../components/navbar";
import CardHelp from "../assets/imagens/cardhelp.png";

export default function RedeDeApoio() {
  const navigate = useNavigate();

  const handleSaidaRapida = () => {
    window.open("https://www.google.com", "_blank");
    window.location.href = "https://www.climatempo.com.br/";
  };

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-purple-50 via-pink-50 to-purple-100 min-h-screen text-purple-900 font-sans">
        {/* HERO - ACOLHIMENTO */}
        <section className="px-8 lg:px-24 py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          <div className="max-w-xl animate-fadeIn">
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-snug text-purple-900">
              Você merece apoio, carinho e segurança. 💜
            </h1>
            <p className="text-lg text-purple-800 mb-8 leading-relaxed">
              Há pessoas e lugares prontos para te acolher. Encontre sua rede de
              apoio e descubra caminhos para recomeçar com segurança e empatia.
            </p>
            <button
              onClick={() => navigate("/mapa-de-apoio")}
              className="bg-gradient-to-r from-purple-600 to-pink-400 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:brightness-110 transition-all flex items-center gap-2"
            >
              <FaMapMarkerAlt /> Encontrar Rede de Apoio
            </button>
          </div>

          <div className="animate-zoomIn">
            <img
              src={CardHelp}
              alt="Rede de apoio"
              className="w-full max-w-[400px] drop-shadow-xl rounded-3xl"
            />
          </div>
        </section>

        {/* BLOCO INFORMATIVO */}
        <section className="px-8 lg:px-24 py-16 bg-white/70 backdrop-blur-sm rounded-3xl shadow-inner mx-6 lg:mx-20 my-12">
          <h2 className="text-3xl font-bold text-center mb-10 text-purple-800">
            O que é uma Rede de Apoio? 🌷
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-2xl text-center shadow hover:shadow-lg transition">
              <FaHandsHelping className="text-4xl text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Acolhimento</h3>
              <p className="text-sm text-purple-800">
                Pessoas e instituições que te escutam com empatia e te acolhem
                sem julgamento.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-2xl text-center shadow hover:shadow-lg transition">
              <FaShieldAlt className="text-4xl text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Proteção</h3>
              <p className="text-sm text-purple-800">
                Locais seguros e profissionais preparados para garantir seu
                bem-estar.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-2xl text-center shadow hover:shadow-lg transition">
              <FaHeart className="text-4xl text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Empatia</h3>
              <p className="text-sm text-purple-800">
                O apoio é feito por quem entende suas dores e acredita na sua
                força.
              </p>
            </div>
          </div>
        </section>

        {/* GUIA DE AJUDA */}
        <section className="px-8 lg:px-24 py-16 text-center">
          <h2 className="text-3xl font-bold mb-6 text-purple-900">
            Como encontrar ajuda 💬
          </h2>
          <p className="text-purple-800 max-w-2xl mx-auto mb-12 leading-relaxed">
            Buscar ajuda é um passo de coragem. Veja como agir de forma segura e
            discreta:
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white/90 p-6 rounded-2xl shadow hover:shadow-lg transition transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-3 text-purple-700">
                1. Acesse o mapa
              </h3>
              <p className="text-purple-800 text-sm">
                Encontre abrigos, delegacias da mulher e ONGs próximas de você.
              </p>
            </div>
            <div className="bg-white/90 p-6 rounded-2xl shadow hover:shadow-lg transition transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-3 text-purple-700">
                2. Escolha sua rede
              </h3>
              <p className="text-purple-800 text-sm">
                Veja detalhes de contato, horários e formas de atendimento
                seguro.
              </p>
            </div>
            <div className="bg-white/90 p-6 rounded-2xl shadow hover:shadow-lg transition transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-3 text-purple-700">
                3. Dê o primeiro passo
              </h3>
              <p className="text-purple-800 text-sm">
                Contate um serviço de apoio ou alguém de confiança. Você não
                precisa enfrentar isso sozinha.
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate("/mapa-de-apoio")}
            className="mt-10 bg-gradient-to-r from-purple-600 to-pink-400 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:brightness-110 transition flex items-center gap-2 mx-auto"
          >
            Abrir Mapa <FaArrowRight />
          </button>
        </section>

        {/* CONTATOS DE EMERGÊNCIA */}
        <section className="px-8 lg:px-24 py-16 bg-gradient-to-r from-purple-200 via-pink-100 to-purple-200 text-center">
          <h2 className="text-3xl font-bold mb-10 text-purple-900">
            Contatos que podem te ajudar 📞
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { numero: "180", descricao: "Central de Atendimento à Mulher" },
              { numero: "190", descricao: "Emergência Policial" },
              { numero: "100", descricao: "Direitos Humanos" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/90 border border-purple-200 p-5 rounded-2xl shadow-md hover:shadow-xl transition w-72"
              >
                <h3 className="text-3xl font-extrabold text-purple-700 mb-2">
                  {item.numero}
                </h3>
                <p className="text-purple-800 mb-3">{item.descricao}</p>
                <a
                  href={`tel:${item.numero}`}
                  className="bg-gradient-to-r from-purple-600 to-pink-400 text-white px-5 py-2 rounded-full font-semibold inline-flex items-center gap-2 hover:brightness-110 transition"
                >
                  <FaPhoneAlt /> Ligar Agora
                </a>
              </div>
            ))}
          </div>

          <button
            onClick={handleSaidaRapida}
            className="mt-12 bg-gradient-to-r from-purple-700 to-pink-500 text-white text-lg font-bold px-10 py-4 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Saída Rápida
          </button>
        </section>

        {/* MENSAGEM FINAL */}
        <footer className="text-center py-16 px-8 bg-white/70 backdrop-blur-sm rounded-t-3xl">
          <h2 className="text-3xl font-bold mb-4 text-purple-800">
            Você é forte, e sua vida importa. 💜
          </h2>
          <p className="text-purple-700 max-w-2xl mx-auto leading-relaxed">
            Nenhuma mulher deve viver com medo. Há uma rede inteira pronta para
            te acolher e caminhar ao seu lado. Buscar ajuda é um ato de amor e
            coragem.
          </p>
        </footer>
      </div>
    </>
  );
}
