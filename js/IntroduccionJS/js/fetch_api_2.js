// Fetch Api con async / await

async function obtenerEmpleados() {

    const archivo = 'js/empleados_fetch.json';

    // Si hay cualquier problema con el archivo, datos esperará hasta que pueda ejecutarse
    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);
}
obtenerEmpleados();