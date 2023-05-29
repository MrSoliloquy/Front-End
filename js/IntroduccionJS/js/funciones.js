// Funciones

// * Declaración de Función
function sumar() {
    console.log(10 + 10);
}

sumar();


// * Expresión de la función
const sumar2 = function () {
    console.log(3 + 3);
}

sumar2();

// Respecto a las dos funciones anteriores si colocásemos la llamada primero, solo funcionaría en la primera función. Puesto que JS hace dos vueltas, en la primera lee las funciones, y luego las llamadas. En la segunda, se considera como una variable.
// PRIMERO REGISTRO, SEGUNDO EJECUCIÓN


// * IIFE
// Son útiles porque no permiten que las variables salgan del archivo en el que están siendo manipuladas pese a que su nombre colisione
(function () {
    const cliente = 'Juan';
    console.log('Esto es una función');
})(); // El último paréntesis realizar la llamada
