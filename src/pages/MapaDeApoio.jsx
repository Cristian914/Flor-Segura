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
  FaExclamationTriangle,
  FaEye,
  FaMoon,
  FaRunning,
  FaPlus,
  FaEyeSlash,
  FaShieldAlt,
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

// ⚠️ Tipos de perigo
const TIPOS_PERIGO = {
  assedio: {
    nome: "Assédio",
    cor: "#dc2626",
    emoji: "⚠️"
  },
  suspeitos: {
    nome: "Pessoas Suspeitas",
    cor: "#ea580c",
    emoji: "👁️"
  },
  mal_iluminado: {
    nome: "Local Mal Iluminado",
    cor: "#ca8a04",
    emoji: "🌙"
  },
  perseguicao: {
    nome: "Perseguição",
    cor: "#b91c1c",
    emoji: "🏃♀️"
  }
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
const createIcon = (url, size = [42, 42]) =>
  L.icon({
    iconUrl: url,
    iconSize: size,
    iconAnchor: [size[0]/2, size[1]],
    popupAnchor: [0, -size[1] + 10],
  });

// 🚨 Criar ícone de perigo
const createDangerIcon = (tipo) => {
  const config = TIPOS_PERIGO[tipo];
  return L.divIcon({
    html: `<div style="background-color: ${config.cor}; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3); font-size: 14px;">${config.emoji}</div>`,
    className: 'custom-danger-icon',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15]
  });
};

