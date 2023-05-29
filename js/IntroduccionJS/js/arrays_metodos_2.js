// Más métodos para los arrays

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Auriculares', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 350 },
    { nombre: 'Bocinas', precio: 400 },
    { nombre: 'Laptop', precio: 1100 },
];

// Ideal para arreglos unidimensionales:

// * forEach
meses.forEach(function (mes) {
    if (mes == 'Marzo') {
        console.log('Marzo si existe, Teruel NO');
    }
})


// * Includes
let resultado = meses.includes('Marzo');
console.log(resultado); // booleano


// Ideal para arreglo de objetos

// * Some

resultado = carrito.some(function (producto) {
    return producto.nombre == 'Celular';
})

console.log(resultado);


// * Reduce
resultado = carrito.reduce(function (total, producto) {
    return total + producto.precio;
}, 0) // 0 es el valor inicial

console.log(resultado);


// * Filter
resultado = carrito.filter(function (producto) {
    return producto.precio > 400;
})

console.log(resultado);

resultado = carrito.filter(function (producto) {
    return producto.nombre == 'Celular';
})

console.log(resultado);