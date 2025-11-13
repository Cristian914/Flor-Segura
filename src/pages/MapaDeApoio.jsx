import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import L from "leaflet";
import "leaflet-routing-machine";
import Navbar from "../components/navbar";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaMapMarkerAlt,
  FaClock,
  FaPhoneAlt,
  FaFilter,
  FaMap,
  FaTimes,
  FaExpand,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// 🔧 Ícones fixos
const ICONS = {
  delegacia: "https://cdn-icons-png.flaticon.com/512/456/456212.png",
  hospital: "https://cdn-icons-png.flaticon.com/512/2966/2966327.png",
  mulher: "https://cdn-icons-png.flaticon.com/512/3448/3448591.png",
  user: "https://cdn-icons-png.flaticon.com/512/64/64113.png",
};

// 📍 Locais de apoio
const locaisApoio = [
  {
    nome: "Delegacia Regional de Polícia Civil",
    endereco: "Rua Silvestre Ferraz, 226 – Centro",
    telefone: "(35) 3422-2244",
    horario: "08:00 - 18:00",
    coords: [-22.2304, -45.9376],
    descricao: "Atendimento a ocorrências e emissão de documentos.",
    categoria: "Delegacia",
    iconUrl: ICONS.delegacia,
  },
  {
    nome: "Hospital das Clínicas Samuel Libânio",
    endereco: "Rua Comendador José Garcia, 777 – Centro",
    telefone: "(35) 3429-3200",
    horario: "24 horas",
    coords: [-22.2322, -45.9015],
    descricao: "Atendimento de urgência e emergência.",
    categoria: "Hospital",
    iconUrl: ICONS.hospital,
  },
  {
    nome: "Delegacia da Polícia Rodoviária Federal",
    endereco:
      "Rua Cel. Joaquim Roberto Duarte, 528 – Bairro Nossa Senhora Aparecida",
    telefone: "(35) 3064-5433",
    horario: "08:00 - 12:00 / 13:00 - 17:00",
    descricao: "Policiamento e atendimento em rodovias federais.",
    categoria: "Delegacia",
    iconUrl: ICONS.delegacia,
    coords: [-22.2451, -45.9383],
  },
  {
    nome: "Hospital Alzira Velano",
    endereco: "Av. Pref. Armando Salles de Oliveira, 700 – Centro",
    telefone: "(35) 3421-9000",
    horario: "24 horas",
    descricao: "Atendimento hospitalar completo.",
    categoria: "Hospital",
    iconUrl: ICONS.hospital,
    coords: [-22.2343, -45.9341],
  },
  {
    nome: "Centro de Atendimento à Mulher",
    endereco: "Rua Professor José Garcia, 1020 – Centro",
    telefone: "(35) 3422-3344",
    horario: "08:00 - 18:00",
    descricao: "Apoio e atendimento especializado para mulheres.",
    categoria: "Centro de Apoio",
    iconUrl: ICONS.mulher,
    coords: [-22.2315, -45.9352],
  },
];

// 🧭 Função para criar ícones personalizados
const createIcon = (url) =>
  L.icon({
    iconUrl: url,
    iconSize: [42, 42],
    iconAnchor: [21, 42],
    popupAnchor: [0, -40],
  });

// 🚗 Componente de rota
function Routing({ userLocation, destino }) {
  const map = useMap();

  useEffect(() => {
    if (!userLocation || !destino) return;

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(userLocation.lat, userLocation.lng),
        L.latLng(destino[0], destino[1]),
      ],
      lineOptions: {
        styles: [{ color: "#8e24aa", weight: 5 }],
      },
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: true,
      showAlternatives: false,
      createMarker: () => null,
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [userLocation, destino, map]);

  return null;
}

