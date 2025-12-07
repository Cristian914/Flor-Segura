import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import Logo from "../assets/imagens/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/preciso-de-ajuda", label: "Preciso de Ajuda" },
    { path: "/mapa-de-apoio", label: "Mapa de Apoio" },
    { path: "/meu-espaco-seguro", label: "Espaço Seguro" },
    { path: "/entenda-violencia", label: "Entenda a Violência" },
    { path: "/publico", label: "Comunidade" },
    { path: "/sobre", label: "Sobre" }
  ];

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <nav className="bg-purple-700 text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2">
              <img src={Logo} alt="Flor Segura" className="h-12 w-auto" />
              <span className="hidden sm:block text-lg font-bold text-white">
                Flor Segura
              </span>
            </Link>
          </div>

          {/* Menu desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors ${
                    isActive 
                      ? "text-white border-b-2 border-white pb-1" 
                      : "text-purple-200 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* User Area */}
          <div className="flex items-center space-x-4">
            {!isAuthenticated ? (
              <Link 
                to="/login" 
                className="flex items-center gap-2 text-white hover:text-purple-200 transition-colors"
              >
                <FaUser />
                <span className="hidden sm:block">Entrar</span>
              </Link>
            ) : (
              <div className="flex items-center space-x-3">
                {user?.name && (
                  <span className="hidden md:block text-white text-sm">
                    Olá, {user.name.split(' ')[0]}
                  </span>
                )}
                <button
                  onClick={handleLogout}
                  className="text-white hover:text-purple-200 transition-colors text-sm"
                >
                  Sair
                </button>
              </div>
            )}

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-purple-200 transition-colors"
              >
                {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-purple-700 border-t border-purple-600">
          <div className="px-4 py-2 space-y-1">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 transition-colors ${
                    isActive 
                      ? "text-white bg-purple-800" 
                      : "text-purple-200 hover:text-white hover:bg-purple-800"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            
            {isAuthenticated && (
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-purple-200 hover:text-white hover:bg-purple-800 transition-colors"
              >
                Sair
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}