<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrecisoDeAjuda from "./pages/Login.jsx";
import MapaDeApoio from "./pages/MapaDeApoio";
import TesteDeRisco from "./pages/TesteDeRisco";
import EntendaAViolencia from "./pages/EntendaAViolencia";
import FaleComAlguem from "./pages/FaleComAlguem";
import Sobre from "./pages/Sobre";
import Login from "./pages/Login";

export default function App() {
=======
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./pages/home";
import Login from "./pages/loginPage";
import Sobre from "./pages/sobre";
import CentralDeAjuda from "./pages/centralDeAjuda";
import Register from "./pages/registerPage";
import MotoristaPage from "./pages/motoristaPage";
import RegistermotoPage from "./pages/registermotoPage";
import ContactPage from "./pages/contactPage";
import Registrocarro from "./components/registrocarro";
import LoginMotoPage from "./pages/loginMotoPage";
import Profile from "./pages/profile";
import PerfilMotorista from "./components/profileMotorista";



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Mantém estado logado mesmo após reload da página
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) setIsLoggedIn(true);
  }, []);

>>>>>>> 5fd61a78676dd7b294d1be40fb5db72c7686ed6c
  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/preciso-de-ajuda" element={<PrecisoDeAjuda />} />
        <Route path="/mapa-de-apoio" element={<MapaDeApoio />} />
        <Route path="/teste-de-risco" element={<TesteDeRisco />} />
        <Route path="/entenda-a-violencia" element={<EntendaAViolencia />} />
        <Route path="/fale-com-alguem" element={<FaleComAlguem />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/login" element={<Login />} />
=======
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/about" element={<Sobre />} />
        <Route path="/help" element={<CentralDeAjuda />} />
        <Route path="/register" element={<Register />} />
        <Route path="/motorista" element={<MotoristaPage />} />
        <Route path="/registermoto" element={<RegistermotoPage />} />
        <Route path="/contactPage" element={<ContactPage />} />
        <Route path="/registrocarro" element={<Registrocarro />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profileMotorista" element={<PerfilMotorista/>} />
        <Route path="/loginmoto" element={<LoginMotoPage setIsLoggedIn={setIsLoggedIn} />} />
>>>>>>> 5fd61a78676dd7b294d1be40fb5db72c7686ed6c
      </Routes>
    </Router>
  );
}
<<<<<<< HEAD
=======

export default App;
>>>>>>> 5fd61a78676dd7b294d1be40fb5db72c7686ed6c
