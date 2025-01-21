// src/pages/Home.jsx

import { useState, useEffect } from 'react';
import { Box, Grid, Container, Chip } from '@mui/material';
import VideoCard from '../components/VideoCard/VideoCard'; // Asegúrate de que la ruta es correcta
import Banner from '../components/Banner/Banner'; // Asegúrate de que la ruta es correcta

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  // Función para obtener videos desde JSON Server
  const fetchVideos = async () => {
    try {
      const response = await fetch('https://aluraflix-api-2qid.onrender.com/videos');
      if (!response.ok) {
        throw new Error('Error al obtener los videos.');
      }
      const data = await response.json();
      setVideos(data);
    } catch (error) {
      console.error('Error fetching videos:', error);
      // Aquí podrías implementar un mensaje de error para el usuario
    }
  };

  // Función para agrupar videos por género
  const groupVideosByGenre = (videos) => {
    return videos.reduce((acc, video) => {
      if (!acc[video.genre]) {
        acc[video.genre] = [];
      }
      acc[video.genre].push(video);
      return acc;
    }, {});
  };

  const groupedVideos = groupVideosByGenre(videos);

  // Función para eliminar un video
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://aluraflix-api-2qid.onrender.com/videos/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Actualizar el estado local eliminando el video
        setVideos(videos.filter((video) => video.id !== id));
        // Podrías agregar un mensaje de éxito aquí
      } else {
        throw new Error('Error al eliminar el video.');
      }
    } catch (error) {
      console.error('Error al eliminar el video:', error);
      // Aquí podrías implementar un mensaje de error para el usuario
    }
  };

  // Función para actualizar un video
  const handleUpdate = async (updatedVideo) => {
    try {
      const response = await fetch(`https://aluraflix-api-2qid.onrender.com/videos/${updatedVideo.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedVideo),
      });

      if (response.ok) {
        const data = await response.json();
        // Actualizar el estado local reemplazando el video actualizado
        setVideos(videos.map((video) => (video.id === data.id ? data : video)));
        // Podrías agregar un mensaje de éxito aquí
      } else {
        throw new Error('Error al actualizar el video.');
      }
    } catch (error) {
      console.error('Error al actualizar el video:', error);
      // Aquí podrías implementar un mensaje de error para el usuario
    }
  };

  return (
    <Box>
      {/* Banner */}
      <Banner />

      {/* Contenedor Principal */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {/* Iterar sobre cada género y renderizar su sección */}
        {Object.keys(groupedVideos).map((genre) => (
          <Box key={genre} sx={{ mb: 6 }}>
            {/* Título del Género */}
            <Chip
              label={genre.charAt(0).toUpperCase() + genre.slice(1)}
              color="primary"
              size="large"
              sx={{
                mb: 2,
                fontSize: {
                  xs: '1rem', // Mobile
                  sm: '1.2rem', // Tablet
                  md: '1.5rem', // Desktop
                },
              }}
            />

            {/* Fila de Videos */}
            <Grid container spacing={4}>
              {groupedVideos[genre].map((video) => (
                <Grid item xs={12} sm={6} md={4} key={video.id}>
                  <VideoCard
                    video={video}
                    onDelete={handleDelete}
                    onUpdate={handleUpdate}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default Home;

