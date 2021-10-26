import Swal from "sweetalert2";


export function Logout() {
    Swal.fire({
        title: '¿Estas seguro de cerrar la sesión?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem('admin_view');
            window.location.href = "/"
        }
    })
}


export function Login() {
    Swal.fire({
        title: 'Inicio de sesión',
        html:
            `<input type="text" id="usuario" class="swal2-input" placeholder="Nombre de usuario">
        <input type="password" id="password" class="swal2-input" placeholder="Contraseña">`,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Entrar',
        showDenyButton: true,
        denyButtonColor: '#3085d6',
        denyButtonText: 'Registrarse',
        focusConfirm: false,
        preConfirm: () => {
            const login = Swal.getPopup().querySelector('#usuario').value
            const password = Swal.getPopup().querySelector('#password').value

            let data = JSON.parse(localStorage.getItem('admin'));            
            var band = 0;

            if (!login || !password) {
                Swal.showValidationMessage(`Por favor llene los campos`)
            }

            for (let i = 0; i < data.length; i++) {
                
                if ((data[i].usuario === login) && (data[i].password === password)) {
                    localStorage.setItem("admin_view", true)
                    window.location.href = "/admin"
                    band = 1;
                    break;
                }  

            }

            if(band === 0)
            {
                for (let j = 0; j < data.length; j++) {
                    if (!(data[j].usuario === login)) {
                        Swal.showValidationMessage(`Usuario incorrecto`)
                    }
                    if (!(data[j].password === password)) {
                        Swal.showValidationMessage(`Contraseña incorrecta`)
                    }
                }
            }

        }
    }).then((result) => {
        if (result.isDenied) {
            Registro();
        }

    })
}

function Registro() {
    Swal.fire({
        title: 'Registrate',
        html:
            `<input type="text" id="usuario_registro" class="swal2-input" placeholder="Nombre de usuario">
        <input type="password" id="password_registro_one" class="swal2-input" placeholder="Contraseña">
        <input type="password" id="password_registro_two" class="swal2-input" placeholder="Confirma la contraseña">`,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Registrarse',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        focusConfirm: false,
        preConfirm: () => {
            const usuario = Swal.getPopup().querySelector('#usuario_registro').value
            const pass_one = Swal.getPopup().querySelector('#password_registro_one').value
            const pass_two = Swal.getPopup().querySelector('#password_registro_two').value
            if (!usuario || !pass_one || !pass_two) {
                Swal.showValidationMessage(`Por favor llene los campos`)
            }
            else if (!(pass_one === pass_two)) {
                Swal.showValidationMessage(`Las contraseñas no son iguales. Digite nuevamente`)
            }
        }
    }).then((result) => {
        const usuario = Swal.getPopup().querySelector('#usuario_registro').value
        const pass_one = Swal.getPopup().querySelector('#password_registro_one').value
        RegistroCompletado(usuario, pass_one)
    })
}

function RegistroCompletado(usuario, password) {
    const datos = {
        usuario, password
    }

    if (localStorage.getItem('admin') == null) {
        let adddatos = []
        adddatos.push(datos);
        localStorage.setItem('admin', JSON.stringify(adddatos));
        Swal.fire({
            icon: 'success',
            title: 'Registro completado',
            showConfirmButton: false,
            timer: 1500
        });
    } else {
        let adddatos = JSON.parse(localStorage.getItem('admin'));
        adddatos.push(datos);
        localStorage.setItem('admin', JSON.stringify(adddatos));
        Swal.fire({
            icon: 'success',
            title: 'Registro completado',
            showConfirmButton: false,
            timer: 1500
        });
    }
}