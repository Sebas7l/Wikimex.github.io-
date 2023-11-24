document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Previene el envío del formulario por defecto

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (!email && !password) {
            alert('Por favor, ingrese su correo y contraseña.');
            return;
        }

        if (!email) {
            alert('Por favor, ingrese su correo.');
            return;
        }

        if (!password) {
            alert('Por favor, ingrese su contraseña.');
            return;
        }

        alert('Enviado con éxito'); // Cambia esto por tu lógica de envío real
    });
});
