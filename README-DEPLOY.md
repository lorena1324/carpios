# Guía de Deploy para cPanel de Namecheap

Esta guía te ayudará a desplegar el sitio web Carpios en cPanel de Namecheap.

## 📋 Requisitos Previos

- Acceso a cPanel de Namecheap
- Credenciales de FTP o acceso al File Manager de cPanel
- Dominio configurado y apuntando al hosting

## 🚀 Pasos para el Deploy

### Opción 1: Despliegue Automático con Git (Recomendado para desarrollo continuo)

Esta opción permite despliegues automáticos cada vez que hagas push al repositorio.

1. **Configura el repositorio Git en cPanel**
   - Accede a cPanel
   - Busca "Git Version Control" en el menú
   - Crea un nuevo repositorio o clona uno existente
   - **IMPORTANTE:** Antes de crear el repositorio, asegúrate de que el archivo `.cpanel.yml` esté en la raíz de tu repositorio

2. **Configura el DEPLOYPATH en `.cpanel.yml`**
   - Abre el archivo `.cpanel.yml` en tu repositorio
   - Reemplaza `/home/usuario/public_html/` con la ruta real de tu directorio de despliegue
   - Para encontrar la ruta exacta:
     - Ve a File Manager en cPanel
     - Navega a `public_html` (o tu directorio raíz)
     - La ruta completa aparecerá en la barra de direcciones
     - Ejemplo: `/home/tuusuario/public_html/` o `/home/tuusuario/tudominio.com/`

3. **Realiza el primer despliegue**
   - En cPanel, ve a "Git Version Control" > "Manage Repository"
   - Haz clic en "Deploy HEAD Commit" en la pestaña "Pull or Deploy"
   - Esto copiará todos los archivos al directorio de despliegue

4. **Despliegues automáticos**
   - Cada vez que hagas `git push` al repositorio, cPanel ejecutará automáticamente el despliegue
   - Esto es gracias al hook `post-receive` que cPanel agrega automáticamente

**Nota:** Si clonaste un repositorio existente, solo podrás hacer despliegues manuales. Para despliegues automáticos, crea el repositorio desde cPanel.

### Opción 2: Usando File Manager de cPanel

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

### Opción 3: Usando FTP

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

## 📁 Estructura del Repositorio Git

```
carpios/
├── .cpanel.yml          # Configuración de despliegue automático
├── .htaccess            # Configuración de Apache
├── index.html
├── style.css
├── script.js
├── carpioslogo.png
├── carpiosweb.png
├── carpions.gif
└── README-DEPLOY.md     # Esta guía
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

### Problemas con el despliegue Git
- Verifica que el `DEPLOYPATH` en `.cpanel.yml` sea correcto
- Asegúrate de que todos los archivos necesarios estén en el repositorio
- Revisa los logs de despliegue en cPanel > Git Version Control
- Verifica que el archivo `.cpanel.yml` esté en la raíz del repositorio
- Si el despliegue falla, verifica los permisos del directorio de destino

## 📞 Soporte

Si tienes problemas con el deploy, contacta al soporte de Namecheap o revisa la documentación de cPanel.

---

**Nota:** Esta configuración está optimizada para sitios estáticos. Si necesitas funcionalidades adicionales (PHP, bases de datos, etc.), será necesario configurarlas por separado.

