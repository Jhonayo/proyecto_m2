var mensajesRecibidos = [];

var peliculaDatos = [];

function agregarDatosMensaje(nombreMensaje, emailMensaje, textoMensaje){
    var NuevoMensaje = {
        nombre: nombreMensaje,
        email: emailMensaje,
        mensaje: textoMensaje
    };
    console.log(NuevoMensaje);
    mensajesRecibidos.push(NuevoMensaje);avance
}
/*
function agregarDatosPelicula(peliculaTitulo, peliculaDirector, peliculaFechaLanzamiento) {
    
    var NuevaPelicula = {
        title: peliculaTitulo,
        director: peliculaDirector,
        date: peliculaFechaLanzamiento
    };

    console.log(NuevaPelicula); 
    peliculaDatos.push(NuevaPelicula);
}*/


//function obtenerListaPelicula() {
function obtenerListaMensajes(){
    return mensajesRecibidos;
    //return peliculaDatos;
}