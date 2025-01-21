// src/components/EditDialog.jsx

import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
  Box,
} from '@mui/material';
import PropTypes from 'prop-types';

const EditDialog = ({ open, onClose, video, onSave }) => {
  const [formData, setFormData] = useState({
    title: video.title,
    genre: video.genre,
    thumbnail: video.thumbnail,
    url: video.url,
    description: video.description,
    artist: video.artist,
  });

  // Actualizar formData cuando el diálogo se abre o el video cambia
  useEffect(() => {
    if (open) {
      setFormData({
        title: video.title,
        genre: video.genre,
        thumbnail: video.thumbnail,
        url: video.url,
        description: video.description,
        artist: video.artist,
      });
    }
  }, [open, video]);

  const genres = ['rock', 'pop', 'edm', 'blues', 'clasica', 'punk', 'opera'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGuardar = () => {
    // Validación básica
    if (
      !formData.title ||
      !formData.genre ||
      !formData.thumbnail ||
      !formData.url ||
      !formData.description ||
      !formData.artist
    ) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    const updatedVideo = {
      ...video,
      title: formData.title,
      genre: formData.genre,
      thumbnail: formData.thumbnail,
      url: formData.url,
      description: formData.description,
      artist: formData.artist,
    };

    onSave(updatedVideo);
  };

  const handleLimpiar = () => {
    setFormData({
      title: '',
      genre: '',
      thumbnail: '',
      url: '',
      description: '',
      artist: '',
    });
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Editar Tarjeta</DialogTitle>
      <DialogContent>
        <Box component="form" sx={{ mt: 2 }}>
          <TextField
            label="Título"
            name="title"
            value={formData.title}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            select
            label="Género"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            fullWidth
            margin="normal"
          >
            {genres.map((genre) => (
              <MenuItem key={genre} value={genre}>
                {genre.charAt(0).toUpperCase() + genre.slice(1)}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="URL de la Imagen"
            name="thumbnail"
            value={formData.thumbnail}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Enlace del Video"
            name="url"
            value={formData.url}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Descripción"
            name="description"
            value={formData.description}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
          <TextField
            label="Artista"
            name="artist"
            value={formData.artist}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" color="secondary" onClick={handleLimpiar}>
          Limpiar
        </Button>
        <Button variant="contained" color="primary" onClick={handleGuardar}>
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

// Definir PropTypes para asegurar que las props necesarias se pasen correctamente
EditDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  video: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
  }).isRequired,
  onSave: PropTypes.func.isRequired,
};

export default EditDialog;
