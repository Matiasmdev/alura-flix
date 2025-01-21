// src/components/VideoCard.jsx

import { useState } from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
  IconButton,
  Tooltip,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EditDialog from '../EditDialog/EditDialog';
import ConfirmDialog from '../ConfirmDialog/ConfirmDialog';

const VideoCard = ({ video, onDelete, onUpdate }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);

  // Manejar la apertura del diálogo de edición
  const handleEditOpen = () => {
    setOpenEdit(true);
  };

  // Manejar el cierre del diálogo de edición
  const handleEditClose = () => {
    setOpenEdit(false);
  };

  // Manejar la actualización del video
  const handleUpdate = (updatedVideo) => {
    onUpdate(updatedVideo);
    setOpenEdit(false);
  };

  // Manejar la apertura del diálogo de confirmación de borrar
  const handleDelete = () => {
    setOpenConfirm(true);
  };

  // Manejar el cierre del diálogo de confirmación de borrar
  const handleConfirmClose = () => {
    setOpenConfirm(false);
  };

  // Manejar la confirmación de borrar
  const handleConfirmDelete = () => {
    onDelete(video.id);
    setOpenConfirm(false);
  };

  return (
    <Card sx={{ height: '100%', backgroundColor: 'background.paper', boxShadow: 3 }}>
      {/* Área clicable para navegar al video */}
      <CardActionArea
        component="a"
        href={video.url}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ textDecoration: 'none' }} // Elimina el subrayado del enlace
      >
        <CardMedia
          component="img"
          height="180"
          image={video.thumbnail}
          alt={video.title}
          sx={{ objectFit: 'cover', objectPosition: 'top' }} // Alinea la imagen hacia la parte superior
        />
        <CardContent sx={{ p: 2 }}>
          <Typography variant="h6" component="div" sx={{ marginBottom: '0.5rem' }}>
            {video.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '1rem' }}>
            {video.artist}
          </Typography>
        </CardContent>
      </CardActionArea>

      {/* Contenedor para los botones de Editar y Borrar */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
        <Tooltip title="Editar">
          <IconButton
            aria-label="editar"
            color="primary"
            onClick={handleEditOpen}
            size="small"
          >
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Borrar">
          <IconButton
            aria-label="borrar"
            color="error"
            onClick={handleDelete}
            size="small"
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>

      {/* Diálogo de Edición */}
      <EditDialog
        open={openEdit}
        onClose={handleEditClose}
        video={video}
        onSave={handleUpdate}
      />

      {/* Diálogo de Confirmación de Borrar */}
      <ConfirmDialog
        open={openConfirm}
        onClose={handleConfirmClose}
        onConfirm={handleConfirmDelete}
        title="Confirmar Eliminación"
        content={`¿Estás seguro de que deseas eliminar el video "${video.title}"? Esta acción no se puede deshacer.`}
      />
    </Card>
  );
};

export default VideoCard;
