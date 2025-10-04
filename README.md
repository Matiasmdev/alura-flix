# 🎬 AluraFlix

Plataforma web para explorar y gestionar videos musicales de diferentes géneros.

## 🚀 Demo

- **Frontend**: [Próximamente en Vercel]
- **API**: https://aluraflix-api-2qid.onrender.com/videos

## ✨ Características

- 📺 Explorar videos por género (Rock, Pop, Clásica, Punk, EDM, etc.)
- ➕ Agregar nuevos videos
- ✏️ Editar videos existentes
- 🗑️ Eliminar videos
- 📱 Diseño responsive con Material-UI
- ⚡ Servidor siempre activo con UptimeRobot

## 🛠️ Tecnologías

- **Frontend**: React 18 + Vite
- **UI**: Material-UI (MUI) + Styled Components
- **Routing**: React Router DOM v7
- **Backend**: JSON Server en Render
- **Monitoring**: UptimeRobot + KeepAlive

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/TU_USUARIO/alura-flix-frontend.git

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build
```

## 🌐 Deploy

Ver la guía completa en [`SETUP_GUIDE.md`](./SETUP_GUIDE.md)

### Quick Start:
1. Configurar UptimeRobot para mantener la API activa
2. Conectar con GitHub
3. Deploy en Vercel/Netlify

## 📁 Estructura del Proyecto

```
alura-flix/
├── src/
│   ├── components/      # Componentes reutilizables
│   ├── pages/          # Páginas de la app
│   ├── services/       # Servicios (KeepAlive)
│   └── App.jsx         # Componente principal
├── public/             # Archivos estáticos
├── db.json            # Base de datos de ejemplo
└── SETUP_GUIDE.md     # Guía de configuración
```

## 🎯 Roadmap

- [x] CRUD de videos
- [x] Filtrado por género
- [x] Diseño responsive
- [x] KeepAlive para servidor
- [ ] Deploy en Vercel
- [ ] Autenticación de usuarios
- [ ] Favoritos
- [ ] Búsqueda avanzada

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto fue creado como parte del curso de Alura.

## 👤 Autor

**Tu Nombre**
- GitHub: [@TU_USUARIO](https://github.com/TU_USUARIO)
- LinkedIn: [Tu LinkedIn](https://linkedin.com/in/tu-perfil)

---

⭐ Si te gustó el proyecto, dale una estrella en GitHub!
