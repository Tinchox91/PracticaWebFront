const btn = document.getElementById("btnMostrarAlerta");
const alerta = document.getElementById("miAlerta");

btn.addEventListener("click", function () {
  if (alerta.classList.contains("d-none")) {
    // Mostrar con efecto
    alerta.classList.remove("d-none");
    setTimeout(() => {
      alerta.classList.add("show");
    }, 10); // pequeña pausa para que la transición se aplique
  } else {
    // Ocultar con efecto
    alerta.classList.remove("show");
    // Esperar a que termine la transición para ocultar con d-none
    setTimeout(() => {
      alerta.classList.add("d-none");
    }, 500); // debe coincidir con el tiempo del transition
  }
});
function mostrarMensaje() {
  toastr.options = {
    closeButton: true,
    progressBar: true,
    positionClass: "toast-top-right",
    timeOut: "2000",
  };
  toastr.success("¡Este es un mensaje con Toastr!");
}
