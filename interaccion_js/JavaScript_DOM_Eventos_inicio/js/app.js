// querySelector (más usada)

const heading = document.querySelector('.header__texto h2'); // 0 o 1 Elementos
const heading2 = document.querySelector('#heading'); // colocando id en html
console.log(heading); 
console.log(heading2);

heading.textContent = 'Nuevo Heading'; // Cambia el texto
heading.classList.add('nueva-clase'); // Agrega clase al html
console.log(heading);


// querySelectorAll (más usada x2)
const enlaces = document.querySelectorAll('.navegacion a'); // Todos los elementos
console.log(enlaces[0]);

enlaces[0].textContent = 'Nuevo nosotros';
// enlaces[0].href = 'http://google.com';
enlaces[0].classList.add('nueva-clase');
enlaces[0].classList.remove('nueva-clase');


// getElementById (awatafaka)

const heading3 = document.getElementById('heading');
console.log(heading3);


// Generar un nuevo enlace
const nuevoEnlace = document.createElement('a');

// * Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

// * Agregar el texto
nuevoEnlace.textContent = 'Tienda';

// * Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

// * Agregarlo al documento
// append() sirve para incrustar texto y elementos HTML, appendChild() solo inserta elementos HTML
const navegacionSuperior = document.querySelector('.header .navegacion');
navegacionSuperior.insertBefore(nuevoEnlace, enlaces[1]);;

console.log(nuevoEnlace);


// Eventos

console.log(1);

window.addEventListener('load', function() { // load: espera a que el JS y los archivos que dependen del HTML estén listos
    console.log(2);
});

window.onload = function () { // esto hace lo mismo
    console.log(3);
};

document.addEventListener('DOMContentLoaded', function() { // Solo espera por el HTML, pero no espera por el CSS o imágenes (más usado)
    console.log(4);
});

console.log(5);

window.onscroll = function() {
    console.log('Scrolling...');
};


/** Seleccionar elementos y asociarles un evento
const botonEnviar = document.querySelector('.boton--primario');
botonEnviar.addEventListener('click', function (evento) {
    console.log(evento);
    evento.preventDefault(); // Previene que la página se recargue (su actuación por "default")

    // Útil para validar un formulario
    console.log('enviando formulario');
}); */


// Eventos de los Inputs y Textarea

// 1. Variables; 2. EventListener; 3. Funciones
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

// El Evento de Submit
// Es buena práctica usar submit en un formulario en vez de 'click'
// 'Click' asociado al botón - 'Submit' asociado al formulario
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    // Validar el formulario

    const {nombre, email, mensaje} = datos;

    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios', 'error');
        return;
    } 

    // Enviar el formulario
    mostrarAlerta('El formulario se envió correctamente', 'correcto');
});
// Con change espera hasta que se termina de escribir para mostrarlo y con input se muestra a tiempo real letrar por letra
nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// Lee el texto introducido por el usuario
function leerTexto(evento) {
    // console.log(evento.target.value);

    datos[evento.target.id] = evento.target.value;

    console.log(datos);
};

// Muestra alerta en pantalla
function mostrarAlerta (mensaje, estado) {
    const alertaExistente = formulario.querySelector(`.${estado}`);
    if (alertaExistente) {
        return; // Evitar mostrar una nueva alerta si ya hay una presente
    }
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    alerta.classList.add(estado);
    formulario.appendChild(alerta); 

    // Desaparezca tras 3 segundos
    setTimeout(() => {
        alerta.remove();
    }, 3000);
};
