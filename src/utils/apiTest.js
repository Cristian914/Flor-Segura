// Utilitário para testar conectividade com a API
import { API_CONFIG } from '../config/api.js';

export const testApiConnection = async () => {
  const results = {
    baseUrl: API_CONFIG.BASE_URL,
    isReachable: false,
    responseTime: null,
    error: null,
    endpoints: {}
  };

  try {
    const startTime = Date.now();
    
    // Teste básico de conectividade
    const response = await fetch(API_CONFIG.BASE_URL, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    results.responseTime = Date.now() - startTime;
    results.isReachable = true;
    
    // Teste apenas do endpoint que existe
    const endpoints = ['/health'];
    
    for (const endpoint of endpoints) {
      try {
        const endpointResponse = await fetch(`${API_CONFIG.BASE_URL}${endpoint}`);
        results.endpoints[endpoint] = {
          status: endpointResponse.status,
          ok: endpointResponse.ok
        };
      } catch (err) {
        results.endpoints[endpoint] = {
          status: 'ERROR',
          error: err.message
        };
      }
    }
    
  } catch (error) {
    results.error = error.message;
    results.isReachable = false;
  }

  return results;
};

// Função para exibir resultado do teste no console
export const logApiTest = async () => {
  console.log('🔍 Testando conectividade com a API...');
  const results = await testApiConnection();
  
  console.log('📊 Resultados do teste:');
  console.log(`🌐 URL Base: ${results.baseUrl}`);
  console.log(`✅ Acessível: ${results.isReachable ? 'Sim' : 'Não'}`);
  
  if (results.responseTime) {
    console.log(`⏱️ Tempo de resposta: ${results.responseTime}ms`);
  }
  
  if (results.error) {
    console.log(`❌ Erro: ${results.error}`);
  }
  
  if (Object.keys(results.endpoints).length > 0) {
    console.log('🔗 Endpoints testados:');
    Object.entries(results.endpoints).forEach(([endpoint, result]) => {
      console.log(`  ${endpoint}: ${result.status} ${result.ok ? '✅' : '❌'}`);
    });
  }
  
  return results;
};