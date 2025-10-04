// src/components/Footer.jsx

import styled from 'styled-components';

// Estilos para el footer utilizando Styled Components
const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); /* Degradado azul-púrpura */
  color: #ffffff;
  text-align: center;
  padding: 20px 0;
  width: 100%;
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.2);

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

const DeveloperLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all 0.3s ease;
  padding: 2px 8px;
  border-radius: 4px;
  
  &:hover {
    background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transform: scale(1.05);
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterText>
        Desarrollado por{' '}
        <DeveloperLink 
          href="https://www.matiascoder.com" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          matiascoder
        </DeveloperLink>
      </FooterText>
      <FooterText>&copy; {currentYear} Alura Flix. Todos los derechos reservados.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
