// Funciones Flecha - Arrow Functions

// Es otra forma de declarar funciones. (Si solo tienes una línea puedes prescindir de las llaves y del RETURN)
const sumar = (numero1, numero2) => console.log(numero1 + numero2);
sumar(5, 10);

// Si solo hay un parámetro puedes prescindir de los paréntesis
const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);

aprendiendo('JavaScript');

//

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
]

// * forEach
meses.forEach( mes => {
    if (mes == 'Marzo') {
        console.log('Marzo si existe, Teruel NO');
    }
})

// * Some
resultado = carrito.some( producto => producto.nombre == 'Celular');
console.log(resultado);

// * Reduce
resultado = carrito.reduce( (total, producto) => total + producto.precio, 0); // 0 es el valor inicial
console.log(resultado);

// * Filter
resultado = carrito.filter(producto => producto.precio > 400);
console.log(resultado);

resultado = carrito.filter(producto => producto.nombre == 'Celular');
console.log(resultado);