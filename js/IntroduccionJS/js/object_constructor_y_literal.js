// POO

// Object Literal 

const producto = {
    nombre: 'Tablet',
    precio: 500
}

// Object Constructor

function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

const producto2 = new Producto('Monitor Curvo de 20"', 800, true);
const producto3 = new Producto('Monitor Plano de 30"', 1200, false);
const producto4 = new Producto('Laptop 16"', 1450, false);


console.log(producto2);
console.log(producto3);
console.log(producto4);