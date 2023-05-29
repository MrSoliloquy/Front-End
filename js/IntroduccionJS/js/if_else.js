// Estructuras de Control

const puntaje = 1000;

// Si pusiese === no aceptaría que puntaje fuese un string porque revisa el tipo de dato, no solo el valor
if (puntaje === 1000) {
    console.log('Si el puntaje es 1000');
} else {
    console.log('No es igual');
}

//

const efectivo = 1000;
const carrito = 800;

if (efectivo > carrito) {
    console.log('El usuario puede pagar');
} else {
    console.log('Fondos insuficientes...');
}

//

const rol = 'EDITOR';

if (rol == 'ADMINISTRADOR') {
    console.log('Acceso a todo el sistema');
} else if (rol == 'EDITOR') {
    console.log('Acceso a todo el sistema');
} else {
    console.log('No tienes acceso');
}
