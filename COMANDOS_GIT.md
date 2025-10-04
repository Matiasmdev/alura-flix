# 📝 Comandos Git - Guía Rápida

## 🎯 Situación Actual

✅ Ya tienes Git configurado
✅ Ya tienes un repositorio remoto conectado
✅ Estás en la rama `main`

---

## 🚀 Subir los Cambios a GitHub

Ejecuta estos comandos en la terminal de Windsurf (Ctrl + `):

```bash
# 1. Ver qué archivos cambiaron
git status

# 2. Agregar todos los cambios
git add .

# 3. Hacer commit con un mensaje descriptivo
git commit -m "Revertir cambios de Vercel, mantener UptimeRobot + KeepAlive"

# 4. Subir los cambios a GitHub
git push origin main
```

---

## 📋 Comandos Git Útiles

### Ver el estado del repositorio
```bash
git status
```

### Ver el historial de commits
```bash
git log --oneline
```

### Ver el repositorio remoto
```bash
git remote -v
```

### Agregar archivos específicos
```bash
git add archivo.js
git add carpeta/
```

### Deshacer cambios no commiteados
```bash
# Deshacer cambios en un archivo
git restore archivo.js

# Deshacer todos los cambios
git restore .
```

### Ver diferencias
```bash
# Ver qué cambió en los archivos
git diff

# Ver qué cambió en un archivo específico
git diff archivo.js
```

### Crear una nueva rama
```bash
git checkout -b nombre-de-la-rama
```

### Cambiar de rama
```bash
git checkout main
git checkout nombre-de-la-rama
```

### Actualizar desde GitHub
```bash
git pull origin main
```

---

## 🔄 Workflow Típico

```bash
# 1. Hacer cambios en el código
# ... editar archivos ...

# 2. Ver qué cambió
git status

# 3. Agregar cambios
git add .

# 4. Commit
git commit -m "Descripción de los cambios"

# 5. Subir a GitHub
git push origin main
```

---

## 🆘 Solución de Problemas

### Error: "Permission denied"
```bash
# Verificar que estás autenticado
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

### Error: "Failed to push"
```bash
# Primero hacer pull para sincronizar
git pull origin main

# Luego hacer push
git push origin main
```

### Error: "Merge conflict"
```bash
# Ver archivos en conflicto
git status

# Resolver conflictos manualmente en el editor
# Luego agregar los archivos resueltos
git add .
git commit -m "Resolver conflictos"
git push origin main
```

---

## 📚 Recursos

- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [GitHub Docs](https://docs.github.com/)
- [Git Book (Español)](https://git-scm.com/book/es/v2)

---

**Tip:** Usa `git status` frecuentemente para saber en qué estado está tu repositorio.
