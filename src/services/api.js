import { API_CONFIG, buildApiUrl } from '../config/api.js';

const API_BASE_URL = API_CONFIG.BASE_URL;
const API_URL = buildApiUrl(API_CONFIG.ENDPOINTS.AUTH);

// Configuração padrão para requests
const defaultHeaders = {
  "Content-Type": "application/json",
};

// Função helper para fazer requests com tratamento de erro melhorado
async function apiRequest(url, options = {}) {
  const token = localStorage.getItem("token");
  
  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  };

  try {
    const res = await fetch(url, config);
    
    // Se não há conteúdo, retorna null
    if (res.status === 204) return null;
    
    const data = await res.json().catch(() => ({}));
    
    if (!res.ok) {
      throw new Error(data?.message || data?.error || `Erro ${res.status}`);
    }
    
    return data;
  } catch (error) {
    if (error.name === "TypeError" && error.message.includes("fetch")) {
      throw new Error("Erro de conexão. Verifique sua internet.");
    }
    throw error;
  }
}

export async function loginRequest(email, password) {
  return apiRequest(`${API_URL}/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

export async function registerRequest(name, email, cpf, password) {
  return apiRequest(`${API_URL}/register`, {
    method: "POST",
    body: JSON.stringify({ name, email, cpf, password }),
  });
}

// Função para validar token
export async function validateToken() {
  return apiRequest(`${API_URL}/validate`);
}

// Função para refresh do token
export async function refreshToken() {
  return apiRequest(`${API_URL}/refresh`, { method: "POST" });
}
