# Soluciones para mantener activo el servidor de Render

## Problema
El servidor gratuito de Render entra en modo "sleep" después de 15 minutos de inactividad, causando que la primera carga tarde ~2 minutos en despertar. Esto puede dar mala impresión a recruiters.

## Soluciones Implementadas

### ✅ Solución 1: UptimeRobot (RECOMENDADA)

**Ventajas:**
- ✅ Completamente gratuito
- ✅ Hasta 50 monitores gratis
- ✅ Ping cada 5 minutos
- ✅ Sin límite de requests (no da error 429)
- ✅ Dashboard con estadísticas de uptime
- ✅ Alertas por email si el servidor cae

**Pasos:**
1. Ir a [https://uptimerobot.com/](https://uptimerobot.com/)
2. Crear cuenta gratuita
3. Click en "Add New Monitor"
4. Configurar:
   - **Monitor Type**: HTTP(s)
   - **Friendly Name**: AluraFlix API
   - **URL**: `https://aluraflix-api-2qid.onrender.com/videos`
   - **Monitoring Interval**: 5 minutes
5. Click en "Create Monitor"

**Resultado:** El servidor se mantendrá activo 24/7 sin costo adicional.

---

### ✅ Solución 2: Keep-Alive desde el Frontend (YA IMPLEMENTADA)

**Ventajas:**
- ✅ No requiere servicios externos
- ✅ Funciona mientras alguien tenga la app abierta
- ✅ Implementación simple

**Desventajas:**
- ❌ Solo funciona si alguien tiene la app abierta
- ❌ No mantiene el servidor activo 24/7

**Archivos creados:**
- `src/services/keepAlive.js` - Servicio que hace ping cada 5 minutos
- `src/App.jsx` - Modificado para iniciar el servicio automáticamente

**Cómo funciona:**
1. Cuando un usuario abre la app, se inicia un intervalo
2. Cada 5 minutos se hace una petición HEAD al servidor
3. Esto mantiene el servidor despierto mientras haya usuarios activos

---

### ✅ Solución 3: Cron-Job.org (Alternativa)

**Problema actual:** Error 429 (Too Many Requests)

**Causa:** El plan gratuito de cron-job.org tiene límites estrictos de requests.

**Solución:**
1. Ir a [https://cron-job.org/](https://cron-job.org/)
2. Verificar que estás en el plan correcto
3. Configurar:
   - **URL**: `https://aluraflix-api-2qid.onrender.com/videos`
   - **Schedule**: Every 5 minutes
   - **Request method**: HEAD (para reducir transferencia de datos)

**Nota:** Si sigue dando 429, usar UptimeRobot en su lugar.

---

### ✅ Solución 4: GitHub Actions (Avanzada)

Crear un workflow que haga ping automáticamente:

**Archivo:** `.github/workflows/keep-alive.yml`

```yaml
name: Keep Render Server Alive

on:
  schedule:
    # Ejecutar cada 5 minutos
    - cron: '*/5 * * * *'
  workflow_dispatch: # Permite ejecución manual

jobs:
  ping:
    runs-on: ubuntu-latest
    steps:
      - name: Ping Render Server
        run: |
          curl -I https://aluraflix-api-2qid.onrender.com/videos
          echo "✅ Ping exitoso"
```

**Ventajas:**
- ✅ Gratuito
- ✅ Automatizado
- ✅ No requiere servicios externos

**Desventajas:**
- ❌ Requiere que el repositorio sea público o tener GitHub Pro
- ❌ GitHub Actions tiene límites mensuales

---

## Recomendación Final

**Para tu caso específico (portfolio para recruiters):**

1. **Usar UptimeRobot** (Solución 1) - Es la mejor opción porque:
   - Mantiene el servidor activo 24/7
   - No tiene límites de requests
   - Es completamente gratuito
   - Toma solo 2 minutos configurarlo

2. **Mantener el Keep-Alive del frontend** (Solución 2) - Como respaldo:
   - Si UptimeRobot falla, el frontend seguirá haciendo ping
   - Mejora la experiencia cuando hay usuarios activos

## Verificación

Para verificar que funciona:

1. Espera 20 minutos sin visitar tu app
2. Abre `https://aluraflix-api-2qid.onrender.com/videos` en el navegador
3. Debería cargar inmediatamente (no tardar 2 minutos)

## Monitoreo

Con UptimeRobot puedes ver:
- Uptime percentage (debería ser ~99.9%)
- Response time promedio
- Historial de caídas
- Alertas automáticas por email

---

**Última actualización:** 2025-10-03
