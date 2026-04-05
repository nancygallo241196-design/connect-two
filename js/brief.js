// PERSONALIDAD
const personalityButtons = document.querySelectorAll(".option-btn");

personalityButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
  });
});

// COLORES
const colorBoxes = document.querySelectorAll(".color-box");

colorBoxes.forEach(box => {
  box.addEventListener("click", () => {
    box.classList.toggle("selected");
  });
});

// SUBMIT
document.getElementById("briefForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombreProyecto").value;
  const categoria = document.getElementById("categoria").value;
  const descripcion = document.getElementById("descripcion").value;

  const personalidades = Array.from(document.querySelectorAll(".option-btn.active"))
    .map(btn => btn.textContent);

  const coloresNo = Array.from(document.querySelectorAll(".color-box.selected"))
    .map(box => box.dataset.color);

  const brief = {
    nombre,
    categoria,
    descripcion,
    personalidades,
    coloresNo
  };

  localStorage.setItem("brief", JSON.stringify(brief));
  window.location.href = "resultados.html";
});

