// src/services/keepAlive.js
// Servicio para mantener activo el servidor de Render

const API_URL = 'https://aluraflix-api-2qid.onrender.com/videos';
const PING_INTERVAL = 5 * 60 * 1000; // 5 minutos en milisegundos

let intervalId = null;

/**
 * Hace ping al servidor para mantenerlo activo
 */
const pingServer = async () => {
  try {
    const response = await fetch(API_URL, {
      method: 'HEAD', // Usa HEAD para no transferir datos innecesarios
    });
    
    if (response.ok) {
      console.log('✅ Servidor activo - Ping exitoso');
    } else {
      console.warn('⚠️ Servidor respondió con estado:', response.status);
    }
  } catch (error) {
    console.error('❌ Error al hacer ping al servidor:', error);
  }
};

/**
 * Inicia el servicio de keep-alive
 */
export const startKeepAlive = () => {
  if (intervalId) {
    console.log('⚠️ Keep-alive ya está activo');
    return;
  }

  // Hacer ping inmediato al iniciar
  pingServer();

  // Configurar ping cada 5 minutos
  intervalId = setInterval(pingServer, PING_INTERVAL);
  
  console.log('🚀 Keep-alive iniciado - Ping cada 5 minutos');
};

/**
 * Detiene el servicio de keep-alive
 */
export const stopKeepAlive = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    console.log('🛑 Keep-alive detenido');
  }
};
