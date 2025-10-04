// api/videos.js
// Vercel Serverless Function para manejar operaciones CRUD de videos

import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Obtener la ruta del directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Ruta al archivo db.json (en la raíz del proyecto)
const DB_PATH = join(__dirname, '..', 'db.json');

// Helper para leer la base de datos
const readDB = () => {
  try {
    const data = fs.readFileSync(DB_PATH, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error leyendo db.json:', error);
    return { videos: [] };
  }
};

// Helper para escribir en la base de datos
const writeDB = (data) => {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error('Error escribiendo db.json:', error);
    return false;
  }
};

// Helper para generar IDs únicos
const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

// Configurar CORS
const setCorsHeaders = (res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
};

export default async function handler(req, res) {
  // Configurar CORS
  setCorsHeaders(res);

  // Manejar preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const db = readDB();

  try {
    switch (req.method) {
      // GET /api/videos - Obtener todos los videos
      // GET /api/videos?id=123 - Obtener un video específico
      case 'GET': {
        const { id } = req.query;

        if (id) {
          // Buscar video por ID
          const video = db.videos.find((v) => v.id === id);
          if (!video) {
            return res.status(404).json({ error: 'Video no encontrado' });
          }
          return res.status(200).json(video);
        }

        // Retornar todos los videos
        return res.status(200).json(db.videos);
      }

      // POST /api/videos - Crear un nuevo video
      case 'POST': {
        const newVideo = req.body;

        // Validar datos requeridos
        if (!newVideo.title || !newVideo.url || !newVideo.genre) {
          return res.status(400).json({
            error: 'Faltan campos requeridos: title, url, genre',
          });
        }

        // Generar ID único
        newVideo.id = generateId();

        // Agregar video a la base de datos
        db.videos.push(newVideo);

        // Guardar cambios
        if (!writeDB(db)) {
          return res.status(500).json({ error: 'Error al guardar el video' });
        }

        return res.status(201).json(newVideo);
      }

      // PUT /api/videos?id=123 - Actualizar un video
      case 'PUT': {
        const { id } = req.query;
        const updatedData = req.body;

        if (!id) {
          return res.status(400).json({ error: 'ID requerido' });
        }

        // Buscar índice del video
        const videoIndex = db.videos.findIndex((v) => v.id === id);

        if (videoIndex === -1) {
          return res.status(404).json({ error: 'Video no encontrado' });
        }

        // Actualizar video (mantener el ID original)
        db.videos[videoIndex] = { ...updatedData, id };

        // Guardar cambios
        if (!writeDB(db)) {
          return res.status(500).json({ error: 'Error al actualizar el video' });
        }

        return res.status(200).json(db.videos[videoIndex]);
      }

      // DELETE /api/videos?id=123 - Eliminar un video
      case 'DELETE': {
        const { id } = req.query;

        if (!id) {
          return res.status(400).json({ error: 'ID requerido' });
        }

        // Filtrar videos (eliminar el que coincida con el ID)
        const initialLength = db.videos.length;
        db.videos = db.videos.filter((v) => v.id !== id);

        if (db.videos.length === initialLength) {
          return res.status(404).json({ error: 'Video no encontrado' });
        }

        // Guardar cambios
        if (!writeDB(db)) {
          return res.status(500).json({ error: 'Error al eliminar el video' });
        }

        return res.status(200).json({ message: 'Video eliminado exitosamente' });
      }

      default:
        return res.status(405).json({ error: 'Método no permitido' });
    }
  } catch (error) {
    console.error('Error en la API:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}
