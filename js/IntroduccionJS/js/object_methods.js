"use strict"; // Corregirá el código y nos dará error por ejemplo, por haber añadido una propiedad tras el freeze

// Objects methods

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

// * No permite que se le añadan, eliminen o modifiquen propiedades al objeto
Object.freeze(producto);

// * No permite que se le añadan, eliminen propiedades al objeto
// Object.seal(producto);

// producto.imagen = 'imagen.jpg'; No aparecerá

// * Comprueba si el objeto está restringido
console.log(Object.isFrozen(producto));

console.log(producto);