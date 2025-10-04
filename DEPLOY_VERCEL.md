# 🚀 Deploy Rápido en Vercel

## Pasos para Deploy (5 minutos)

### 1. Preparar el proyecto

```bash
# Asegúrate de que todo esté commiteado
git add .
git commit -m "Migrar a Vercel Serverless Functions"
git push origin main
```

### 2. Deploy en Vercel

1. **Ir a [vercel.com](https://vercel.com)**
2. **Login con GitHub**
3. **Click en "Add New..." → "Project"**
4. **Seleccionar repositorio `alura-flix`**
5. **Click en "Deploy"** (Vercel detecta automáticamente Vite)

### 3. ¡Listo! 🎉

Tu app estará disponible en: `https://tu-proyecto.vercel.app`

---

## Verificar que funciona

1. Abre: `https://tu-proyecto.vercel.app/api/videos`
2. Deberías ver el JSON con todos los videos
3. Abre tu app: `https://tu-proyecto.vercel.app`
4. Debería cargar **instantáneamente** (sin esperar 2 minutos)

---

## Ventajas vs Render

| Característica | Render | Vercel |
|----------------|--------|--------|
| Tiempo de carga | ~2 min ❌ | <1 seg ✅ |
| Keep-alive | Necesario ❌ | No necesario ✅ |
| Deploy | Manual ⚠️ | Automático ✅ |

---

## ⚠️ Importante: Persistencia de Datos

Los cambios en `db.json` **NO persisten** en Vercel Serverless.

**Para persistencia real**, usa una base de datos:
- **MongoDB Atlas** (Recomendado) - [mongodb.com/atlas](https://mongodb.com/atlas)
- **Supabase** - [supabase.com](https://supabase.com)
- **Vercel KV** - [vercel.com/docs/storage/vercel-kv](https://vercel.com/docs/storage/vercel-kv)

Ver `VERCEL_MIGRATION_GUIDE.md` para más detalles.

---

## Troubleshooting

**Error: "Module not found"**
```bash
npm install
```

**Error: "Cannot read db.json"**
- Verifica que `db.json` esté en la raíz del proyecto
- Verifica que NO esté en `.gitignore`

**Los datos no persisten**
- Esto es normal en Vercel Serverless
- Usa una base de datos externa (ver arriba)

---

**¿Dudas?** Consulta `VERCEL_MIGRATION_GUIDE.md` para la guía completa.
