// Notificación API

//hace referencia a todo el archivo html y luego concreta
const boton = document.querySelector('#boton');
// (1) Cuando el usuario haga X, (2) Se ejecuta X 
boton.addEventListener('click', () => {
    Notification.requestPermission()
        .then(resultado => console.log('El resultado es: ', resultado))
})

if (Notification.permission == 'granted') {
    new Notification('Esta es una notificación', {
        icon: 'img/Lin_Manuel.png',
        body: 'Lin Manuel Miranda, el mejor artista musical'
    })
}