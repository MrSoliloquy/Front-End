// Fetch Api

function obtenerEmpleados() {
    
    const archivo = 'js/empleados_fetch.json' // Buena práctica
    // fetch('http://www.google.com/api'); pueden ir urls
    fetch(archivo)
        .then(resultado => resultado.json())
        // Una vez que sabemos que se trata de un json y la conexión fue correcta, obtenemos los datos y los mostramos
        .then(datos => {
            const { empleados } = datos; // Destructuración
            // console.log(empleados);

            empleados.forEach(empleado => {
                console.log(empleado.nombre);
                console.log(empleado.id);
                console.log(empleado.puesto);
                
                // Escribir en html
                document.querySelector('.contenido').textContent += empleado.nombre;
            })
        })

        
    
}
obtenerEmpleados();