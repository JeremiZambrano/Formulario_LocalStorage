document.getElementById('clientForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario

    // Obtener los valores de los campos
    var name = document.getElementById('name').value;
    var lastName = document.getElementById('lastName').value;
    var birthDate = document.getElementById('birthDate').value;
    var cedula = document.getElementById('cedula').value;
    var address = document.getElementById('address').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    // Validaciones con expresiones regulares
    var nameRegex = /^[a-zA-Z\s]+$/;
    var cedulaRegex = /^\d{10}$/;
    var addressRegex = /^[a-zA-Z0-9\s,.'-]{3,}$/;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var phoneRegex = /^\d{10}$/;

    if (!nameRegex.test(name)) {
        alert('Por favor, ingrese un nombre válido.');
        return;
    }
    if (!nameRegex.test(lastName)) {
        alert('Por favor, ingrese un apellido válido.');
        return;
    }
    if (!cedulaRegex.test(cedula)) {
        alert('Por favor, ingrese un número de cédula válido de 10 dígitos.');
        return;
    }
    if (!addressRegex.test(address)) {
        alert('Por favor, ingrese una dirección válida.');
        return;
    }
    if (!emailRegex.test(email)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return;
    }
    if (!phoneRegex.test(phone)) {
        alert('Por favor, ingrese un número de teléfono válido de 10 dígitos.');
        return;
    }

    // Almacenar datos en localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('birthDate', birthDate);
    localStorage.setItem('cedula', cedula);
    localStorage.setItem('address', address);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);

    // Mostrar mensaje de éxito
    document.getElementById('successMessage').style.display = 'block';

    // Limpiar formulario
    document.getElementById('clientForm').reset();

    console.log('Nombre:', name);
    console.log('Apellidos:', lastName);
    console.log('Nacimiento:', birthDate);
    console.log('Cédula:', cedula);
    console.log('Dirección:', address);
    console.log('Email:', email);
    console.log('Teléfono:', phone);
});
