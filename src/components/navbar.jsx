import React, { useState, useEffect } from 'react';
import Logo from "../assets/imagens/logo.png"
import { FaCarRear } from "react-icons/fa6";
import { IoIosHome } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { FaBookOpen } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Verifica se há um token (ou usuário) no localStorage
        const user = localStorage.getItem('user');
        setIsAuthenticated(!!user);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        setIsAuthenticated(false);
        window.location.href = '/'; // redireciona para Home
    };

    const menuLinks = (
        <>
            <>
                <div className='flex text-amber-950 hover:text-[#e69292]  mr-2.5  transition-colors duration-300  font-medium '>
                    <FaCarRear className='flex mt-0.5 text-2xl   ' />
                    <a href="/motorista" className='text-lg pl-1.5 '>Motorista</a>
                </div>
            </>
            <>
                <div className='flex text-amber-950 hover:text-[#e69292] mr-2.5 transition-colors duration-300 font-medium'>
                    <IoIosHome className='flex mt-0.5 text-2xl  ' />
                    <a href="/" className=" text-lg pl-1 ">home</a>
                </div>
            </>
            <>
                <div className='flex text-amber-950 hover:text-[#e69292] mr-2.5 transition-colors duration-300 font-medium'>
                    <BiSupport className='flex mt-0.5 text-2xl  ' />
                    <a href="/help" className="pl-1 text-lg font-medium ">Central de Ajuda</a>
                </div>
            </>
            <>
                <div className='flex text-amber-950 hover:text-[#e69292] mr-2.5 transition-colors duration-300 font-medium'>
                    <FaBookOpen className='flex mt-0.5 text-2xl  ' />
                    <a href="/about" className="pl-1 text-lg font-medium ">Sobre</a>
                </div>
            </>
            {isAuthenticated ? (
                <>
                    <a href="/profile" className=" text-amber-950 hover:text-[#e69292] transition-colors duration-300 text-lg font-medium">Perfil</a>
                    <button onClick={handleLogout} className=" text-amber-950 hover:text-[#e69292] transition-colors duration-300 text-lg font-medium">Sair</button>
                </>
            ) : (
                <div className='flex text-amber-950 hover:text-[#e69292] mr-2.5 transition-colors duration-300 font-medium'>
                    <FaUserCircle className='flex mt-0.5 text-2xl  ' />
                <a href="/login" className="pl-1 text-lg font-medium " >Login</a>
                </div>
            )}
        </>
    );

    return (
        <nav className=" w-full bg-gradient-to-r from-white  text-black   shadow-1g">
            <div className="max-w-7x1 mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">
                    <a href="/"></a>
                </div>
                <div className="flex items-center justify-center -ml-2 min-sm-40 max-w-5xl mx-auto px-15 ">
                  <a href="/">  <img
                        src={Logo}
                        alt="Logotipo"
                        className=" w-auto h-15"
                    />
                    </a>
                </div>
                <div className="hidden md:flex space-x-4 px-5">
                    {menuLinks}
                </div>
                {/* Botão do Menu para mobile */}
                <button
                    className="md:hidden text-white"
                    onClick={toggleMenu}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-black">
                        <path strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
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
