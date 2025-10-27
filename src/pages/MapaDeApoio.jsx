import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Navbar from "../components/navbar";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
 
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
 
const locaisApoio = [
  {
    nome: "Delegacia Regional de Polícia Civil",
    endereco: "Rua Silvestre Ferraz, 226 – Centro",
    telefone: "(35) 3422-2244",
    horario: "08:00 - 18:00",
    coords: [-22.2304, -45.9376],
    descricao: "Atendimento a ocorrências e emissão de documentos.",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  },
  {
    nome: "Hospital das Clínicas Samuel Libânio",
    endereco: "Rua Comendador José García, 777 – Centro",
    telefone: "(35) 3429-3200",
    horario: "24 horas",
    coords: [-22.2320, -45.9000],
    descricao: "Atendimento de urgência e emergência.",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  },
  {
    nome: "Delegacia da Polícia Rodoviária Federal",
    endereco: "Rua Cel. Joaquim Roberto Duarte, 528 – Bairro Nossa Senhora Aparecida",
    telefone: "(35) 3064-5433",
    horario: "08:00 - 12:00 / 13:00 - 17:00",
    descricao: "Policiamento das rodovias federais.",
    coords: [-22.2350, -45.9400],
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  },
  {
    nome: "Hospital Alzira Velano",
    endereco: "Av. Pref. Armando Salles de Oliveira, 700 – Centro",
    telefone: "(35) 3421-9000",
    horario: "24 horas",
    descricao: "Atendimento hospitalar completo.",
    coords: [-22.2335, -45.9300],
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  },
  {
    nome: "Centro de Atendimento à Mulher",
    endereco: "Rua Professor José Garcia, 1020 – Centro",
    telefone: "(35) 3422-3344",
    horario: "08:00 - 18:00",
    descricao: "Apoio e atendimento especializado para mulheres.",
    coords: [-22.2310, -45.9350],
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  },
];
 
// Função para criar ícones personalizados
const createIcon = (url) =>
  L.icon({
    iconUrl: url,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });
 
export default function MapaDeApoio() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-purple-50 via-purple-100 to-white pt-28 px-6 lg:px-24">
       
        {/* Frase acolhedora com animação */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-center text-purple-900 mb-4 tracking-wide"
        >
          Mapa de Apoio
        </motion.h1>
        <p className="text-center text-purple-600 mb-10 font-medium text-lg">
          Você não está sozinha. Este mapa existe para guiar você até ajuda e acolhimento.
        </p>
 
        <div className="flex flex-col lg:flex-row justify-center items-start gap-10">
         
          {/* Carrossel Swiper com animação */}
          <div className="w-full max-w-md">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              modules={[Pagination]}
            >
              {locaisApoio.map((local, idx) => (
                <SwiperSlide key={idx}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-2xl w-full p-6 border border-purple-200"
                  >
                    <h2 className="text-2xl font-semibold text-purple-800 mb-2 flex items-center gap-2">
                      <FaHeart className="text-purple-500" /> {local.nome}
                    </h2>
                    <p className="text-purple-700 mb-1">{local.endereco}</p>
                    <p className="text-purple-700 mb-1">Horário: {local.horario}</p>
                    <p className="text-purple-700 mb-3">{local.descricao}</p>
 
                    <div className="flex flex-col gap-3">
                      <a
                        href={`tel:${local.telefone.replace(/\D/g, "")}`}
                        className="w-full bg-purple-600 hover:bg-purple-700 transition text-white font-bold py-3 rounded-full text-center shadow-lg"
                      >
                        Ligar Agora
                      </a>
 
                          <a
                      href={`https://www.google.com/maps/dir/?api=1&origin=Senac+Pouso+AlegrE+Rua+Vicente+de+Simões+Pouso+Alegre+MG&destination=${local.coords[0]},${local.coords[1]}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-purple-300 hover:bg-purple-400 transition text-purple-900 font-bold py-3 rounded-full text-center shadow-md"
                    >
                      Ver rota no Google Maps
                    </a>
 
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
 
          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-lg h-[600px] rounded-2xl shadow-xl border border-purple-300 overflow-hidden"
          >
            <MapContainer
              center={locaisApoio[0].coords}
              zoom={15}
              scrollWheelZoom={true}
              className="h-full w-full"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {locaisApoio.map((local, idx) => (
                <Marker
                  key={idx}
                  position={local.coords}
                  icon={createIcon(local.iconUrl)}
                >
                  <Popup>
                    <strong>{local.nome}</strong><br />
                    {local.endereco}<br />
                    {local.telefone}<br />
                    {local.horario}<br />
                    {local.descricao}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </motion.div>
        </div>
      </div>
    </>
  );
}