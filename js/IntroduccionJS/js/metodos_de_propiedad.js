// Métodos de propiedad

const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo Canción con el ID: ${id}`);
    },
    pausar: function () {
        console.log('Pausando...');
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la Playlist: ${nombre}`);
    },
    reproducirPlaylist: function (nombre) {
        console.log(`Reproduciendo la Playlist: ${nombre}`);
    }
}

// Crear método fuera del objeto
reproductor.borrarCancion = function (id) {
    console.log(`Eliminando la canción: ${id}`)
} 

reproductor.reproducir(3840); // Le pasaríamos el supuesto id
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('Empty street');
reproductor.reproducirPlaylist('Empty street');