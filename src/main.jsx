// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import App from './App';
import theme from './theme'; // Asegúrate de que theme.js está correctamente configurado
import './index.css'; // Opcional: para estilos adicionales

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Aplica el CSS reset de MUI */}
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
