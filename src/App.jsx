import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext"; // ⬅️ CONTEXTO GLOBAL

import Home from "./pages/Home";
import PrecisoDeAjuda from "./pages/PrecisoDeAjuda.jsx";
import MapaDeApoio from "./pages/MapaDeApoio";
import EntendaAViolencia from "./pages/EntendaAViolencia";
import RedeDeApoio from "./pages/RedeDeApoio";
import Sobre from "./pages/Sobre1";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MeuEspacoSeguro from "./pages/MeuEspacoSeguro";
import AssistenteVirtual from "./pages/AssistenteVirtual";

// 🟣 Páginas públicas novas
import Publico from "./pages/Publico";
import PublicoNota from "./pages/PublicoNota";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Páginas principais */}
          <Route path="/" element={<Home />} />
          <Route path="/preciso-de-ajuda" element={<PrecisoDeAjuda />} />
          <Route path="/mapa-de-apoio" element={<MapaDeApoio />} />
          <Route path="/entenda-a-violencia" element={<EntendaAViolencia />} />
          <Route path="/rede-de-apoio" element={<RedeDeApoio />} />
          <Route path="/meu-espaco-seguro" element={<MeuEspacoSeguro />} />
          <Route path="/assistente" element={<AssistenteVirtual />} />

          {/* Público (Mural + Comentários) */}
          <Route path="/publico" element={<Publico />} />
          <Route path="/publico/:id" element={<PublicoNota />} />

          {/* Autenticação */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Sobre */}
          <Route path="/sobre" element={<Sobre />} />

          {/* 4004 */}
          <Route
            path="*"
            element={
              <div className="text-center py-20 text-purple-700">
                <h1 className="text-4xl font-bold">404</h1>
                <p className="text-lg mt-2">Página não encontrada 💜</p>
              </div>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
