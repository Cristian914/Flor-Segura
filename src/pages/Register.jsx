import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import LogoHome from '../assets/imagens/logohome.png'; // Ajuste o caminho conforme necessário
 
const RegisterPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
 
  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
  
    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      setLoading(false);
      return;
    }
  
    try {
      const response = await fetch("http://localhost:3001/auth/register", {
              method: "POST",
              headers: {
              "Content-Type": "application/json",
               },
             body: JSON.stringify({ name, email, password }),
});

  
      const data = await response.json();
  
      if (!response.ok) {
        setError(data.error || "Erro ao criar conta.");
        setLoading(false);
        return;
      }
  
      navigate("/login");
  
    } catch (error) {
      setError("Erro ao conectar ao servidor.");
    }
  
    setLoading(false);
  };
  
 
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-purple-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md animate__animated animate__fadeIn animate__delay-1s">
        <div className="flex justify-center mb-6">
          <img src={LogoHome} alt="Logo" className="w-24 h-24 object-contain" />
        </div>
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Criar Conta</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleRegister} className="space-y-4">
          <div className="relative">
            <FaUser className="absolute top-3 left-3 text-gray-500" />
            <input
              type="text"
              placeholder="Nome Completo"
              className="w-full border border-gray-300 rounded-lg pl-10 p-3 focus:ring-2 focus:ring-purple-400 outline-none"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute top-3 left-3 text-gray-500" />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full border border-gray-300 rounded-lg pl-10 p-3 focus:ring-2 focus:ring-purple-400 outline-none"
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
              className="w-full border border-gray-300 rounded-lg pl-10 p-3 focus:ring-2 focus:ring-purple-400 outline-none"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="relative">
            <FaLock className="absolute top-3 left-3 text-gray-500" />
            <input
              type="password"
              placeholder="Confirmar Senha"
              className="w-full border border-gray-300 rounded-lg pl-10 p-3 focus:ring-2 focus:ring-purple-400 outline-none"
              required
              minLength={6}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
            disabled={loading}
          >
            {loading ? 'Criando conta...' : 'Criar Conta'}
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Já tem uma conta?{' '}
          <span
            className="text-purple-600 hover:underline cursor-pointer"
            onClick={() => navigate('/login')}
          >
            Entrar
          </span>
        </p>
      </div>
    </div>
  );
};
 
export default RegisterPage;
 
