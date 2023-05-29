// Strings o Cadenas de texto

const tweet = "Aprendiendo JavaScript con el curso de Desarrollo Web más completo"; // string (más usada)

// Para usar comillas dobles dentro del nombre (también puedes usar sencillas):
const producto4 = "Monitor de 20 \"Pulgadas\"";

const producto2 = String('Monitor de 30 Pulgadas'); // string
const producto3 = new String('Monitor de 50 Pulgadas') //objeto

console.log(typeof producto);
console.log(producto2);
console.log(producto3);
console.log(producto4);

// Métodos de Strings:
const producto5 = "Monitor HD";

console.log(tweet.length); // Cuantos carácteres tiene
console.log(producto5);

// * IndexOf (retorna posición)
console.log(tweet.indexOf('JavaScript')); // Posición del primer caracter de JavaScript
console.log(tweet.indexOf('tablet')); // -1 : Si es menor a 0 no existe

// * Includes (retorna booleano)
console.log(tweet.includes('JavaScript')); // True
console.log(tweet.includes('tablet')); // False