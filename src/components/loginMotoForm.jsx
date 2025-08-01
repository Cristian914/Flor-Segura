import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { FaMotorcycle } from "react-icons/fa";

const LoginMotoForm = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Aqui a URL está corrigida para a rota correta do backend:
      const response = await fetch('http://localhost:5000/api/moto/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erro ao conectar com o servidor');
      }

      const data = await response.json();
      alert(`Login feito com sucesso! Motorista: ${data.user.name}`);

      // Salvar no localStorage e atualizar estado global
      localStorage.setItem('user', JSON.stringify(data.user));
      setIsLoggedIn(true);

      navigate('/motorista'); // redireciona para página do motorista
    } catch (error) {
      alert(`Erro: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-white to-red-200 flex justify-center items-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        <div className="flex justify-end mb-2">
          <Link
            to="/login"
            className="text-sm bg-red-200 text-red-600 px-3 py-1 rounded-md font-medium hover:bg-red-300 transition duration-300"
          >
            Passageiro
          </Link>
        </div>

        <FaMotorcycle className="mx-auto mb-4 text-red-400" size={48} />
        <h2 className="text-2xl font-semibold text-red-400 mb-6">Motorista</h2>

        <form onSubmit={handleSubmit}>
          <div className="space-y-2">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md bg-red-100 placeholder-amber-950"
              placeholder="Digite seu email"
            />
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mb-4 px-4 py-2 rounded-md bg-red-100 placeholder-amber-950"
              placeholder="Digite sua senha"
            />
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
            <Link to="/registermoto" className="text-red-600 hover:underline p-2">
              Cadastre-se
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginMotoForm;
