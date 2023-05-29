// Métodos para los arrays

const numeros = [10, 20, 30, 40, 50];

console.table(numeros); 

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

console.table(meses);


// * Forma poco común de agregar a un arreglo
numeros[5] = 60;


// * Forma que se está dejando de usar
// No se recomienda modificar los arreglos originales
numeros.push(70, 80, 90);


// * Forma 'unshift' lo agrega al principio del arreglo
numeros.unshift(-10, -20, -30);

console.table(numeros);


// * Eliminar elementos de un arreglo

// meses.pop(); Elimina el último elemento
// meses.shift(); Elimina el primer elemento

//meses.splice(2, 1); // A partir de la posición '2', elimina '1' (el propio)
//console.table(meses);


// * Forma recomendada: Rest Operator o Spread Operator

const nuevoArreglo = [...meses, 'Junio'];
console.log(nuevoArreglo);