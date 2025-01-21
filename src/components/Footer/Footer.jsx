// src/components/Footer.jsx

import styled from 'styled-components';

// Estilos para el footer utilizando Styled Components
const FooterContainer = styled.footer`
  background-color: #f8f9fa; /* Color de fondo claro */
  color: #6c757d; /* Color de texto gris */
  text-align: center; /* Centrar el texto */
  padding: 20px 0; /* Espaciado vertical */
  width: 100%;
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1); /* Sombra superior */

  /* Responsividad */
  @media (max-width: 600px) {
    padding: 15px 0;
    font-size: 14px;
  }
`;

const FooterText = styled.p`
  margin: 5px 0;
  font-size: 16px;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterText>Desarrollado por sebadev</FooterText>
      <FooterText>&copy; {currentYear} Alura Flix. Todos los derechos reservados.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
