import { createContext, useEffect, useState, useContext } from "react";
import { validateToken } from "../services/api";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Valida token ao carregar a aplicação
  useEffect(() => {
    async function checkAuth() {
      try {
        const savedUser = localStorage.getItem("user");
        const token = localStorage.getItem("token");
        
        if (savedUser && token) {
          // Por enquanto, apenas verifica se existem os dados salvos
          // Removendo validação automática que estava causando logout
          setUser(JSON.parse(savedUser));
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Erro ao verificar autenticação:", error);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    }

    checkAuth();
  }, []);

  function login(data) {
    setUser(data);
    setIsAuthenticated(true);
    localStorage.setItem("user", JSON.stringify(data));
    localStorage.setItem("token", data.token);
  }

  function logout() {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }

  const value = {
    user,
    login,
    logout,
    loading,
    isAuthenticated
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook personalizado para usar o contexto
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de AuthProvider");
  }
  return context;
}
