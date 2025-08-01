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

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path="/" element={<Home />} />
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
      </Routes>
    </Router>
  );
}

export default App;
