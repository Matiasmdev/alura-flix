# 🚀 Guía de Migración a Vercel Serverless Functions

## ¿Por qué migrar a Vercel?

### ❌ Problemas con Render (capa gratuita)
- ⏱️ Cold start de ~2 minutos
- 💤 Servidor entra en sleep después de 15 min de inactividad
- 🔄 Necesitas servicios externos para mantenerlo activo (UptimeRobot, cron-jobs)

### ✅ Ventajas de Vercel Serverless
- ⚡ **Inicio instantáneo** - No hay cold start de 2 minutos
- 🌍 **Edge Network** - Respuestas ultra rápidas desde el servidor más cercano
- 💰 **Plan gratuito generoso**:
  - 100GB bandwidth/mes
  - Invocaciones ilimitadas
  - Dominios personalizados gratis
- 🔄 **Deploy automático** - Push a GitHub y se actualiza solo
- 🎯 **No necesitas keep-alive** - Las funciones se activan instantáneamente

---

## 📁 Archivos Creados

```
alura-flix/
├── api/
│   └── videos.js          # Serverless function para CRUD de videos
├── src/
│   └── config/
│       └── api.js         # Configuración centralizada de API
├── vercel.json            # Configuración de Vercel
└── .env.example           # Variables de entorno
```

---

## 🔧 Paso 1: Preparar el Proyecto

### 1.1 Crear archivo `.env` local

```bash
# Copia el archivo de ejemplo
cp .env.example .env
```

Contenido de `.env`:
```env
VITE_API_URL=/api
```

### 1.2 Actualizar `.gitignore`

Asegúrate de que `.env` esté en `.gitignore`:
```
.env
.env.local
```

---

## 🌐 Paso 2: Deploy en Vercel

### Opción A: Deploy desde GitHub (Recomendado)

1. **Sube tu código a GitHub** (si no lo has hecho):
   ```bash
   git add .
   git commit -m "Migrar a Vercel Serverless Functions"
   git push origin main
   ```

2. **Ir a Vercel**:
   - Ve a [vercel.com](https://vercel.com)
   - Click en "Sign Up" o "Log In"
   - Usa tu cuenta de GitHub

3. **Importar proyecto**:
   - Click en "Add New..." → "Project"
   - Selecciona tu repositorio `alura-flix`
   - Click en "Import"

4. **Configurar el proyecto**:
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (dejar por defecto)
   - **Build Command**: `npm run build` (automático)
   - **Output Directory**: `dist` (automático)
   - **Environment Variables**: No necesitas agregar nada por ahora

5. **Deploy**:
   - Click en "Deploy"
   - Espera 1-2 minutos
   - ¡Listo! Tu app estará en `https://tu-proyecto.vercel.app`

### Opción B: Deploy desde CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Para producción
vercel --prod
```

---

## 🔄 Paso 3: Actualizar el Frontend

Ahora necesitas actualizar tu frontend para usar la nueva API de Vercel en lugar de Render.

### 3.1 Actualizar `Home.jsx`

Reemplaza las URLs de Render por las nuevas:

```javascript
// ANTES (Render)
const response = await fetch('https://aluraflix-api-2qid.onrender.com/videos');

// DESPUÉS (Vercel)
import { ENDPOINTS } from '../config/api';
const response = await fetch(ENDPOINTS.videos);
```

### 3.2 Actualizar todos los archivos que usan la API

Archivos a modificar:
- `src/pages/Home.jsx`
- `src/pages/VideoDetail.jsx`
- `src/pages/NuevoVideo.jsx`

**Ejemplo completo para `Home.jsx`:**

```javascript
import { ENDPOINTS, apiRequest } from '../config/api';

// Obtener videos
const fetchVideos = async () => {
  try {
    const data = await apiRequest(ENDPOINTS.videos);
    setVideos(data);
  } catch (error) {
    console.error('Error fetching videos:', error);
  }
};

// Eliminar video
const handleDelete = async (id) => {
  try {
    await apiRequest(ENDPOINTS.videoById(id), { method: 'DELETE' });
    setVideos(videos.filter((video) => video.id !== id));
  } catch (error) {
    console.error('Error al eliminar:', error);
  }
};

// Actualizar video
const handleUpdate = async (updatedVideo) => {
  try {
    const data = await apiRequest(ENDPOINTS.videoById(updatedVideo.id), {
      method: 'PUT',
      body: JSON.stringify(updatedVideo),
    });
    setVideos(videos.map((video) => (video.id === data.id ? data : video)));
  } catch (error) {
    console.error('Error al actualizar:', error);
  }
};
```

---

## 🗑️ Paso 4: Limpiar Código Innecesario

Una vez que migres a Vercel, puedes **eliminar** el servicio de keep-alive:

```bash
# Eliminar archivo
rm src/services/keepAlive.js
```

Y remover las importaciones de `App.jsx`:

```javascript
// ELIMINAR estas líneas de App.jsx
import { startKeepAlive, stopKeepAlive } from './services/keepAlive';

useEffect(() => {
  startKeepAlive();
  return () => {
    stopKeepAlive();
  };
}, []);
```

---

## 🧪 Paso 5: Probar la API

### Endpoints disponibles:

1. **GET** `/api/videos` - Obtener todos los videos
2. **GET** `/api/videos?id=123` - Obtener un video específico
3. **POST** `/api/videos` - Crear un nuevo video
4. **PUT** `/api/videos?id=123` - Actualizar un video
5. **DELETE** `/api/videos?id=123` - Eliminar un video

### Probar en el navegador:

```
https://tu-proyecto.vercel.app/api/videos
```

### Probar con curl:

```bash
# Obtener todos los videos
curl https://tu-proyecto.vercel.app/api/videos

# Crear un video
curl -X POST https://tu-proyecto.vercel.app/api/videos \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Test Video",
    "artist": "Test Artist",
    "genre": "rock",
    "url": "https://youtube.com/watch?v=test",
    "thumbnail": "https://img.youtube.com/vi/test/0.jpg",
    "description": "Test description"
  }'
