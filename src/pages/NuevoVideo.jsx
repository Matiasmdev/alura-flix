// src/pages/NuevoVideo.jsx

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Grid,
} from '@mui/material';

const NuevoVideo = () => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [artist, setArtist] = useState(''); // Nuevo campo para el artista

  const genres = ['rock', 'pop', 'edm', 'blues', 'clasica', 'punk', 'opera', 'otro'];

  const handleAgregar = async () => {
    // Validación básica
    if (!title || !genre || !thumbnail || !url || !description || !artist) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    const nuevoVideo = {
      title,        // Cambiado de 'titulo' a 'title'
      genre,        // Cambiado de 'categoria' a 'genre'
      thumbnail,    // Cambiado de 'enlaceImagen' a 'thumbnail'
      url,          // Cambiado de 'enlaceVideo' a 'url'
      description,  // Cambiado de 'descripcion' a 'description'
      artist,       // Nuevo campo
    };

    try {
      const response = await fetch('https://aluraflix-api-2qid.onrender.com/videos', { // URL actualizada
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoVideo),
      });

      if (response.ok) {
        alert('Video agregado exitosamente.');
        limpiarFormulario();
      } else {
        alert('Error al agregar el video.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al agregar el video.');
    }
  };

  const limpiarFormulario = () => {
    setTitle('');
    setGenre('');
    setThumbnail('');
    setUrl('');
    setDescription('');
    setArtist(''); // Limpiar el campo del artista
  };

  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh', p: 0, m: 0 }}>
      <Container maxWidth="sm" disableGutters>
        <Box sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom align="center">
            Nuevo Video de Título
          </Typography>
          <Typography variant="body1" gutterBottom align="center">
            Completa el formulario para agregar un nuevo video
          </Typography>
          <Box component="form" noValidate autoComplete="off">
            <Grid container spacing={2}>
              {/* Ingrese Título */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Ingrese Título"
                  variant="outlined"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Grid>

              {/* Seleccione Género */}
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="genre-label">Seleccione Género</InputLabel>
                  <Select
                    labelId="genre-label"
                    label="Seleccione Género"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                  >
                    {genres.map((cat, index) => (
                      <MenuItem value={cat} key={index}>
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              {/* Enlace de Imagen */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Enlace de Imagen"
                  variant="outlined"
                  value={thumbnail}
                  onChange={(e) => setThumbnail(e.target.value)}
                />
              </Grid>

              {/* Enlace del Video */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Ingrese el Enlace del Video"
                  variant="outlined"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </Grid>

              {/* Descripción */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="De qué se trata este video"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Grid>

              {/* Artista */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Artista"
                  variant="outlined"
                  value={artist}
                  onChange={(e) => setArtist(e.target.value)}
                />
              </Grid>

              {/* Botones */}
              <Grid item xs={12} container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary" onClick={handleAgregar}>
                    Agregar Video
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="secondary" onClick={limpiarFormulario}>
                    Limpiar
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NuevoVideo;
