import Swal from "sweetalert2";


export function Validarproductos() {
    /* eslint-disable */
    if (localStorage.getItem('productos') === null || localStorage.getItem('num_productos') === null || localStorage.getItem('num_productos') == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No has agregado ningun producto a tu carrito',
            footer: 'Ve a - <a href="/menu"> Menú </a> - y selecciona tus productos favoritos',
            confirmButtonColor: '#3085d6'
        });
    }
    else {
        Swal.fire({
            title: 'Confirma tu pedido',
            html: `<input type="text" id="nombre" class="swal2-input" placeholder="Nombre completo*">
                <input type="email" id="email" class="swal2-input" placeholder="Email*">
                <input type="textarea" style="height:100px" id="comentarios" class="swal2-input" placeholder="Comentarios">`,
            confirmButtonText: 'Confirmar',
            confirmButtonColor: '#3085d6',
            showCancelButton: true,
            focusConfirm: false,
            preConfirm: () => {
                const nombre = Swal.getPopup().querySelector('#nombre').value
                const email = Swal.getPopup().querySelector('#email').value
                const comentarios = Swal.getPopup().querySelector('#comentarios').value
                if (!nombre || !email) {
                    Swal.showValidationMessage(`Por favor llene los campos obligatorios`)
                }
                else if (!(email.includes("@gmail"))) {
                    Swal.showValidationMessage(`Escriba un correo electronico valido`)
                }
                else {
                    emailcliente(nombre,email,comentarios);
                }
            }
        })
    }

}


function emailcliente(nombre, email, comentarios) {
    let datos = JSON.parse(localStorage.getItem('productos'));
    var total = 0;
    var final_total = 0;
    var contentHtml = `
        <h1>Confirmación del pedido</h1>
        <p>Señor/a ${nombre}, sus productos han sido reservados correctamente, estos fueron:</p>  
        <ul>    
        `;

    for (let item of datos) {
        total = item.count * item.precio;
        final_total += total;
        console.log(item.producto);
        contentHtml += ` <li> ${item.producto}, cantidad: ${item.count}, precio unitario: $${item.precio}, subtotal: ${total} </li>
                    `;
    }
    final_total += 3500;
    contentHtml += `</ul>
        <p> Total a cancelar, contando servicio ($3500): $${final_total} </p> 
        <p> Observaciones: ${comentarios} </p>
        <h2> Gracias por contar con Cartoon Pizza y Frutas, ¡Te esperamos! </h2>
        `;

    Email.send({
        Host: "smtp.gmail.com",
        Username: "cartoonpyf@gmail.com",
        Password: "cartoonpizza",
        From: "cartoonpyf@gmail.com",
        To: [email],
        Subject: "Confirmación de los productos reservados",
        Body: contentHtml
    }).then(
        emailADmin(nombre, email, comentarios)
    );
}

function emailADmin(nombre, email, comentarios){
    let datos = JSON.parse(localStorage.getItem('productos'));
    var total = 0;
    var final_total = 0;
    var contentHtml = `
        <h1>Copia del pedido</h1>
        <p>El señor/a ${nombre}, con correo electronico ${email}, ha reservado los siguientes productos:</p>  
        <ul>    
        `;

    for (let item of datos) {
        total = item.count * item.precio;
        final_total += total;
        console.log(item.producto);
        contentHtml += ` <li> ${item.producto}, cantidad: ${item.count}, precio unitario: $${item.precio}, subtotal: ${total} </li>
                    `;
    }
    final_total += 3500;
    contentHtml += `</ul>
        <p> Total a cancelar, contando servicio ($3500): $${final_total} </p> 
        <p> Observaciones: ${comentarios} </p>
        <h2> Cartoon Pizza y Frutas, ¡Te esperamos! </h2>
        `;

    Email.send({
        Host: "smtp.gmail.com",
        Username: "cartoonpyf@gmail.com",
        Password: "cartoonpizza",
        From: "cartoonpyf@gmail.com",
        To: "cartooncliente@gmail.com",
        Subject: "Copia confirmación de los productos reservados",
        Body: contentHtml
    }).then(
        Swal.fire({
            icon: 'success',
            title: 'Completado',
            text: 'Sus productos se han reservado correctamente, una copia con el pedido llegara a su correo',
            confirmButtonColor: '#3085d6'
        })
    );
}
