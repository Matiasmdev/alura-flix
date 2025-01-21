// src/theme.js

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Azul MUI por defecto
    },
    secondary: {
      main: '#dc004e', // Rosa MUI por defecto
    },
    error: {
      main: '#e50914', // Rojo personalizado para errores y botones
    },
    background: {
      default: '#121212', // Color de fondo global (ejemplo: oscuro)
      paper: '#1e1e1e',   // Fondo para componentes como Paper, Card, etc.
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Asegúrate de que la fuente está cargada
    h1: {
      margin: 0, // Elimina márgenes por defecto en los encabezados
    },
    // Ajusta otros estilos tipográficos según sea necesario
  },
  components: {
    MuiContainer: {
      defaultProps: {
        disableGutters: true, // Elimina el padding horizontal por defecto
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          marginBottom: 0, // Elimina el margin-bottom si existe
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: '64px', // Asegura una altura consistente del Header
          paddingLeft: 0,
          paddingRight: 0,
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        container: {
          margin: 0, // Elimina el margen predeterminado de los contenedores Grid
        },
        item: {
          padding: 0, // Elimina el padding predeterminado de los ítems Grid
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: 0, // Elimina el padding por defecto en Paper si lo usas
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          margin: 0, // Elimina márgenes por defecto en Typography
        },
      },
    },
  },
  spacing: 0, // Ajusta la unidad de spacing global si es necesario
});

export default theme;
