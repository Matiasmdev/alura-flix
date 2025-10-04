# 🎬 AluraFlix - Plataforma de Videos Musicales

<div align="center">

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.0.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Material-UI](https://img.shields.io/badge/Material--UI-6.4.0-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![Render](https://img.shields.io/badge/Render-API-46E3B7?style=for-the-badge&logo=render&logoColor=white)

**Una plataforma moderna para explorar, gestionar y organizar videos musicales por género**

[🚀 Ver Demo](#-demo) • [✨ Características](#-características) • [🛠️ Tecnologías](#️-tecnologías) • [📦 Instalación](#-instalación)

</div>

---

## 📖 Sobre el Proyecto

AluraFlix es una aplicación web full-stack que permite a los usuarios explorar y gestionar una colección de videos musicales organizados por géneros. El proyecto implementa un **CRUD completo** (Create, Read, Update, Delete) con una interfaz moderna y responsive, conectada a una API REST desplegada en Render.

### 🎯 Objetivo del Proyecto

Demostrar habilidades en:
- ✅ Desarrollo Frontend con React y Material-UI
- ✅ Consumo de APIs REST
- ✅ Operaciones CRUD completas
- ✅ Gestión de estado y efectos
- ✅ Diseño responsive y UX
- ✅ Deploy y optimización de rendimiento

---

## 🚀 Demo

- **🌐 Frontend**: [Próximamente en Vercel]
- **🔗 API REST**: [https://aluraflix-api-2qid.onrender.com/videos](https://aluraflix-api-2qid.onrender.com/videos)
- **📂 Repositorio**: [https://github.com/Matiasmdev/alura-flix](https://github.com/Matiasmdev/alura-flix)

---

## ✨ Características

### 🎥 Gestión Completa de Videos (CRUD)

| Operación | Descripción | Endpoint |
|-----------|-------------|----------|
| **📖 Read** | Visualizar todos los videos organizados por género | `GET /videos` |
| **➕ Create** | Agregar nuevos videos con título, artista, género, thumbnail y descripción | `POST /videos` |
| **✏️ Update** | Editar información de videos existentes | `PUT /videos/:id` |
| **🗑️ Delete** | Eliminar videos de la colección | `DELETE /videos/:id` |

### 🎨 Interfaz y Experiencia

- 📱 **Diseño Responsive**: Adaptado para móviles, tablets y desktop
- 🎭 **Organización por Género**: Rock, Pop, Clásica, Punk, EDM, Blues, Opera
- 🎯 **Navegación Intuitiva**: React Router para SPA fluida
- 🌈 **UI Moderna**: Material-UI con componentes personalizados
- ⚡ **Carga Rápida**: Optimización con Vite y lazy loading

### 🔧 Funcionalidades Técnicas

- 🔄 **Estado Global**: Gestión eficiente con React Hooks
- 🌐 **API REST**: Comunicación asíncrona con fetch
- ⏱️ **Keep-Alive**: Sistema de ping para mantener el servidor activo
- 🎨 **Styled Components**: Estilos modulares y reutilizables
- 📊 **Validación de Formularios**: Control de datos antes de enviar

---

## 🛠️ Tecnologías

### Frontend
```
React 18.3.1          → Librería principal
Vite 6.0.5            → Build tool y dev server
Material-UI 6.4.0     → Componentes UI
Styled Components     → CSS-in-JS
React Router DOM 7.1  → Navegación SPA
```

### Backend
```
JSON Server           → API REST simulada
Render                → Hosting del backend
PostgreSQL/File DB    → Persistencia de datos
```

### DevOps & Monitoring
```
UptimeRobot           → Monitoreo 24/7 del servidor
KeepAlive Service     → Sistema de respaldo
Git & GitHub          → Control de versiones
ESLint                → Linting y calidad de código
```

---

## 📦 Instalación

### Prerrequisitos
- Node.js 18+ 
- npm o yarn
- Git

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/Matiasmdev/alura-flix.git

# 2. Entrar al directorio
cd alura-flix

# 3. Instalar dependencias
npm install

# 4. Ejecutar en modo desarrollo
npm run dev

# 5. Abrir en el navegador
# http://localhost:5173
```

### Build para Producción

```bash
# Generar build optimizado
npm run build

# Preview del build
npm run preview
```

---

## 🏗️ Arquitectura del Proyecto

```
alura-flix/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Header/         # Navegación principal
│   │   ├── Footer/         # Pie de página
│   │   ├── Banner/         # Banner hero
│   │   ├── VideoCard/      # Tarjeta de video (con CRUD)
│   │   └── GlobalStyles/   # Estilos globales
│   │
│   ├── pages/              # Páginas de la aplicación
│   │   ├── Home.jsx        # Página principal (Read)
│   │   ├── NuevoVideo.jsx  # Formulario (Create)
│   │   └── VideoDetail.jsx # Detalle de video
│   │
│   ├── services/           # Servicios y utilidades
│   │   └── keepAlive.js    # Sistema de keep-alive
│   │
│   ├── App.jsx             # Componente raíz
│   └── main.jsx            # Entry point
│
├── public/                 # Assets estáticos
├── db.json                # Base de datos de ejemplo
└── package.json           # Dependencias
```

---

## 🔌 API Endpoints

### Base URL
```
https://aluraflix-api-2qid.onrender.com
```

### Endpoints Disponibles

#### 📖 Obtener todos los videos
```http
GET /videos
```
**Respuesta:**
```json
[
  {
    "id": "1",
    "title": "Let It Be",
    "artist": "The Beatles",
    "genre": "rock",
    "thumbnail": "https://img.youtube.com/vi/QDYfEBY9NM4/0.jpg",
    "url": "https://www.youtube.com/watch?v=QDYfEBY9NM4",
    "description": "The Beatles performing their classic hit"
  }
]
```

#### ➕ Crear un nuevo video
```http
POST /videos
Content-Type: application/json

{
  "title": "Título del video",
  "artist": "Nombre del artista",
  "genre": "rock",
  "thumbnail": "URL de la imagen",
  "url": "URL del video",
  "description": "Descripción"
}
```

#### ✏️ Actualizar un video
```http
PUT /videos/:id
Content-Type: application/json

{
  "title": "Nuevo título",
  ...
}
```

#### 🗑️ Eliminar un video
```http
DELETE /videos/:id
```

---

## 🎯 Funcionalidades Implementadas

### ✅ CRUD Completo

- [x] **Create**: Formulario para agregar nuevos videos
- [x] **Read**: Visualización de todos los videos por género
- [x] **Update**: Modal de edición con validación
- [x] **Delete**: Confirmación antes de eliminar

### ✅ Optimizaciones

- [x] Keep-Alive para mantener el servidor activo
- [x] Manejo de errores y estados de carga
- [x] Validación de formularios
- [x] Diseño responsive
- [x] Optimización de imágenes

### 🚧 Próximas Mejoras

- [ ] Autenticación de usuarios
- [ ] Sistema de favoritos
- [ ] Búsqueda y filtros avanzados
- [ ] Paginación
- [ ] Modo oscuro/claro
- [ ] Compartir en redes sociales

---

## 🚀 Deploy

### Frontend (Vercel)
```bash
# Conectar con Vercel
vercel

# Deploy a producción
vercel --prod
```

### Backend (Render)
El backend ya está desplegado en Render con:
- ✅ Auto-deploy desde GitHub
- ✅ Monitoreo con UptimeRobot
- ✅ HTTPS habilitado
- ✅ CORS configurado

---

## 📸 Screenshots

### Página Principal
![Home Page](https://via.placeholder.com/800x400?text=Home+Page)

### Formulario de Nuevo Video
![New Video Form](https://via.placeholder.com/800x400?text=New+Video+Form)

### Edición de Video
![Edit Video](https://via.placeholder.com/800x400?text=Edit+Video)

---

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: nueva característica'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto fue desarrollado como parte del programa de formación de **Alura Latam**.

---

## 👨‍💻 Autor

**Matías - Frontend Developer**

- 🐙 GitHub: [@Matiasmdev](https://github.com/Matiasmdev)
- 💼 LinkedIn: [Tu LinkedIn](https://linkedin.com/in/tu-perfil)
- 📧 Email: matiasfrontend@gmail.com
- 🌐 Portfolio: [Tu Portfolio](https://tu-portfolio.com)

---

## 🙏 Agradecimientos

- [Alura Latam](https://www.aluracursos.com/) - Por el programa de formación
- [Material-UI](https://mui.com/) - Por los componentes UI
- [Render](https://render.com/) - Por el hosting gratuito
- [UptimeRobot](https://uptimerobot.com/) - Por el monitoreo

---

<div align="center">

### ⭐ Si te gustó el proyecto, dale una estrella en GitHub!

**[⬆ Volver arriba](#-aluraflix---plataforma-de-videos-musicales)**

</div>
