// Solo ejecutable en arreglos

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

// ForEach
const arreglo1 = carrito.forEach( producto => console.log(producto.nombre));

// map
const arreglo2 = carrito.map(producto => producto.nombre);

// En el caso de map, se consigue crear un nuevo arreglo pero en el ForEach no.
// ForEach está diseñado más bien para mostrar en consola.
console.log(arreglo2);
