// src/theme.js

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Puedes personalizar este color
    },
    secondary: {
      main: '#dc004e', // Puedes personalizar este color
    },
    error: {
      main: '#e50914', // Rojo personalizado para errores y botones
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Puedes cambiar la fuente si lo deseas
  },
  // Puedes agregar más personalizaciones aquí según tus necesidades
});

export default theme;
