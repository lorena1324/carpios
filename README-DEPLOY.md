# Guía de Deploy para cPanel de Namecheap

Esta guía te ayudará a desplegar el sitio web Carpios en cPanel de Namecheap.

## 📋 Requisitos Previos

- Acceso a cPanel de Namecheap
- Credenciales de FTP o acceso al File Manager de cPanel
- Dominio configurado y apuntando al hosting

## 🚀 Pasos para el Deploy

### Opción 1: Usando File Manager de cPanel (Recomendado)

1. **Accede a cPanel**
   - Inicia sesión en tu cuenta de Namecheap
   - Accede a cPanel desde el panel de control

2. **Abre el File Manager**
   - Busca y haz clic en "File Manager" en cPanel
   - Navega a la carpeta `public_html` (o `www` si es tu directorio raíz)

3. **Sube los archivos**
   - Si hay archivos antiguos, haz una copia de seguridad primero
   - Sube todos los archivos del proyecto a `public_html`:
     - `index.html`
     - `style.css`
     - `script.js`
     - `carpioslogo.png`
     - `carpiosweb.png`
     - `carpions.gif`
     - `.htaccess`

4. **Verifica permisos**
   - Asegúrate de que los archivos tengan permisos `644`
   - Las carpetas deben tener permisos `755`

5. **Verifica el sitio**
   - Visita tu dominio en el navegador
   - El sitio debería estar funcionando correctamente

### Opción 2: Usando FTP

1. **Conecta vía FTP**
   - Usa un cliente FTP (FileZilla, WinSCP, etc.)
   - Host: `ftp.tudominio.com` o la IP proporcionada
   - Usuario y contraseña: los de tu cuenta de hosting

2. **Sube los archivos**
   - Conéctate al directorio `public_html`
   - Sube todos los archivos del proyecto

3. **Verifica permisos**
   - Los archivos deben tener permisos `644`
   - Las carpetas deben tener permisos `755`

## ⚙️ Configuración Adicional

### Habilitar HTTPS (SSL)

1. En cPanel, busca "SSL/TLS Status"
2. Instala un certificado SSL (Let's Encrypt es gratuito)
3. Una vez instalado, descomenta estas líneas en `.htaccess`:
   ```apache
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```

### Configurar Redirección www

Si quieres redirigir `www.tudominio.com` a `tudominio.com` (o viceversa), descomenta las líneas correspondientes en `.htaccess`.

### Páginas de Error Personalizadas

Si quieres crear páginas de error personalizadas (404, 500, etc.), crea los archivos HTML correspondientes y descomenta las líneas en `.htaccess`.

## 📁 Estructura de Archivos en el Servidor

```
public_html/
├── index.html
├── style.css
├── script.js
├── .htaccess
├── carpioslogo.png
├── carpiosweb.png
└── carpions.gif
```

## ✅ Verificación Post-Deploy

Después del deploy, verifica:

- [ ] El sitio carga correctamente
- [ ] Las imágenes se muestran bien
- [ ] Los estilos CSS se aplican correctamente
- [ ] El JavaScript funciona
- [ ] El sitio es responsive
- [ ] La compresión GZIP está activa (verifica con herramientas como GTmetrix)
- [ ] El cacheo de archivos está funcionando

## 🔧 Solución de Problemas

### Las imágenes no se cargan
- Verifica que las rutas en `index.html` y `style.css` sean correctas
- Asegúrate de que los archivos de imagen estén en el mismo directorio que `index.html`

### Los estilos no se aplican
- Verifica que `style.css` esté en el mismo directorio que `index.html`
- Revisa la consola del navegador para errores

### El JavaScript no funciona
- Verifica que `script.js` esté incluido en `index.html`
- Revisa la consola del navegador para errores

### Error 500 (Internal Server Error)
- Verifica que `.htaccess` esté correctamente formateado
- Revisa los logs de error en cPanel
- Asegúrate de que mod_rewrite esté habilitado en el servidor

## 📞 Soporte

Si tienes problemas con el deploy, contacta al soporte de Namecheap o revisa la documentación de cPanel.

---

**Nota:** Esta configuración está optimizada para sitios estáticos. Si necesitas funcionalidades adicionales (PHP, bases de datos, etc.), será necesario configurarlas por separado.

