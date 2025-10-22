import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Navbar from "../components/navbar"; // ajuste conforme sua pasta

const locaisApoio = [
  {
    nome: "Centro de apoio psicológico",
    endereco: "Rua das Flores, 123",
    telefone: "(11) 12345-6789",
    horario: "8:00 - 19:30",
    coords: [-22.2304, -45.9376],
  },
  // você pode adicionar mais locais aqui depois
];

const customIcon = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/854/854878.png",
  iconSize: [38, 38],
});

export default function MapaDeApoio() {
  const local = locaisApoio[0];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white pt-28 px-6 lg:px-24">
        <h1 className="text-4xl font-extrabold text-center text-purple-900 mb-12 tracking-wide">
          Mapa de Apoio
        </h1>

        <div className="flex flex-col lg:flex-row justify-center items-start gap-10">
          {/* Card */}
          <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-2xl max-w-md w-full p-8 border border-purple-200 transition-transform hover:scale-105">
            <h2 className="text-3xl font-semibold text-purple-800 mb-4">{local.nome}</h2>
            <p className="text-purple-700 text-lg mb-2">{local.endereco}</p>

            <div className="flex items-center gap-3 text-purple-600 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5h2l3.6 7.59-1.35 2.44a11.046 11.046 0 005.1 5.1l2.44-1.35L19 19v2a2 2 0 01-2 2h-1C7.373 21 3 16.627 3 11V6a1 1 0 011-1z"
                />
              </svg>
              <p className="text-md font-medium">{local.telefone}</p>
            </div>

            <p className="text-purple-700 font-medium mb-1">Horário de funcionamento:</p>
            <p className="text-purple-800 font-semibold mb-6">{local.horario}</p>

            <a
              href={`tel:${local.telefone.replace(/\D/g, "")}`}
              className="inline-block w-full bg-gradient-to-r from-purple-700 to-purple-900 hover:from-purple-900 hover:to-purple-700 transition-colors text-white font-bold py-3 rounded-full text-center shadow-lg shadow-purple-300/40"
            >
              Ligar Agora
            </a>
          </div>

          {/* Mapa */}
          <div className="w-full max-w-lg h-[480px] rounded-3xl shadow-xl border border-purple-300 overflow-hidden transition-transform hover:scale-105">
            <MapContainer center={local.coords} zoom={15} scrollWheelZoom={true} className="h-full w-full">
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {locaisApoio.map((localItem, idx) => (
                <Marker key={idx} position={localItem.coords} icon={customIcon}>
                  <Popup>
                    <strong>{localItem.nome}</strong>
                    <br />
                    {localItem.endereco}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </>
  );
}
