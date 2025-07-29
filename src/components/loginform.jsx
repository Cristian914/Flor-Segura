import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaUser } from "react-icons/fa";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erro ao conectar com o servidor');
      }

      const data = await response.json();
      alert(`Login feito com sucesso! Usuário: ${data.user.name}`);

      navigate('/about');
    } catch (error) {
      alert(`Erro: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-white to-red-200 flex justify-center items-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        <FaUser className="mx-auto mb-4 text-red-400" size={48} />
        <h2 className="text-2xl font-semibold text-red-400 mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-2">
            <div>
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-md bg-red-100 placeholder-amber-950"
                placeholder="Digite seu email"
              />
            </div>
            <div>
              <input
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full mb-4 px-4 py-2 rounded-md bg-red-100 placeholder-amber-950"
                placeholder="Digite sua senha"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition duration-300 sm:w-full mt-2 cursor-pointer"
            disabled={loading}
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
          <p className="mt-6 text-center text-sm text-gray-600">
            não tem conta?
            <a href="/register" className="text-red-600 hover:underline p-2">
              {" "}
              Cadastre-se{" "}
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
