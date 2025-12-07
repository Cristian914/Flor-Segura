import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaIdCard } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import LogoHome from '../assets/imagens/logohome.png';
 
const RegisterPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Função para formatar CPF
  const formatCPF = (value) => {
    const cpf = value.replace(/\D/g, '');
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  };

  // Função para validar CPF
  const isValidCPF = (cpf) => {
    const cleanCPF = cpf.replace(/\D/g, '');
    if (cleanCPF.length !== 11) return false;
    if (/^(\d)\1{10}$/.test(cleanCPF)) return false;
    
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cleanCPF.charAt(i)) * (10 - i);
    }
    let checkDigit = 11 - (sum % 11);
    if (checkDigit === 10 || checkDigit === 11) checkDigit = 0;
    if (checkDigit !== parseInt(cleanCPF.charAt(9))) return false;
    
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cleanCPF.charAt(i)) * (11 - i);
    }
    checkDigit = 11 - (sum % 11);
    if (checkDigit === 10 || checkDigit === 11) checkDigit = 0;
    if (checkDigit !== parseInt(cleanCPF.charAt(10))) return false;
    
    return true;
  };
 
  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
  
    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      setLoading(false);
      return;
    }

    if (!isValidCPF(cpf)) {
      setError('CPF inválido. Verifique os números digitados.');
      setLoading(false);
      return;
    }
  
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      const response = await fetch(`${API_URL}/auth/register`, {
              method: "POST",
              headers: {
              "Content-Type": "application/json",
               },
             body: JSON.stringify({ name, email, cpf: cpf.replace(/\D/g, ''), password }),
});

  
      const data = await response.json();
  
      if (!response.ok) {
        // Mensagens de erro específicas baseadas na resposta do backend
        if (data.error?.includes('CPF')) {
          setError(data.error);
        } else if (data.error?.includes('feminino') || data.error?.includes('mulher')) {
          setError('Este CPF não corresponde a uma pessoa do sexo feminino. Nossa plataforma é exclusiva para mulheres.');
        } else if (data.error?.includes('já existe') || data.error?.includes('duplicado')) {
          setError('Este CPF ou email já está cadastrado em nossa plataforma.');
        } else {
          setError(data.error || "Erro ao criar conta. Tente novamente.");
        }
        setLoading(false);
        return;
      }
  
      navigate("/login");
  
    } catch (error) {
      console.error('Erro no registro:', error);
      setError("Erro ao conectar ao servidor. Verifique sua conexão.");
    }
  
    setLoading(false);
  };
  
 
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-purple-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md animate__animated animate__fadeIn animate__delay-1s">
        <div className="flex justify-center mb-6">
          <img src={LogoHome} alt="Logo" className="w-24 h-24 object-contain" />
        </div>
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-2">Criar Conta</h2>
        <p className="text-center text-gray-600 mb-6 text-sm">
          🌸 Espaço exclusivo para mulheres
        </p>
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
            <FaIdCard className="absolute top-3 left-3 text-gray-500" />
            <input
              type="text"
              placeholder="CPF (000.000.000-00)"
              className="w-full border border-gray-300 rounded-lg pl-10 p-3 focus:ring-2 focus:ring-purple-400 outline-none"
              required
              maxLength={14}
              value={cpf}
              onChange={(e) => {
                const formatted = formatCPF(e.target.value);
                if (formatted.length <= 14) {
                  setCpf(formatted);
                }
              }}
            />
            <p className="text-xs text-gray-500 mt-1 ml-1">
              🔒 Verificamos se o CPF pertence a uma mulher para garantir a segurança da comunidade
            </p>
            <p className="text-xs text-blue-600 mt-1 ml-1">
              💡 Para teste, use: 111.444.777-35
            </p>
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
 
