import React from "react";
import { Link } from "react-router-dom";  // IMPORTAR O LINK
import Logo from "../assets/imagens/logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-l from-red-300 to-white text-red-800 py-8 px-6 shadow-inner mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo e slogan */}
        <div className="flex flex-col items-start">
          <img
            src={Logo}
            alt="Logo AlôCar"
            className="w-28 mb-3"
          />
          <p className="text-sm font-semibold tracking-wide">
            &copy; {new Date().getFullYear()} Alô-Car. Sempre Acompanhando você
          </p>
        </div>

        {/* Central de Atendimento */}
        <div>
          <h4 className="font-bold text-lg mb-3 border-b-2 border-red-600 pb-1">
            Central de Atendimento
          </h4>
          <p className="text-sm mb-1">Segunda a sexta: <span className="font-semibold">07h às 22h</span></p>
          <p className="text-sm mb-1">Sábados, domingos e feriados: <span className="font-semibold">09h às 18h</span></p>
          <Link
            to="/help"
            className="mt-2 inline-block text-sm font-semibold bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded transition-colors"
          >
            Acessar atendimento
          </Link>
        </div>

        {/* Serviços */}
        <div>
          <h4 className="font-bold text-lg mb-3 border-b-2 border-red-600 pb-1">
            Serviços
          </h4>
          <ul className="text-sm space-y-2">
            <li className="cursor-pointer hover:underline">Motoristas Parceiros</li>
            <li className="cursor-pointer hover:underline">Agendar Corridas</li>
            <li className="cursor-pointer hover:underline">Termos de Uso</li>
            <li className="cursor-pointer hover:underline">Política de Privacidade</li>
          </ul>
        </div>

        {/* Outros */}
        <div>
          <h4 className="font-bold text-lg mb-3 border-b-2 border-red-600 pb-1">
            Outros
          </h4>
          <ul className="text-sm space-y-2">
            <li className="cursor-pointer hover:underline">Dúvidas frequentes</li>
            <li className="cursor-pointer hover:underline">Canal de transparência é confiável?</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
