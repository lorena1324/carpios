# Configuración de Despliegue con Git en cPanel

## 🔍 Cómo Encontrar el DEPLOYPATH

El `DEPLOYPATH` en el archivo `.cpanel.yml` debe apuntar al directorio donde se despliegan los archivos de tu sitio web. Sigue estos pasos para encontrarlo:

### Método 1: Desde File Manager

1. Accede a cPanel
2. Abre "File Manager"
3. Navega a la carpeta donde está tu sitio web (generalmente `public_html`)
4. Mira la barra de direcciones en la parte superior
5. Copia la ruta completa que aparece

**Ejemplo de rutas comunes:**
- `/home/tuusuario/public_html/`
- `/home/tuusuario/tudominio.com/`
- `/home/tuusuario/www/`

### Método 2: Desde Terminal SSH (si tienes acceso)

1. Conéctate por SSH a tu servidor
2. Ejecuta: `pwd` cuando estés en `public_html`
3. Copia la ruta que aparece

### Método 3: Desde la Configuración de Dominio

1. En cPanel, ve a "Subdomains" o "Addon Domains"
2. Revisa el "Document Root" de tu dominio
3. Esa es la ruta que necesitas usar

## ⚙️ Configuración del .cpanel.yml

Una vez que tengas la ruta correcta, edita el archivo `.cpanel.yml` y reemplaza:

```yaml
- export DEPLOYPATH=/home/usuario/public_html/
```

Con tu ruta real, por ejemplo:

```yaml
- export DEPLOYPATH=/home/miusuario/public_html/
```

## 📝 Pasos Completos para Configurar Git en cPanel

### 1. Prepara tu Repositorio Local

Asegúrate de que tu repositorio local tenga:
- ✅ Todos los archivos del proyecto
- ✅ El archivo `.cpanel.yml` configurado con la ruta correcta
- ✅ Todos los cambios commiteados

### 2. Crea el Repositorio en cPanel

**IMPORTANTE:** Para tener despliegues automáticos, debes crear el repositorio desde cPanel, NO clonarlo.

1. En cPanel, ve a "Git Version Control"
2. Haz clic en "Create"
3. Completa los campos:
   - **Repository Name:** Nombre del repositorio (ej: `carpios`)
   - **Repository Path:** Se generará automáticamente
   - **Clone URL:** URL de tu repositorio remoto (GitHub, GitLab, etc.)
   - **Repository Branch:** Generalmente `main` o `master`
4. Haz clic en "Create"

### 3. Configura el Remote en tu Repositorio Local

Si aún no lo has hecho, agrega el repositorio de cPanel como remote:

```bash
git remote add cpanel usuario@tudominio.com:/ruta/al/repositorio.git
```

O si cPanel te proporciona una URL específica, úsala.

### 4. Realiza el Primer Push

```bash
git push cpanel main
```

O el nombre de tu rama principal.

### 5. Realiza el Primer Despliegue

1. En cPanel, ve a "Git Version Control" > "Manage Repository"
2. Selecciona tu repositorio
3. Ve a la pestaña "Pull or Deploy"
4. Haz clic en "Deploy HEAD Commit"

### 6. Verifica el Despliegue

- Visita tu sitio web en el navegador
- Verifica que todos los archivos estén presentes
- Revisa que las imágenes y estilos se carguen correctamente

## 🔄 Despliegues Automáticos

Una vez configurado, cada vez que hagas:

```bash
git push cpanel main
```

cPanel ejecutará automáticamente el despliegue gracias al hook `post-receive`.

## ⚠️ Notas Importantes

1. **Rutas relativas vs absolutas:** El `.cpanel.yml` usa rutas absolutas del servidor
2. **Permisos:** El script configura automáticamente los permisos correctos (644 para archivos)
3. **Archivos ocultos:** El `.htaccess` se copia explícitamente porque `cp -r *` no copia archivos ocultos
4. **Backup:** Siempre haz backup antes del primer despliegue
5. **Logs:** Si algo falla, revisa los logs en cPanel > Git Version Control > Manage Repository

## 🐛 Solución de Problemas

### El despliegue no funciona

1. Verifica que el `DEPLOYPATH` sea correcto
2. Asegúrate de que el directorio de destino exista
3. Verifica los permisos del directorio de destino (debe ser 755)
4. Revisa los logs de despliegue en cPanel

### Los archivos no se copian

1. Verifica que los archivos existan en el repositorio
2. Asegúrate de que los nombres de archivo sean correctos en `.cpanel.yml`
3. Revisa que no haya errores de sintaxis en el archivo YAML

### El .htaccess no se copia

El archivo `.htaccess` se copia explícitamente en el script. Si no se copia:
1. Verifica que el archivo exista en el repositorio
2. Asegúrate de que la línea `- cp .htaccess $DEPLOYPATH` esté presente
3. Verifica que el archivo no esté en `.gitignore`

## 📚 Recursos Adicionales

- [Documentación de Git en cPanel](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-version-control/)
- [Documentación de Namecheap sobre cPanel](https://www.namecheap.com/support/knowledgebase/article.aspx/9538/2238/how-to-use-git-version-control-in-cpanel/)

