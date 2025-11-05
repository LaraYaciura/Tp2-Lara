// js/validacion.js

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form-experiencia');

  form.addEventListener('submit', function (event) {
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const experiencia = document.getElementById('experiencia').value;

    const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,50}$/;
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

    if (!nombreRegex.test(nombre)) {
      alert('Por favor ingresá un nombre válido (solo letras y espacios, entre 3 y 50 caracteres).');
      event.preventDefault();
      return;
    }

    if (!emailRegex.test(email)) {
      alert('Ingresá un correo electrónico válido.');
      event.preventDefault();
      return;
    }

    if (experiencia === "") {
      alert('Seleccioná una opción de experiencia.');
      event.preventDefault();
      return;
    }
  });
});
