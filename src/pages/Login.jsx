import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
 
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode colocar a lógica para autenticar o usuário
    console.log({ email, password });
  };
 
  return (
    <div style={styles.container}>
      <img src="/logo.png" alt="Logo FlorSegura" style={styles.logo} />
      <div style={styles.card}>
        <h2 style={{ marginBottom: 20 }}>Entrar na sua conta</h2>
 
        <form onSubmit={handleSubmit} style={styles.form}>
          <label htmlFor="email" style={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
 
          <label htmlFor="password" style={styles.label}>Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
 
          <button type="submit" style={styles.button}
           onClick={() => navigate("/home")}
          >
            Entrar
          </button>
        </form>
 
        <p style={{ marginTop: 20 }}>
          Não tem uma conta?{" "}
          <span
            style={styles.linkText}
            onClick={() => navigate("/register")}
          >
            Crie uma aqui
          </span>
        </p>
      </div>
    </div>
  );
}
 
const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  logo: {
    width: 150,
    marginBottom: 30,
  },
  card: {
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 8,
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: 400,
    boxSizing: "border-box",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: 5,
    color: "#555555",
    fontWeight: "600",
  },
  input: {
    padding: 10,
    marginBottom: 15,
    borderRadius: 4,
    border: "1px solid #ccc",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#6A1B9A", // roxo da paleta
    color: "#fff",
    padding: 12,
    border: "none",
    borderRadius: 4,
    cursor: "pointer",
    fontWeight: "700",
    fontSize: 16,
  },
  linkText: {
    color: "#6A1B9A",
    cursor: "pointer",
    fontWeight: "600",
  },
};
 
export default Login;
 
 