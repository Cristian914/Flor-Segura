import { useState } from "react";
import { Link } from "react-router-dom"; // se estiver usando react-router
import { FaUser } from "react-icons/fa"; // ícone de usuário
import Logo from "../assets/imagens/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-purple-700 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={Logo} alt="Logo" className="h-28 w-auto" />
            </Link>
          </div>

          {/* Menu desktop */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-gray-200">Home</Link>
            <Link to="/preciso-de-ajuda" className="hover:text-gray-200">Preciso de Ajuda</Link>
            <Link to="/mapa-de-apoio" className="hover:text-gray-200">Mapa de Apoio</Link>
            <Link to="/teste-de-risco" className="hover:text-gray-200">Teste de risco</Link>
            <Link to="/entenda-a-violencia" className="hover:text-gray-200">Entenda a Violência</Link>
            <Link to="/fale-com-alguem" className="hover:text-gray-200">Fale com Alguém</Link>
            <Link to="/sobre" className="hover:text-gray-200">Sobre</Link>
          </div>

          {/* Ícone usuário e botão mobile */}
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-white hover:text-gray-200">
              <FaUser size={24} />
            </Link>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-gray-200 focus:outline-none"
              >
                {isOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-purple-700 shadow-md">
          <Link to="/" className="block px-4 py-2 hover:bg-purple-800">Home</Link>
          <Link to="/preciso-de-ajuda" className="block px-4 py-2 hover:bg-purple-800">Preciso de Ajuda</Link>
          <Link to="/mapa-de-apoio" className="block px-4 py-2 hover:bg-purple-800">Mapa de Apoio</Link>
          <Link to="/teste-de-risco" className="block px-4 py-2 hover:bg-purple-800">Teste de risco</Link>
          <Link to="/entenda-a-violencia" className="block px-4 py-2 hover:bg-purple-800">Entenda a Violência</Link>
          <Link to="/fale-com-alguem" className="block px-4 py-2 hover:bg-purple-800">Fale com Alguém</Link>
          <Link to="/sobre" className="block px-4 py-2 hover:bg-purple-800">Sobre</Link>
        </div>
      )}
    </nav>
  );
}
