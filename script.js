document.addEventListener('DOMContentLoaded', () => {

  const modal = document.getElementById("infoModal");
  const modalContent = document.getElementById("modalContent");
  const closeBtn = document.querySelector(".modal-close");

  const info = {
    "BIOPLASTICS": `
      <h3>Bioplastics</h3>
      <p>
        We founded Compostpack, Colombia’s leading compostable bioplastics company.
        With a capacity of over 5,000 MT/year, our mission is to replace conventional
        plastics by introducing our biobased and compostable materials into everyday products.
      </p>
      <a href="https://compostpack.com/" target="_blank">www.compostpack.com</a>
    `,
    "ART": `
      <h3>Arts and Nobility</h3>
      <p>
        Art’s value goes beyond profit, it creates connection, inspires dialogue and fosters prosperity.
        We have organized art fairs in Quito, Ecuador, and Crete, Greece and continuously seek opportunities
        to participate in and elevate artists and galleries worldwide.
      </p>
      <a href="https://www.worldofcrete.com/" target="_blank">www.worldofcrete.com</a>
    `,
    "REAL ESTATE": `
      <h3>Real Estate</h3>
      <p>
        Focused on acquiring properties with low square-meter prices and strong long-term returns,
        since 2024 we have invested in 10 assets in Colombia, including both industrial and residential projects.
        We use different exit strategies depending on project type.
      </p>
      <a href="https://www.carpios.com/" target="_blank">www.carpios.com</a>
    `,
    "TRADE FINANCE": `
      <h3>Trade Finance</h3>
      <p>
        International transactions are at the core of our expertise.
        We help importers and exporters connect resources to where they are most needed,
        acting as a trusted ally for those seeking financing solutions.
      </p>
      <a href="https://www.carpios.com" target="_blank">www.carpios.com</a>
    `,
    "CHEMICALS": `
      <h3>Chemicals</h3>
      <p>
        We supply essential chemicals and ingredients for everyday products,
        ranging from food-related applications to industrial solutions
        across Central and South America.
      </p>
      <a href="https://www.carpios.com/" target="_blank">www.carpios.com</a>
    `,
    "GLASS": `
      <h3>Glass</h3>
      <p>
        Our glass transformation company based in Bogotá, Colombia,
        transforms the country’s largest volume of non-glare and satin-etched glass.
      </p>
      <a href="https://www.carpios.com/" target="_blank">www.ivl.com.co</a>
    `
  };

  document.querySelectorAll('.buttons a').forEach(btn => {
    btn.addEventListener('click', e => {
      const key = btn.textContent.trim();

      // 👉 SOLO abre modal si existe info
      if (info[key]) {
        e.preventDefault();
        modalContent.innerHTML = info[key];
        modal.classList.add("show");
      }
      // si no hay info → deja que el link navegue normal
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  modal.addEventListener("click", e => {
    if (e.target === modal) modal.classList.remove("show");
  });
});
