// Async / await

function descargarNuevosClientes() {
    return new Promise(resolve => {
        console.log('Descargando clientes... espere...');

        setTimeout(() => {
            resolve('Los Clientes fueron Descargados');
        }, 5000);
    })
}

function descargarUltimosPedidos() {
    return new Promise(resolve => {
        console.log('Descargando pedidos... espere...');

        setTimeout(() => {
            resolve('Los Pedidos fueron Descargados');
        }, 3000);
    })
}

// Es decir, que en lo que se descarga la base de datos, el resto del código continúa funcionando normalmente
async function app() {
    try {
        // En este caso no se empiezan a descargar al mismo tiempo, así que debemos optimizarlo
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarUltimosPedidos();
        // console.log('Este código si se bloquea');
        // mostrarClientes(resultado); No se ejecutará hasta que la línea del await lo haga
        // console.log(clientes);

        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]);
        // Con el [] lo veremos como un resultado y no en forma de arreglo
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

app();

console.log('Este código no se bloquea');

// Pasan 5 segundos hasta que se muestre (estamos simulando que estamos descargando algo de una base de datos)
// setTimeout(function () {
//     console.log('set timeout...');
// }, 5000);

// Existe setInterval, que envía el mensaje en intervalos de tiempo indicado