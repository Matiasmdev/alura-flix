// src/components/ConfirmDialog.jsx

import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';
import PropTypes from 'prop-types';

const ConfirmDialog = ({ open, onClose, onConfirm, title, content }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" variant="outlined">
          Cancelar
        </Button>
        <Button onClick={onConfirm} color="error" variant="contained">
          Borrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

// Definir PropTypes para asegurar que las props necesarias se pasen correctamente
ConfirmDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ConfirmDialog;
