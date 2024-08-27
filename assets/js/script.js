document.querySelector('#btnSubmit').addEventListener('click', function (event) {
    event.preventDefault();
    guardarDatosMensajes();
    mensajeGracias()
    document.getElementById("nameInput").value = "";
    document.getElementById("emailInput").value = "";
    document.getElementById("mensajeInput").value = "";
    mostrarPopup();
});

function guardarDatosMensajes() {
    var guardarMensajeNombre = document.querySelector('#nameInput').value,
        guardarMensajeEmail = document.querySelector('#emailInput').value,
        guardarMensajeTexto = document.querySelector('#mensajeInput').value;

    var nuevoMensaje = {
        nombre: guardarMensajeNombre,
        email: guardarMensajeEmail,
        mensaje: guardarMensajeTexto
    };

    console.log('Datos enviados:', JSON.stringify(nuevoMensaje, null, 2));
}

function mostrarPopup() {
    var popupModal = new bootstrap.Modal(document.getElementById('mensajeEnviadoModal'));
    popupModal.show();
}

//funcion para agradecer por nombre por el mensaje
function mensajeGracias() {
    var nombre = document.querySelector('#nameInput').value;
    var mensajeModal = document.querySelector('#mensajeEnviadoModal .modal-body');
    mensajeModal.textContent = `${nombre}, ¡Gracias por tu mensaje!`;
}