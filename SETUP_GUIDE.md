# 🚀 Guía de Configuración - AluraFlix

## 📋 Tabla de Contenidos
1. [Configurar UptimeRobot (Mantener servidor activo)](#1-configurar-uptimerobot)
2. [Conectar proyecto con GitHub](#2-conectar-con-github)
3. [Deploy del Frontend](#3-deploy-del-frontend)

---

## 1. 🤖 Configurar UptimeRobot

### ¿Por qué UptimeRobot?
Tu servidor de Render (capa gratuita) entra en "sleep" después de 15 minutos de inactividad y tarda ~2 minutos en despertar. UptimeRobot lo mantiene activo 24/7 haciendo ping cada 5 minutos.

### Pasos (2 minutos):

1. **Ir a [UptimeRobot.com](https://uptimerobot.com/)**

2. **Crear cuenta gratuita**
   - Click en "Sign Up"
   - Usa tu email o GitHub

3. **Crear un nuevo monitor**
   - Click en "Add New Monitor"
   - Configurar así:
     ```
     Monitor Type: HTTP(s)
     Friendly Name: AluraFlix API
     URL: https://aluraflix-api-2qid.onrender.com/videos
     Monitoring Interval: 5 minutes
     ```
   - Click en "Create Monitor"

4. **¡Listo! ✅**
   - El servidor ahora se mantendrá activo 24/7
   - Recibirás alertas por email si el servidor cae

### Verificar que funciona:
- Espera 20 minutos sin visitar tu app
- Abre `https://aluraflix-api-2qid.onrender.com/videos`
- Debería cargar **instantáneamente** (no tardar 2 minutos)

### Ventajas del plan gratuito:
- ✅ 50 monitores gratis
- ✅ Ping cada 5 minutos
- ✅ Sin límite de requests (no da error 429)
- ✅ Dashboard con estadísticas
- ✅ Alertas por email

---

## 2. 🐙 Conectar con GitHub

### Situación actual:
- ✅ Tienes un repo para la API en Render
- ❌ No tienes repo para el frontend (este proyecto)

### Crear repositorio para el frontend:

#### Opción A: Desde GitHub Web (Más fácil)

1. **Ir a [GitHub.com](https://github.com)**

2. **Crear nuevo repositorio**
   - Click en el botón "+" arriba a la derecha → "New repository"
   - Configurar:
     ```
     Repository name: alura-flix-frontend
     Description: AluraFlix - Plataforma de videos musicales
     Visibility: Public (para que recruiters puedan verlo)
     ✅ Add a README file (opcional)
     ```
   - Click en "Create repository"

3. **Conectar tu proyecto local con GitHub**
   
   Abre la terminal en Windsurf (Ctrl + `) y ejecuta:

   ```bash
   # Inicializar git (si no está inicializado)
   git init
   
   # Agregar todos los archivos
   git add .
   
   # Hacer el primer commit
   git commit -m "Initial commit - AluraFlix frontend"
   
   # Conectar con el repo remoto (reemplaza TU_USUARIO con tu usuario de GitHub)
   git remote add origin https://github.com/TU_USUARIO/alura-flix-frontend.git
   
   # Subir el código
   git branch -M main
   git push -u origin main
   ```

4. **¡Listo! Tu código está en GitHub ✅**

#### Opción B: Desde Windsurf (Más rápido)

1. **Abrir Source Control en Windsurf**
   - Click en el ícono de Git en la barra lateral (o Ctrl+Shift+G)
   - Click en "Publish to GitHub"

2. **Configurar el repositorio**
   - Nombre: `alura-flix-frontend`
   - Visibilidad: Public
   - Click en "Publish"

3. **¡Listo! ✅**

### Verificar la conexión:

```bash
# Ver el repositorio remoto
git remote -v

# Debería mostrar:
# origin  https://github.com/TU_USUARIO/alura-flix-frontend.git (fetch)
# origin  https://github.com/TU_USUARIO/alura-flix-frontend.git (push)
```

---

## 3. 🌐 Deploy del Frontend

Una vez que tu código esté en GitHub, puedes deployar el frontend en:

### Opción A: Vercel (Recomendado)

1. **Ir a [Vercel.com](https://vercel.com)**
2. **Login con GitHub**
3. **Click en "Add New..." → "Project"**
4. **Seleccionar `alura-flix-frontend`**
5. **Click en "Deploy"**
6. ¡Listo! Tu app estará en `https://tu-proyecto.vercel.app`

**Ventajas:**
- ✅ Deploy automático (cada push a GitHub)
- ✅ HTTPS gratis
- ✅ Dominio personalizado gratis
- ✅ Ultra rápido (CDN global)

### Opción B: Netlify

1. **Ir a [Netlify.com](https://netlify.com)**
2. **Login con GitHub**
3. **Click en "Add new site" → "Import an existing project"**
4. **Seleccionar `alura-flix-frontend`**
5. **Configurar:**
   ```
   Build command: npm run build
   Publish directory: dist
   ```
6. **Click en "Deploy"**

---

## 📊 Arquitectura Final

```
┌─────────────────────────────────────────────────┐
│                                                 │
│  Frontend (Vercel/Netlify)                     │
│  https://tu-proyecto.vercel.app                │
│                                                 │
└────────────────┬────────────────────────────────┘
                 │
                 │ Fetch API
                 ↓
┌─────────────────────────────────────────────────┐
│                                                 │
│  Backend API (Render)                          │
│  https://aluraflix-api-2qid.onrender.com       │
│                                                 │
└────────────────┬────────────────────────────────┘
                 ↑
                 │ Ping cada 5 min
                 │
┌────────────────┴────────────────────────────────┐
│                                                 │
│  UptimeRobot (Mantiene servidor activo)       │
│  + KeepAlive (Respaldo desde el frontend)     │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## ✅ Checklist Final

- [ ] UptimeRobot configurado y monitoreando la API
- [ ] Proyecto conectado con GitHub
- [ ] Frontend deployado en Vercel/Netlify
- [ ] Verificar que la app carga rápido (sin esperar 2 minutos)

---

## 🎯 Resultado Esperado

**Antes:**
- ⏱️ Primera carga: ~2 minutos
- 😰 Mala impresión para recruiters

**Después:**
- ⚡ Primera carga: <2 segundos
- 😎 Experiencia profesional
- 🚀 Servidor siempre activo

---

## 🆘 Troubleshooting

### Error: "git: command not found"
- Instala Git: [git-scm.com/downloads](https://git-scm.com/downloads)

### Error: "Permission denied (publickey)"
- Usa HTTPS en lugar de SSH: `https://github.com/TU_USUARIO/alura-flix-frontend.git`

### Error: "Failed to push"
- Verifica que el repo existe en GitHub
- Verifica que tienes permisos de escritura

### El servidor sigue tardando 2 minutos
- Verifica que UptimeRobot esté activo (debería mostrar "Up")
- Espera 5-10 minutos para que UptimeRobot haga el primer ping

---

## 📚 Recursos Adicionales

- [Documentación de Git](https://git-scm.com/doc)
- [Guía de GitHub](https://guides.github.com/)
- [Documentación de Vercel](https://vercel.com/docs)
- [UptimeRobot FAQ](https://uptimerobot.com/faq/)

---

**¿Necesitas ayuda?** Abre un issue en el repositorio.

**Última actualización:** 2025-10-03
