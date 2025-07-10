import React from "react";
import Logo from "../assets/imagens/logo.png";

const Footer = () => {
  

  return (
    <>
      {/* Botão para mostrar/esconder footer */}
    

     
      {/* Footer que aparece só quando mostrarFooter é true */}
      
        <footer className="w-full h-23 bg-gradient-to-l from-red-300 to-white text-gray-400 py-0 px-6 shadow-lg mt-auto  bottom-0 left-0 right-0">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img
                src={Logo}
                alt="Logo"
                className="flex w-24 mb-4 py-4 mt-3 ml-20"
              />
              <p className="text-sm -mt-4 text-red-700 cursor-pointer hover:underline">
                &copy; Alo-Car. Sempre Acompanhando você
              </p>
            </div>

            <div className="text-red-600">
              <h4 className="font-semibold mb-2">Central de Atendimento</h4>
              <p className="text-sm">De segunda a sexta das 07h às 22h.</p>
              <p className="text-sm">Sábado, domingo e feriado das 09h às 18h</p>
              <p className="text-sm">Acessar atendimento</p>
            </div>

            <div>
              <h4 className="font-semibold mb-2"></h4>
              <ul className="text-sm space-y-1">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>

            <div className="text-red-600">
              <h4 className="font-semibold mb-2">Outros</h4>
              <ul className="text-sm space-y-1">
                <li>Dúvidas frequentes</li>
                <li>Canal de transparência é confiável?</li>
              </ul>
            </div>
          </div>
        </footer>
    
    </>
  );
};

export default Footer;
