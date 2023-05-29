// Funciones con parámetros y argumentos

function sumar(numero1 = 0, numero2 = 0) { // numero1, numero2: Parámetros
    console.log(numero1 + numero2);
}
sumar(10, 10); // Argumentos o valores reales
sumar(3, 3);
sumar(4, 8);
sumar(20, 3);
sumar(2); // NaN (Not a Number)
// Al añadir = 0 'parámetro por default' suma 2 + 0 