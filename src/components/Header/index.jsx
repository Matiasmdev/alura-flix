// src/components/Header.jsx

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import logoMain from "./LogoMain.png"; // Importa el logo

// Contenedor principal del Header
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px; /* Reducido el padding para mobile */
  background-color: #141414;
  color: #fff;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 10px; /* Ajuste de padding en mobile */
  }
`;

// Estiliza la imagen del logo
const Logo = styled.img`
  width: 120px;

  @media (max-width: 600px) {
    width: 80px; /* Tamaño más pequeño en mobile */
  }
`;

// Contenedor de navegación
const Nav = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 600px) {
    gap: 10px; /* Menor espacio entre botones en mobile */
    margin-left: auto; /* Empuja los botones hacia la derecha */
  }
`;

// Botón personalizado usando Styled Components
const StyledButton = styled(Button)`
  && {
    color: #fff; /* Texto blanco */
    border: 1px solid #fff; /* Borde blanco */
    text-transform: none; /* Evita que el texto se convierta en mayúsculas */
    font-size: 16px;
    padding: 6px 12px; /* Reducir padding para mobile */

    &:hover {
      background: var(--Dark-Grey, #262626); /* Rojo al pasar el cursor */
      border: 1px solid #2271D1; /* Borde rojo al pasar el cursor */
      box-shadow: 0px 5px 29px 0px rgba(34, 113, 209, 0.70);
    }

    @media (max-width: 600px) {
      font-size: 14px; /* Texto más pequeño en mobile */
      padding: 4px 8px; /* Menor padding en mobile */
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      {/* Logo que redirige a la página principal */}
      <Link to="/">
        <Logo src={logoMain} alt="Alura Flix Logo" />
      </Link>
      
      {/* Navegación con dos botones de MUI */}
      <Nav>
        {/* Botón "Home" */}
        <StyledButton
          variant="outlined" // Estilo del botón: contorno
          component={Link} // Usa el componente Link de React Router
          to="/" // Ruta a la que navega
        >
          Home
        </StyledButton>

        {/* Botón "Nuevo Video" */}
        <StyledButton
          variant="outlined"
          component={Link}
          to="/nuevo-video"
        >
          Nuevo Video
        </StyledButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
