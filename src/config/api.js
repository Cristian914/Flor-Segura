// Configuração centralizada da API
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:3001',
  TIMEOUT: 10000, // 10 segundos
  
  // Endpoints
  ENDPOINTS: {
    AUTH: '/auth',
    LOCAIS_PERIGOSOS: '/api/locais-perigosos',
    USUARIOS: '/api/usuarios'
  }
};

// Helper para construir URLs completas
export const buildApiUrl = (endpoint) => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};

// Verificar se a API está disponível
export const checkApiHealth = async () => {
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}/health`, {
      method: 'GET',
      timeout: 5000
    });
    return response.ok;
  } catch (error) {
    console.error('API não está disponível:', error);
    return false;
  }
};