// Funciones que Retornan Valor

// function sumar(numero1 = 0, numero2 = 0) {
//     return numero1 + numero2;
// }

// const resultado = sumar(2, 3);

// console.log(resultado);

let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return 1.15 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);

console.log(total);

const totalAPagar = calcularImpuesto(total);

console.log(`El total a pagar con impuestos es de: $${totalAPagar}`);