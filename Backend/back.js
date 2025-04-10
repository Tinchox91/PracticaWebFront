//  Transición de entrada: al cargar la página
window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in"); // Agrego la clase que hace visible la página
});

//  Transición de salida: al hacer clic en un botón
const botones = document.querySelectorAll(".fade-link");

botones.forEach((boton) => {
  boton.addEventListener("click", function (e) {
    e.preventDefault(); // Evito que el navegador cambie de página al instante
    const url = this.getAttribute("data-url"); // Obtengo la URL del botón
    document.body.classList.remove("fade-in"); // Quito la clase de entrada por si acaso
    document.body.classList.add("fade-out"); // Aplico la clase de salida

    // Espero a que termine la animación, luego voy a la nueva página
    setTimeout(() => {
      window.location.href = url;
    }, 500); // Mismo tiempo que la transición
  });
});
