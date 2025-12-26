// Ejemplo simple de interacción

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.buttons a').forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();            // bloquea navegación
        e.stopImmediatePropagation();  // corta cualquier otro listener
        return false;                  // seguridad extra
      });
    });
  });

