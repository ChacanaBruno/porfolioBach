// Obtener el botón de flecha hacia arriba
const scrollUpBtn = document.getElementById("scrollUpBtn");

// Mostrar el botón cuando el usuario haga scroll hacia abajo
window.onscroll = () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
};

// Hacer scroll hacia arriba cuando el usuario haga clic en el botón
scrollUpBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
