import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import PrecisoDeAjuda from "./pages/PrecisoDeAjuda.jsx";
import MapaDeApoio from "./pages/MapaDeApoio";
import TesteDeRisco from "./pages/TesteDeRisco";
import EntendaAViolencia from "./pages/EntendaAViolencia";
import RedeDeApoio from "./pages/RedeDeApoio";
import Sobre from "./pages/Sobre";
import Login from "./pages/Login";
import Register from "./pages/Register";  // Importando Register
import Inicio from "./pages/Inicio";
import TestePerguntas from "./pages/TestePerguntas";
import ResultadoTeste from "./pages/ResultadoTeste"

function App() {
  return (
    <Router>
      <Routes>
        {/* Página inicial */}
        <Route path="/" element={<Inicio />} />
 
        {/* Páginas principais */}
        <Route path="/home" element={<Home />} />
        <Route path="/preciso-de-ajuda" element={<PrecisoDeAjuda />} />
        <Route path="/mapa-de-apoio" element={<MapaDeApoio />} />
        <Route path="/teste-de-risco" element={<TesteDeRisco />} />
        <Route path="/entenda-a-violencia" element={<EntendaAViolencia />} />
        <Route path="/rede-de-apoio" element={<RedeDeApoio />} />
        <Route path="/teste-de-risco/perguntas" element={<TestePerguntas />} />
        <Route path="/teste-de-risco/resultado" element={<ResultadoTeste />} />


        {/* Autenticação */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> {/* Rota do registro */}
 
        {/* Outras páginas */}
        <Route path="/sobre" element={<Sobre />} />
 
        {/* Página 404 */}
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
  );
}
 
export default App;
 
 