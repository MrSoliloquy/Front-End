// This

// this hace referencia al objeto sobre el cual se está mandando a llamar la función
// con el arrow function no funciona ya que hace referencia a window (ventana global) y tendríamos que declarar algo como:
// window.nombre = 'Un nombre';
const reserva = {
    nombre: 'Conor',
    apellido: 'Rojas',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El Cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}

// Antes de aplicar el this, la variable nombre y total no está definida en la función
console.log(reserva.informacion());