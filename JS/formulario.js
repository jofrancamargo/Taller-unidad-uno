// creamos la constante (const) llamamos el formulario con el (id)
const form = document.getElementById('registration-form');
const phone = document.getElementById('comentario');
const email = document.getElementById('email');
const password = document.getElementById('fecha');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	if (comentario.value === '') {
        errorFunc('comentario', 'Por favor, ingrese su comentario.');
	} else {
        noError('comentario');
	}

	if (email.value === '') {
        errorFunc('email', 'Por favor, ingrese un correo electrónico.');
	}else {
        noError('email');
	}

	if (fecha.value === '') {
        errorFunc('fecha', 'Por favor, ingrese una fecha.');
	} else {
        noError('fecha');
	}

	if (!document.querySelectorAll('.invalid').length) {
		alert('El formulario ha sido enviado.');		
		form.reset();
	}
});


function errorFunc(tagName, message) {
    document.getElementById(tagName).classList.add('invalid');
    document.getElementById(tagName + '-error').innerHTML = message;
}

function noError(tagName) {
    document.getElementById(tagName).classList.remove('invalid');
    document.getElementById(tagName + '-error').innerHTML = '';
}
