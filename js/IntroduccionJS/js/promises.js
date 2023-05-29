// Promises

const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = true;

    if(auth) {
        resolve('Usuario Autenticado'); // EL PROMISE SE CUMPLE
    } else {
        reject('No se pudo iniciar sesión'); // EL PROMISE NO SE CUMPLE
    }
});

usuarioAutenticado
    // resultado es el valor que se pasa a resolve()
    .then( resultado => console.log(resultado))
    // error es el valor que se pasa a reject()
    .catch ( error => console.log(error))

// En los Promises existen 3 valores
// * Pending: NO se ha cumplido PERO TAMPOCO se ha rechazado
// * Fullfilled: YA se cumplió
// * Rejected: Se ha rechazado o no se pudo cumplir