```

---

## ⚠️ Consideraciones Importantes

### 1. Persistencia de Datos

**IMPORTANTE**: Las Serverless Functions de Vercel son **stateless**. Esto significa que:

- ❌ Los cambios en `db.json` **NO persisten** entre invocaciones
- ❌ Si creas/editas/eliminas un video, se perderá en el próximo deploy

**Soluciones:**

#### Opción A: Base de datos externa (Recomendada para producción)

Usa un servicio de base de datos gratuito:

1. **MongoDB Atlas** (Recomendado)
   - 512MB gratis
   - Setup: [mongodb.com/atlas](https://www.mongodb.com/atlas)

2. **Supabase** (PostgreSQL)
   - 500MB gratis
   - Setup: [supabase.com](https://supabase.com)

3. **PlanetScale** (MySQL)
   - 5GB gratis
   - Setup: [planetscale.com](https://planetscale.com)

#### Opción B: Vercel KV (Redis)
- 256MB gratis
- Perfecto para este proyecto
- Setup: [vercel.com/docs/storage/vercel-kv](https://vercel.com/docs/storage/vercel-kv)

#### Opción C: Solo lectura (Para portfolio/demo)

Si solo quieres mostrar el proyecto a recruiters sin permitir ediciones:

1. Elimina los métodos POST, PUT, DELETE de `api/videos.js`
2. Deja solo GET
3. Los datos de `db.json` se leerán correctamente

### 2. CORS

Ya está configurado en `api/videos.js`:
```javascript
res.setHeader('Access-Control-Allow-Origin', '*');
```

### 3. Límites del Plan Gratuito

- ✅ **Bandwidth**: 100GB/mes (más que suficiente)
- ✅ **Invocaciones**: Ilimitadas
- ✅ **Build time**: 6000 minutos/mes
- ⏱️ **Function timeout**: 10 segundos (Hobby), 60 segundos (Pro)

---

## 📊 Comparación: Render vs Vercel

| Característica | Render (Gratis) | Vercel Serverless |
|----------------|-----------------|-------------------|
| Cold Start | ~2 minutos ❌ | Instantáneo ✅ |
| Uptime | Duerme después de 15 min ❌ | Siempre activo ✅ |
| Velocidad | Lenta ⚠️ | Ultra rápida ✅ |
| Deploy | Manual ⚠️ | Automático (Git push) ✅ |
| Bandwidth | 100GB ✅ | 100GB ✅ |
| Dominio | Subdominio .onrender.com | Subdominio .vercel.app ✅ |
| Keep-alive | Necesario ❌ | No necesario ✅ |

---

## 🎯 Resultado Final

**Antes (Render):**
- ⏱️ Primera carga: ~2 minutos
- 🔄 Necesitas UptimeRobot/cron-jobs
- 😰 Mala impresión para recruiters

**Después (Vercel):**
- ⚡ Primera carga: <1 segundo
- 🚀 No necesitas keep-alive
- 😎 Experiencia profesional

---

## 🆘 Troubleshooting

### Error: "Module not found"
```bash
# Asegúrate de tener todas las dependencias
npm install
```

### Error: "Cannot read db.json"
- Verifica que `db.json` esté en la raíz del proyecto
- Verifica que esté en el repositorio (no en `.gitignore`)

### Error: CORS
- Ya está configurado en `api/videos.js`
- Si persiste, verifica que las headers estén correctas

### Los datos no persisten
- Esto es normal en Vercel Serverless (ver sección "Persistencia de Datos")
- Usa una base de datos externa para persistencia real

---

## 📚 Recursos Adicionales

- [Vercel Docs - Serverless Functions](https://vercel.com/docs/functions)
- [Vercel Docs - Environment Variables](https://vercel.com/docs/environment-variables)
- [Vercel Docs - Storage Options](https://vercel.com/docs/storage)

---

**¿Necesitas ayuda?** Abre un issue en el repositorio o consulta la documentación de Vercel.

**Última actualización:** 2025-10-03
