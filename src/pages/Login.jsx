// LoginPage.jsx
import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { FaUser, FaLock } from "react-icons/fa";
import LogoHome from "../assets/imagens/logohome.png";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../services/api";
import { AuthContext } from "../context/AuthContext";

const LoginPage = () => {
  const navigate = useNavigate();

  // ⬅️ Agora o hook está no lugar certo!
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await loginRequest(email, password);

      // Salva usuário no AuthContext
      login(data);

      navigate("/");
    } catch (err) {
      setError(err.message || "Erro ao fazer login.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex">
      {/* Lado esquerdo */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="hidden md:flex w-1/2 bg-gradient-to-br from-purple-300 to-purple-200 flex-col items-center justify-center text-center text-purple-900 p-10 relative overflow-hidden"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <span className="text-[200px] font-serif text-purple-400 select-none">🌸</span>
        </motion.div>

        <img src={LogoHome} alt="Logo" className="w-48 mb-6 drop-shadow-lg relative z-10" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 shadow-md max-w-md relative z-10"
        >
          <p className="text-xl font-medium leading-relaxed text-purple-900">
            Nenhuma mulher nasceu para viver com medo. <br />
            <span className="font-semibold text-purple-700">
              Aqui você encontra acolhimento e liberdade 💜
            </span>
          </p>
        </motion.div>
      </motion.div>

      {/* Lado direito */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex items-center justify-center p-10 bg-white"
      >
        <div className="w-full max-w-sm">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Login</h2>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="relative">
              <FaUser className="absolute top-3 left-3 text-gray-500" />
              <input
                type="email"
                placeholder="E-mail"
                className="w-full border rounded-2xl pl-10 p-3 focus:ring-2 focus:ring-purple-400 outline-none shadow-md"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="relative">
              <FaLock className="absolute top-3 left-3 text-gray-500" />
              <input
                type="password"
                placeholder="Senha"
                className="w-full border rounded-2xl pl-10 p-3 focus:ring-2 focus:ring-purple-400 outline-none shadow-md"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && <p className="text-red-500 text-center">{error}</p>}

            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-3 rounded-2xl font-semibold hover:bg-purple-600 transition shadow-md disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Entrando…" : "Entrar"}
            </button>
          </form>

          <p className="text-center text-gray-600 mt-4">
            Novo por aqui?{" "}
            <span
              className="text-purple-600 hover:underline cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Criar conta
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
