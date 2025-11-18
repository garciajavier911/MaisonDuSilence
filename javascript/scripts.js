document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita envío real del formulario

    // Validación nativa de Bootstrap
    if (!form.checkValidity()) {
      event.stopPropagation();
      form.classList.add("was-validated");
      return;
    }

    // Si está todo correcto
    successMessage.classList.remove("d-none");

    // Reiniciar formulario
    form.reset();
    form.classList.remove("was-validated");

    // Ocultar mensaje tras 4s
    setTimeout(() => {
      successMessage.classList.add("d-none");
    }, 4000);
  });
});
