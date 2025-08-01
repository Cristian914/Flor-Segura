import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../assets/imagens/logo.png";
import { FaCarRear } from "react-icons/fa6";
import { IoIosHome } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { FaBookOpen } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/'); // navega para home sem reload
  };

  const menuLinks = (
    <>
      <div className='flex text-amber-950 hover:text-[#e69292] mr-2.5 transition-colors duration-300 font-medium'>
        <IoIosHome className='flex mt-0.5 text-2xl' />
        <Link to="/" className="text-lg pl-1">home</Link>
      </div>

      <div className='flex text-amber-950 hover:text-[#e69292] mr-2.5 transition-colors duration-300 font-medium'>
        <BiSupport className='flex mt-0.5 text-2xl' />
        <Link to="/help" className="pl-1 text-lg font-medium">Central de Ajuda</Link>
      </div>

      <div className='flex text-amber-950 hover:text-[#e69292] mr-2.5 transition-colors duration-300 font-medium'>
        <FaBookOpen className='flex mt-0.5 text-2xl' />
        <Link to="/about" className="pl-1 text-lg font-medium">Sobre</Link>
      </div>

      {isLoggedIn && (
        <>
          {/* Link Carro sempre que estiver logado */}
          <div className='flex text-amber-950 hover:text-[#e69292] mr-2.5 transition-colors duration-300 font-medium'>
            <FaCarRear className='flex mt-0.5 text-2xl' />
            <Link to="/registrocarro" className="pl-1 text-lg font-medium">Carro</Link>
          </div>
        </>
      )}

      {isLoggedIn ? (
        <>
          <Link to="/profile" className="text-amber-950 hover:text-[#e69292] transition-colors duration-300 text-lg font-medium">Perfil</Link>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 text-white px-4 py-1.5 rounded-full font-semibold shadow-md transition duration-300"
          >
            Sair
          </button>
        </>
      ) : (
        <div className="flex items-center">
          <Link
            to="/login"
            className="flex items-center bg-[#e69292] text-white px-4 py-1.5 rounded-full shadow-md hover:bg-amber-950 transition duration-300"
          >
            <FaUserCircle className="mr-2 text-xl" />
            <span className="text-base font-semibold">Entrar</span>
          </Link>
        </div>
      )}
    </>
  );

  return (
    <nav className="w-full bg-gradient-to-r from-white text-black shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
        <div className="flex items-center -ml-2 min-sm-40 max-w-5xl mx-auto px-15">
          <Link to="/">
            <img
              src={Logo}
              alt="Logotipo"
              className="w-auto h-15"
            />
          </Link>
        </div>
        <div className="hidden md:flex space-x-4 px-5">
          {menuLinks}
        </div>
        {/* Botão do Menu para mobile */}
        <button
          className="md:hidden text-black"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Menu Dropdown para mobile */}
      {isMenuOpen && (
        <div className="md:hidden absolute right-4 top-[72px] flex flex-col items-start bg-white p-4 space-y-3 shadow-lg rounded-md z-50">
          {menuLinks}
        </div>
      )}
      <div>
        <hr className="text-[#e69292] h-0.5 w-full border border-t-5" />
      </div>
    </nav>
  );
};

export default Navbar;
