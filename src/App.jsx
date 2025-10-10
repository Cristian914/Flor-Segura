import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrecisoDeAjuda from "./pages/PrecisoDeAjuda.jsx";
import MapaDeApoio from "./pages/MapaDeApoio";
import TesteDeRisco from "./pages/TesteDeRisco";
import EntendaAViolencia from "./pages/EntendaAViolencia";
import RedeDeApoio from "./pages/RedeDeApoio";
import Sobre from "./pages/Sobre";
import Login from "./pages/Login";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/preciso-de-ajuda" element={<PrecisoDeAjuda />} />
        <Route path="/mapa-de-apoio" element={<MapaDeApoio />} />
        <Route path="/teste-de-risco" element={<TesteDeRisco />} />
        <Route path="/entenda-a-violencia" element={<EntendaAViolencia />} />
        <Route path="/fale-com-alguem" element={<RedeDeApoio />} />
        <Route path="/rede-de-apoio" element={<RedeDeApoio />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
