# 🐙 Crear Repositorio en GitHub - Paso a Paso

## 📋 Pasos para Crear el Repositorio

### 1️⃣ Crear Repositorio en GitHub (Web)

1. **Ir a GitHub**
   - Abre tu navegador
   - Ve a: https://github.com/new

2. **Configurar el repositorio**
   ```
   Repository name: alura-flix
   Description: 🎬 Plataforma web para explorar y gestionar videos musicales
   Visibility: ✅ Public (para que recruiters puedan verlo)
   
   ❌ NO marques ninguna de estas opciones:
   ❌ Add a README file
   ❌ Add .gitignore
   ❌ Choose a license
   ```

3. **Click en "Create repository"**

4. **Copiar la URL del repositorio**
   - Verás una URL como: `https://github.com/Matiasdev/alura-flix.git`
   - **Cópiala** (la necesitarás en el siguiente paso)

---

### 2️⃣ Conectar tu Proyecto Local con GitHub

Abre la terminal en Windsurf (Ctrl + `) y ejecuta estos comandos **UNO POR UNO**:

```bash
# 1. Ver el estado actual
git status

# 2. Agregar todos los archivos
git add .

# 3. Hacer el primer commit
git commit -m "Initial commit - AluraFlix con UptimeRobot + KeepAlive"

# 4. Conectar con GitHub (REEMPLAZA con TU URL que copiaste)
git remote add origin https://github.com/Matiasdev/alura-flix.git

# 5. Verificar que se conectó correctamente
git remote -v

# 6. Subir el código a GitHub
git push -u origin main
```

---

### 3️⃣ Verificar que Funcionó

1. **Ir a tu repositorio en GitHub**
   - https://github.com/Matiasdev/alura-flix

2. **Deberías ver:**
   - ✅ Todos tus archivos
   - ✅ El README.md con la descripción
   - ✅ La carpeta `src/` con tu código

---

## 🆘 Si Algo Sale Mal

### Error: "remote origin already exists"

```bash
# Ver qué remote tienes
git remote -v

# Si apunta a un repo que no existe, eliminarlo (SOLO la referencia local)
git remote remove origin

# Luego agregar el nuevo
git remote add origin https://github.com/Matiasdev/alura-flix.git
```

### Error: "failed to push"

```bash
# Forzar el push (solo la primera vez)
git push -u origin main --force
```

### Error: "Authentication failed"

Opción 1: **Usar GitHub CLI** (Más fácil)
```bash
# Instalar GitHub CLI
winget install --id GitHub.cli

# Login
gh auth login

# Seguir las instrucciones en pantalla
```

Opción 2: **Usar Personal Access Token**
1. Ir a: https://github.com/settings/tokens
2. Click en "Generate new token (classic)"
3. Seleccionar permisos: `repo`
4. Copiar el token
5. Usar el token como contraseña cuando Git lo pida

---

## 📝 Comandos Resumidos

```bash
# Todo en uno (copia y pega esto):
git add . && git commit -m "Initial commit - AluraFlix" && git remote add origin https://github.com/Matiasdev/alura-flix.git && git push -u origin main
```

**IMPORTANTE:** Reemplaza `Matiasdev` con tu usuario real de GitHub si es diferente.

---

## ✅ Resultado Final

Después de ejecutar estos comandos:
- ✅ Tu código estará en GitHub
- ✅ Podrás compartir el link con recruiters
- ✅ Podrás hacer deploy en Vercel/Netlify
- ✅ Tendrás backup de tu código

---

## 🎯 Próximos Pasos

Una vez que tu código esté en GitHub:

1. **Configurar UptimeRobot** (ver `SETUP_GUIDE.md`)
2. **Deploy en Vercel** (ver `SETUP_GUIDE.md`)
3. **Actualizar el README** con el link de tu deploy

---

**¿Necesitas ayuda?** Ejecuta los comandos uno por uno y avísame si hay algún error.
