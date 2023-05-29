// Arrays - Arreglos

// * Forma más usada 
const numeros = [10, 20, 30, 40, 50];

// console.log(numeros)
console.table(numeros); // Otra forma de ver los arreglos

// * Forma menos usada
// const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
console.table(meses);

const arreglo = ["Hola", 10, true, "si", null, { nombre: "Conor", trabajo: "Programador" }, [1, 2, 3]];

// * Acceder mediante índice
console.log(numeros[4]);
console.log(numeros[200]); // undefined

// * Conocer la extensión de un arreglo
console.log({ Longitud: meses.length });

// * Iterador de array
meses.forEach(function (mes) {
    console.log(mes);
})