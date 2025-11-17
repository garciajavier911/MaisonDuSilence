document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('formContacto');
  const exito = document.getElementById('exito');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity()) {
      exito.classList.remove('d-none'); // mostrar mensaje de éxito
      form.reset(); // limpiar formulario
      form.classList.remove('was-validated'); // quitar estilos de validación
    } else {
      form.classList.add('was-validated'); // mostrar errores
    }
  });
});