export default function MapaDeApoio() {
  const [filtro, setFiltro] = useState("Todos");
  const [userLocation, setUserLocation] = useState(null);
  const [destino, setDestino] = useState(null);
  const [telaCheia, setTelaCheia] = useState(false);
  const mapRef = useRef();

  const locaisFiltrados =
    filtro === "Todos"
      ? locaisApoio
      : locaisApoio.filter((local) => local.categoria === filtro);

  // 📍 Obtém localização do usuário
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) =>
          setUserLocation({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          }),
        (err) => console.warn("Erro ao obter localização:", err)
      );
    }
  }, []);

  // 🧹 Limpar rota
  const limparRota = () => setDestino(null);

  return (
    <>
      <Navbar />
      <div
        className={`min-h-screen bg-gradient-to-b from-purple-50 via-purple-100 to-white pt-28 px-6 lg:px-24 transition-all ${
          telaCheia ? "fixed inset-0 z-50 bg-white pt-4 px-4" : ""
        }`}
      >
        {/* Cabeçalho */}
        {!telaCheia && (
          <>
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-extrabold text-center text-purple-900 mb-4"
            >
              Mapa de Apoio
            </motion.h1>
            <p className="text-center text-purple-700 mb-10 text-lg font-medium">
              Você não está sozinha. Encontre ajuda e acolhimento próximos de você 💜
            </p>

            {/* Filtros */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["Todos", "Delegacia", "Hospital", "Centro de Apoio"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFiltro(cat)}
                  className={`flex items-center gap-2 px-5 py-2 rounded-full font-semibold border transition-all ${
                    filtro === cat
                      ? "bg-purple-600 text-white border-purple-700"
                      : "bg-white text-purple-700 border-purple-300 hover:bg-purple-100"
                  }`}
                >
                  <FaFilter /> {cat}
                </button>
              ))}
            </div>
          </>
        )}

        <div
          className={`flex flex-col lg:flex-row justify-center items-start gap-10 ${
            telaCheia ? "flex-col" : ""
          }`}
        >
          {!telaCheia && (
            <div className="w-full max-w-md">
              <Swiper
                spaceBetween={25}
                slidesPerView={1}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="pb-8"
              >
                {locaisFiltrados.map((local, idx) => (
                  <SwiperSlide key={idx}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-3xl border border-purple-200 p-6"
                    >
                      <h2 className="text-2xl font-semibold text-purple-800 mb-3 flex items-center gap-2">
                        <FaHeart className="text-purple-500" /> {local.nome}
                      </h2>

                      <div className="space-y-2 text-purple-700">
                        <p className="flex items-center gap-2">
                          <FaMapMarkerAlt className="text-purple-400" />{" "}
                          {local.endereco}
                        </p>
                        <p className="flex items-center gap-2">
                          <FaClock className="text-purple-400" /> {local.horario}
                        </p>
                        <p>{local.descricao}</p>
                      </div>

                      <div className="flex flex-col gap-3 mt-5">
                        <a
                          href={`tel:${local.telefone.replace(/\D/g, "")}`}
                          className="w-full bg-purple-600 hover:bg-purple-700 transition text-white font-bold py-3 rounded-full text-center flex items-center justify-center gap-2"
                        >
                          <FaPhoneAlt /> Ligar Agora
                        </a>

                        <button
                          onClick={() => setDestino(local.coords)}
                          className="w-full bg-purple-200 hover:bg-purple-300 transition text-purple-900 font-bold py-3 rounded-full"
                        >
                          Traçar rota aqui
                        </button>

                        <a
                          href={`https://www.google.com/maps/dir/?api=1&destination=${local.coords[0]},${local.coords[1]}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-purple-500 hover:bg-purple-600 transition text-white font-bold py-3 rounded-full text-center"
                        >
                          Ver rota no Google Maps
                        </a>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}

          {/* Mapa */}
          <motion.div
              className={`relative ${
                telaCheia
                  ? "fixed top-0 left-0 w-screen h-screen z-[9998]" // tela cheia real
                  : "w-full max-w-5xl h-[700px]"
              } rounded-3xl shadow-lg border border-purple-300 overflow-hidden bg-white`}
            >
            <MapContainer
              ref={mapRef}
              center={[-22.231, -45.935]}
              zoom={14}
              scrollWheelZoom={true}
              className="h-full w-full"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {userLocation && (
                <Marker
                  position={[userLocation.lat, userLocation.lng]}
                  icon={createIcon(ICONS.user)}
                >
                  <Popup>Você está aqui 💜</Popup>
                </Marker>
              )}

              {locaisFiltrados.map((local, idx) => (
                <Marker
                  key={idx}
                  position={local.coords}
                  icon={createIcon(local.iconUrl)}
                >
                  <Popup>
                    <strong>{local.nome}</strong>
                    <br />
                    {local.endereco}
                    <br />
                    {local.telefone}
                    <br />
                    {local.horario}
                    <br />
                    {local.descricao}
                  </Popup>
                </Marker>
              ))}

              {userLocation && destino && (
                <Routing userLocation={userLocation} destino={destino} />
              )}
            </MapContainer>

                    {/* Botões flutuantes */}
          <div className="absolute top-4 right-4 flex flex-col gap-3 z-[9999]">
            <button
              onClick={limparRota}
              className="bg-white border-2 border-purple-400 text-purple-700 p-3 rounded-full shadow-md hover:bg-purple-100 transition-all duration-200"
              title="Limpar rota"
            >
              <FaTimes size={18} />
            </button>
            <button
              onClick={() => setTelaCheia(!telaCheia)}
              className="bg-white border-2 border-purple-400 text-purple-700 p-3 rounded-full shadow-md hover:bg-purple-100 transition-all duration-200"
              title="Tela cheia"
            >
              <FaExpand size={18} />
            </button>
          </div>

          </motion.div>
        </div>
      </div>
    </>
  );
}
