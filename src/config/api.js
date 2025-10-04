// src/config/api.js
// Configuración centralizada de la API

// URL base de la API
// En desarrollo: usa las serverless functions locales o Render
// En producción: usa las serverless functions de Vercel
export const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

// Endpoints
export const ENDPOINTS = {
  videos: `${API_BASE_URL}/videos`,
  videoById: (id) => `${API_BASE_URL}/videos?id=${id}`,
};

// Helper para hacer requests
export const apiRequest = async (url, options = {}) => {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};
