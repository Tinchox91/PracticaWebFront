// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  // Selecciona el botón con clase 'boton1'
  const boton = document.querySelector(".boton1");

  // Selecciona el div con clase 'principal' donde se insertará el texto
  const principalDiv = document.querySelector(".principal");

  // Agrega un evento de clic al botón
  boton.addEventListener("click", () => {
    // Crea un nuevo elemento <p>
    const nuevoTexto = document.createElement("p");

    // Le asigna un texto al nuevo párrafo
    nuevoTexto.textContent = "Texto agregado al hacer clic en el botón.";

    // Agrega el párrafo al div principal para que se muestre en la página
    principalDiv.appendChild(nuevoTexto);
  });
});