// 🗺️ Componente para capturar cliques no mapa
function MapClickHandler({ onMapClick, modoMarcacao }) {
  const map = useMap();

  useEffect(() => {
    if (!modoMarcacao) return;

    const handleClick = (e) => {
      onMapClick(e.latlng);
    };

    map.on('click', handleClick);
    map.getContainer().style.cursor = modoMarcacao ? 'crosshair' : '';

    return () => {
      map.off('click', handleClick);
      map.getContainer().style.cursor = '';
    };
  }, [map, onMapClick, modoMarcacao]);

  return null;
}

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
  
  // 🚨 Estados para locais perigosos
  const [locaisPerigosos, setLocaisPerigosos] = useState([]);
  const [modoMarcacao, setModoMarcacao] = useState(false);
  const [mostrarPerigos, setMostrarPerigos] = useState(true);
  const [modalPerigo, setModalPerigo] = useState(null);

  const locaisFiltrados =
    filtro === "Todos"
      ? locaisApoio
      : locaisApoio.filter((local) => local.categoria === filtro);

  // 📍 Obtém localização do usuário
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setUserLocation({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
          console.log('📍 Localização obtida:', pos.coords.latitude, pos.coords.longitude);
        },
        (err) => {
          console.warn("Erro ao obter localização:", err);
          // Usar localização padrão (Pouso Alegre) se não conseguir obter
          setUserLocation({
            lat: -22.2304,
            lng: -45.9376
          });
          console.log('📍 Usando localização padrão: Pouso Alegre');
        }
      );
    } else {
      // Fallback se geolocalização não estiver disponível
      setUserLocation({
        lat: -22.2304,
        lng: -45.9376
      });
      console.log('📍 Geolocalização não disponível, usando Pouso Alegre');
    }
  }, []);

  // 🔑 Obter token de autenticação
  const getAuthToken = () => {
    let token = localStorage.getItem('token');
    
    // Se não tem token, criar um temporário para teste
    if (!token) {
      // Token JWT temporário válido (decodifica para: {"userId": "temp-user", "iat": timestamp})
      token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ0ZW1wLXVzZXIiLCJpYXQiOjE3MzM0MDAwMDB9.placeholder';
      localStorage.setItem('token', token);
      console.log('🔑 Token temporário criado para teste');
    }
    
    return token;
  };

  // 🌐 Carregar locais perigosos da API
  const carregarLocaisPerigosos = async () => {
    if (!userLocation) {
      console.log('📍 Aguardando localização do usuário...');
      return;
    }
    
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
    const url = `${API_URL}/api/locais-perigosos?latitude=${userLocation.lat}&longitude=${userLocation.lng}&raio=5`;
    console.log('🌐 Carregando locais perigosos:', url);
    
    try {
      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${getAuthToken()}`,
          'Content-Type': 'application/json'
        }
      });
      console.log('📡 Response status:', response.status);
      
      if (response.ok) {
        const data = await response.json();
        console.log('📊 Dados recebidos:', data);
        
        // Verificar se data é array ou objeto
        let locaisArray = [];
        if (Array.isArray(data)) {
          locaisArray = data;
        } else if (data && typeof data === 'object') {
          // Se for objeto, pode ter uma propriedade com o array
          locaisArray = data.locais || data.data || [];
        }
        
        const locaisFormatados = locaisArray.map(local => ({
          id: local.id,
          coords: [local.latitude, local.longitude],
          tipo: local.tipo,
          descricao: local.descricao,
          dataHora: local.data_ocorrencia,
          validacoes: local.validacoes
        }));
        setLocaisPerigosos(locaisFormatados);
        console.log('✅ Locais carregados:', locaisFormatados.length);
      } else {
        const errorText = await response.text();
        console.error('❌ Erro na resposta:', response.status, errorText);
      }
    } catch (error) {
      console.warn('⚠️ Erro ao carregar locais perigosos:', error);
      // Fallback para localStorage
      const saved = localStorage.getItem('locaisPerigosos');
      if (saved) {
        const parsed = JSON.parse(saved);
        setLocaisPerigosos(parsed);
        console.log('💾 Usando localStorage:', parsed.length, 'locais');
      }
    }
  };

  useEffect(() => {
    carregarLocaisPerigosos();
  }, [userLocation]);

  // 🎯 Capturar clique no mapa
  const handleMapClick = (latlng) => {
    if (modoMarcacao) {
      setModalPerigo({
        coords: [latlng.lat, latlng.lng],
        tipo: null,
        descricao: ''
      });
      setModoMarcacao(false);
    }
  };

  // ✅ Salvar local perigoso na API
  const salvarLocalPerigoso = async (dados) => {
    const payload = {
      latitude: dados.coords[0],
      longitude: dados.coords[1],
      tipo: dados.tipo,
      descricao: dados.descricao,
      data_ocorrencia: new Date().toISOString()
    };
    
    console.log('💾 Salvando local perigoso:', payload);
    
    try {
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';
      const response = await fetch(`${API_URL}/api/locais-perigosos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getAuthToken()}`
        },
        body: JSON.stringify(payload)
      });
      
      console.log('📡 Response status (POST):', response.status);

      if (response.ok) {
        const result = await response.json();
        console.log('✅ Local salvo com sucesso:', result);
        // Aguardar um pouco antes de recarregar para garantir que foi salvo
        setTimeout(() => {
          carregarLocaisPerigosos();
        }, 500);
        setModalPerigo(null);
      } else {
        const errorText = await response.text();
        console.error('❌ Erro ao salvar:', response.status, errorText);
        
        // Se for erro 409 (local muito próximo), mostrar mensagem amigável
        if (response.status === 409) {
          alert('⚠️ Já existe uma marcação muito próxima a este local. Tente marcar em outro lugar.');
          setModalPerigo(null);
          return;
        }
        
        throw new Error(`Erro ${response.status}: ${errorText}`);
      }
    } catch (error) {
      console.error('⚠️ Erro ao salvar local perigoso:', error);
      // Fallback para localStorage
      const novoLocal = {
        id: Date.now(),
        coords: dados.coords,
        tipo: dados.tipo,
        descricao: dados.descricao,
        dataHora: new Date().toISOString(),
        validacoes: 1
      };
      
      const novosLocais = [...locaisPerigosos, novoLocal];
      setLocaisPerigosos(novosLocais);
      localStorage.setItem('locaisPerigosos', JSON.stringify(novosLocais));
      setModalPerigo(null);
      console.log('💾 Salvo no localStorage como fallback');
    }
  };

  // 👍 Validar local perigoso
  const validarLocal = async (id) => {
    try {
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';
      const response = await fetch(`${API_URL}/api/locais-perigosos/${id}/validar`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${getAuthToken()}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        console.log('✅ Local validado com sucesso');
        carregarLocaisPerigosos();
      } else if (response.status === 409) {
        alert('⚠️ Você já validou este local anteriormente!');
      } else {
        console.error('❌ Erro ao validar local:', response.status);
        alert('❌ Erro ao validar local. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao validar local:', error);
      alert('❌ Erro de conexão. Verifique sua internet.');
    }
  };

  // 🗑️ Remover local perigoso
  const removerLocal = async (id) => {
    if (!confirm('⚠️ Tem certeza que deseja remover esta marcação?')) {
      return;
    }
    
    try {
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';
      const response = await fetch(`${API_URL}/api/locais-perigosos/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${getAuthToken()}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        console.log('✅ Local removido com sucesso');
        alert('✅ Marcação removida com sucesso!');
        carregarLocaisPerigosos();
      } else if (response.status === 403) {
        alert('🚫 Apenas quem criou a marcação pode removê-la!');
      } else if (response.status === 404) {
        alert('❌ Marcação não encontrada.');
      } else {
        console.error('❌ Erro ao remover local:', response.status);
        alert('❌ Erro ao remover marcação. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao remover local:', error);
      alert('❌ Erro de conexão. Verifique sua internet.');
    }
  };

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

            {/* Status de Autenticação */}
            <div className="text-center mb-4 p-3 bg-blue-50 border border-blue-200 rounded-xl">
              <p className="text-blue-700 text-sm">
                🔑 Token ativo | 📍 Localização: {userLocation ? `${userLocation.lat.toFixed(4)}, ${userLocation.lng.toFixed(4)}` : 'Carregando...'} | 🚨 Perigos: {locaisPerigosos.length}
              </p>
            </div>

            {/* Controles de Segurança */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <button
                onClick={() => setModoMarcacao(!modoMarcacao)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold border-2 transition-all ${
                  modoMarcacao
                    ? "bg-red-500 text-white border-red-600 shadow-lg"
                    : "bg-white text-red-600 border-red-300 hover:bg-red-50"
                }`}
              >
                <FaPlus /> {modoMarcacao ? "Cancelar Marcação" : "Marcar Local Perigoso"}
              </button>
              
              <button
                onClick={() => setMostrarPerigos(!mostrarPerigos)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold border-2 transition-all ${
                  mostrarPerigos
                    ? "bg-orange-500 text-white border-orange-600"
                    : "bg-white text-orange-600 border-orange-300 hover:bg-orange-50"
                }`}
              >
                {mostrarPerigos ? <FaEye /> : <FaEyeSlash />}
                {mostrarPerigos ? "Ocultar Perigos" : "Mostrar Perigos"}
              </button>
              
              <button
                onClick={carregarLocaisPerigosos}
                className="flex items-center gap-2 px-5 py-3 rounded-full font-semibold border-2 bg-white text-blue-600 border-blue-300 hover:bg-blue-50 transition-all"
              >
                <FaMap /> Atualizar Mapa
              </button>
            </div>

            {modoMarcacao && (
              <div className="text-center mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                <p className="text-red-700 font-medium">
                  🎯 Clique no mapa para marcar um local perigoso
                </p>
              </div>
            )}

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
                  ? "fixed top-0 left-0 w-screen h-screen z-[9998]"
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

              {/* Marcadores de locais perigosos */}
              {mostrarPerigos && locaisPerigosos.map((local) => (
                <Marker
                  key={local.id}
                  position={local.coords}
                  icon={createDangerIcon(local.tipo)}
                >
                  <Popup>
                    <div className="p-2">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">{TIPOS_PERIGO[local.tipo].emoji}</span>
                        <strong className="text-red-700">{TIPOS_PERIGO[local.tipo].nome}</strong>
                      </div>
                      {local.descricao && (
                        <p className="text-sm text-gray-600 mb-2">{local.descricao}</p>
                      )}
                      <div className="text-xs text-gray-500 mb-2">
                        {new Date(local.dataHora).toLocaleString('pt-BR')}
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-green-600">
                          ✓ {local.validacoes} validações
                        </span>
                        <button
                          onClick={() => validarLocal(local.id)}
                          className="text-xs bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 transition"
                          title="Confirmar que este local é realmente perigoso"
                        >
                          👍 Confirmar
                        </button>
                      </div>
                      <div className="flex justify-center">
                        <button
                          onClick={() => removerLocal(local.id)}
                          className="text-xs bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition flex items-center gap-1"
                          title="Remover esta marcação (apenas quem criou)"
                        >
                          🗑️ Remover
                        </button>
                      </div>
                      <div className="text-xs text-gray-500 mt-1 text-center">
                        📝 ID: {local.id} | 🕰️ {new Date(local.dataHora).toLocaleDateString('pt-BR')}
                      </div>
                    </div>
                  </Popup>
                </Marker>
              ))}

              <MapClickHandler onMapClick={handleMapClick} modoMarcacao={modoMarcacao} />

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

        {/* Modal para marcar local perigoso */}
        {modalPerigo && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[10000] p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-red-700 mb-4 text-center">
                ⚠️ Marcar Local Perigoso
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de perigo:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(TIPOS_PERIGO).map(([key, config]) => (
                      <button
                        key={key}
                        onClick={() => setModalPerigo({...modalPerigo, tipo: key})}
                        className={`p-3 rounded-xl border-2 transition-all text-left ${
                          modalPerigo.tipo === key
                            ? "border-red-400 bg-red-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{config.emoji}</span>
                          <span className="text-sm font-medium">{config.nome}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Descrição (opcional):
                  </label>
                  <textarea
                    value={modalPerigo.descricao}
                    onChange={(e) => setModalPerigo({...modalPerigo, descricao: e.target.value})}
                    placeholder="Descreva o que aconteceu..."
                    className="w-full p-3 border border-gray-300 rounded-xl resize-none h-20"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setModalPerigo(null)}
                    className="flex-1 py-3 px-4 bg-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-300 transition"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={() => modalPerigo.tipo && salvarLocalPerigoso(modalPerigo)}
                    disabled={!modalPerigo.tipo}
                    className="flex-1 py-3 px-4 bg-red-500 text-white rounded-xl font-medium hover:bg-red-600 transition disabled:opacity-50"
                  >
                    Marcar Local
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </>
  );
}