// src/components/Banner/Banner.jsx

import React, { useState, useEffect } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Banner = () => {
  const slides = [
    {
      image: '/banner/banner1.jpg',
      title: 'Descubre el Rock Clásico',
      link: 'https://www.youtube.com/watch?v=QDYfEBY9NM4',
    },
    {
      image: '/banner/banner2.jpg',
      title: 'Sumérgete en los años 70',
      link: 'https://www.youtube.com/watch?v=IbW5K2F1N28',
    },
    {
      image: '/banner/banner3.jpg',
      title: 'Disfruta de las mejores Canciones',
      link: 'https://www.youtube.com/watch?v=GWFToTcoVwI',
    },
    {
      image: '/banner/banner4.png',
      title: 'Vive la Energía del Poet-Rock',
      link: 'https://www.youtube.com/watch?v=s2lo5ZpOqFQ',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  };

  // Auto-rotación cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Función para cambiar a un slide específico
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <Box
      position="relative"
      width="100%"
      height={{ xs: '250px', sm: '300px', md: '400px', lg: '500px' }} // Altura responsiva
      overflow="hidden"
      m={0}
      p={0}
    >
      {slides.map((slide, index) => (
        <Box
          key={index}
          component="a"
          href={slide.link}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: index === currentSlide ? 1 : 0,
            visibility: index === currentSlide ? 'visible' : 'hidden',
            transition: 'opacity 1s ease-in-out, visibility 1s ease-in-out',
            textDecoration: 'none', // Elimina el subrayado del enlace
            color: 'inherit', // Hereda el color del tema
          }}
        >
          <Box
            component="img"
            src={slide.image}
            alt={`Slide ${index + 1}`}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top', // Alinea la imagen hacia la parte superior
            }}
          />
          {/* Título del Banner */}
          <Typography
            variant="h4"
            component="div"
            sx={{
              position: 'absolute',
              bottom: '20px', // Posición desde el fondo
              left: '20px',    // Posición desde la izquierda
              color: '#fff',
              backgroundColor: 'rgba(0, 0, 0, 0.6)', // Fondo semi-transparente para mejorar la legibilidad
              padding: '8px 16px',
              borderRadius: '4px',
              textAlign: 'left',
              maxWidth: '80%', // Evita que el título ocupe todo el ancho
              // Responsividad para el tamaño de fuente
              fontSize: {
                xs: '1.2rem', // Mobile
                sm: '1.5rem', // Tablet
                md: '1.8rem', // Desktop
                lg: '2rem',   // Large Desktop
              },
            }}
          >
            {slide.title}
          </Typography>
        </Box>
      ))}

      {/* Botón Anterior */}
      <IconButton
        onClick={prevSlide}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '20px',
          transform: 'translateY(-50%)',
          color: '#fff',
          backgroundColor: 'rgba(0,0,0,0.5)',
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
        }}
        aria-label="Anterior"
      >
        <ArrowBackIosIcon />
      </IconButton>

      {/* Botón Siguiente */}
      <IconButton
        onClick={nextSlide}
        sx={{
          position: 'absolute',
          top: '50%',
          right: '20px',
          transform: 'translateY(-50%)',
          color: '#fff',
          backgroundColor: 'rgba(0,0,0,0.5)',
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
        }}
        aria-label="Siguiente"
      >
        <ArrowForwardIosIcon />
      </IconButton>

      {/* Indicadores de Slides */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '8px',
        }}
      >
        {slides.map((_, index) => (
          <Box
            key={index}
            onClick={(e) => { e.stopPropagation(); goToSlide(index); }} // Prevenir propagación
            sx={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: index === currentSlide ? '#fff' : 'rgba(255, 255, 255, 0.5)',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
            aria-label={`Slide ${index + 1}`}
            role="button"
          />
        ))}
      </Box>
    </Box>
  );
};

export default Banner;
