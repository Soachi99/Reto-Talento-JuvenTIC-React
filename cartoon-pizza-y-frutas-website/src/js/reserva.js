export function Limpiar() {
    const form = document.querySelector('.contenedor-form-reserva form');
    form.reset();
    document.querySelector('#name').focus();
}

export function guardarDatos(e) {
    const nombre = document.querySelector('#name');
    const email = document.querySelector('#email');
    const telefono = document.querySelector('#telefono');
    const numeroPersonas = document.querySelector('#numeroPersonas');


    e.preventDefault();
    console.log(nombre.value);
}