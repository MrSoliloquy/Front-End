// Clases

class Producto {
    constructor(nombre, precio, disponible) {
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = disponible;
    }

    formatearProducto() {
        return `El Producto ${this.nombre} tiene un precio de: $${this.precio}`;
    }

    obtenerPrecio() {
        console.log(this.precio);
    }
}

const producto2 = new Producto('Monitor Curvo de 20"', 800, true);
const producto3 = new Producto('Monitor Plano de 30"', 1200, false);

console.log(producto2);
console.log(producto3);

console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());

// * Herencia

class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio); // heredas del constructor de la clase padre
        this.isbn = isbn;
    }

    formatearProducto() {
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
    }

    obtenerPrecio() {
        super.obtenerPrecio();
        console.log('Y si hay en existencia');
    }
}

const libro = new Libro('El Palacio de la Luna', 14.99, '9103443455989');

console.log(libro.formatearProducto());
console.log(libro.obtenerPrecio());

