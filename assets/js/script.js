document.querySelector('#btnSubmit').addEventListener('click', function (event) {
    event.preventDefault();
    guardarDatosMensajes();
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