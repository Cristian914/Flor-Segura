import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
 
function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("As senhas não conferem!");
      return;
    }
    // Aqui você pode colocar a lógica para registrar o usuário
    console.log({ name, email, password });
  };
 
  return (
    <div className="login-register-container">
      <h2>Criar uma nova conta</h2>
 
      <form onSubmit={handleSubmit} className="form-container">
        <label htmlFor="name">Nome completo</label>
        <input
          type="text"
          id="name"
          placeholder="Digite seu nome completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
 
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
 
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
 
        <label htmlFor="confirmPassword">Confirmar senha</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Confirme sua senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
 
        <button type="submit" className="btn-roxo"
         onClick={() => navigate("/login")}>
          Registrar
        </button>
      </form>
 
      <p>
        Já tem uma conta?{" "}
        <span className="link-text" onClick={() => navigate("/login")}>
          Entre aqui
        </span>
      </p>
    </div>
  );
}
 
export default Register;
 
 