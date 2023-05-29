// Object Constructor

function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}
Cliente.prototype.formatearCliente = function () {
    return `El Cliente se llama: ${this.nombre} ${this.apellido}`;
}

const cliente = new Cliente('Conor', 'Rojas');

console.log(cliente);
console.log(cliente.formatearCliente());

//

function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}
// El Prototype nos va a permitir crear funciones que solo se utilizan en un objeto en específico (como los métodos en C++)
Producto.prototype.formatearProducto = function () {
    return `El Producto ${this.nombre} tiene un precio de: $${this.precio}`;
}

const producto2 = new Producto('Monitor Curvo de 20"', 800, true);
const producto3 = new Producto('Monitor Plano de 30"', 1200, false);
const producto4 = new Producto('Laptop 16"', 1450, false);



console.log(producto2);
console.log(producto3);
console.log(producto4.formatearProducto());


