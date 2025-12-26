// Ejemplo simple de interacción
document.querySelectorAll(".buttons a").forEach(btn => {
    btn.addEventListener("click", e => {
        e.preventDefault();
        alert(`Sección: ${btn.textContent}`);
    });
});

  document.querySelectorAll('.buttons a').forEach(btn => {
    btn.addEventListener('click', e => e.preventDefault());
  });

<script>
  document.querySelectorAll('.buttons a').forEach(btn => {
    btn.addEventListener('click', e => e.preventDefault());
  });
</script>
