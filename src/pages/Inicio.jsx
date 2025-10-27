import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Inicio.css";
import Gemini from "../assets/imagens/gemini.jpg";
import Logo from "../assets/imagens/logo.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
 
function Inicio() {
  const navigate = useNavigate();
 
  return (
    <>
      
      <div className="inicio-container">
        {/* Imagem de topo */}
        <div className="inicio-banner">
          <img
            src={Gemini}
            alt="FlorSegura - Acolhimento e apoio"
            className="banner-img"
          />
        </div>
 
        {/* Ícones sociais */}
        <div className="social-icons">
          <a
            href="https://facebook.com/seuPerfil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com/seuPerfil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/seuPerfil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://wa.me/seunumerodetelefone"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
 
        {/* Logo */}
        <div className="inicio-logo">
          <img src={Logo} alt="Logo FlorSegura" />
        </div>
 
        {/* Texto de introdução */}
        <div className="inicio-texto">
          <p>
            <strong>FlorSegura</strong> é um espaço seguro e acolhedor para
            mulheres que enfrentam ou suspeitam estar vivendo uma situação de
            violência. Aqui, você encontra apoio, orientação e informações
            práticas para agir com segurança, no seu tempo e de forma
            confidencial.
          </p>
          <p>
            Descubra onde buscar ajuda, entenda seus direitos e dê o primeiro
            passo para recomeçar — você não está sozinha. 🌸
          </p>
          <h3>Segurança, acolhimento e força para florescer novamente.</h3>
        </div>
 
        {/* Botões */}
        <div className="inicio-botoes">
          <h4>Vamos começar?</h4>
 
          <div className="botoes-lado-a-lado">
            <button className="btn-roxo" onClick={() => navigate("/register")}>
              Criar uma conta
            </button>
 
            <span className="ou-texto">ou</span>
 
            <button className="btn-rosa" onClick={() => navigate("/home")}>
              Começar sem registro
            </button>
          </div>
        </div>
      </div>
 
      {/* Footer */}
      <footer className="footer">
        <div className="footer-conteudo">
          <div className="footer-logo">
            <img src={Logo} alt="FlorSegura Logo" />
            <p>Segurança, acolhimento e força para florescer novamente.</p>
          </div>
 
          <div className="footer-links">
            <a href="/sobre">Sobre</a>
            <a href="/mapa">Mapa de Apoio</a>
            <a href="/fale">Fale com Alguém</a>
            <a href="/termos">Termos de Uso</a>
          </div>
 
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a
              href="https://wa.me/seunumerodetelefone"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
 
        <div className="footer-copy">
          <p>
            © {new Date().getFullYear()} FlorSegura — Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
 
export default Inicio;
 
