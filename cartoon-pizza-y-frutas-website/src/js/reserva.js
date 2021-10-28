export function Limpiar() {
    const form = document.querySelector('.contenedor-form-reserva form');
    form.reset();
    document.querySelector('#name').focus();
};