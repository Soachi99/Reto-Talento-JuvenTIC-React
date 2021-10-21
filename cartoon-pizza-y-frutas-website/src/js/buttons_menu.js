import swal from 'sweetalert';

export function masProducto(num) {
    var valuebtn = document.getElementById("plus_" + num.toString()).value;
    var count = parseInt(document.getElementById("numero_productos_" + valuebtn).textContent);
    count = count + 1;
    document.getElementById("numero_productos_" + valuebtn).innerHTML = count.toString();
}

export function menosProducto(num) {
    var valuebtn = document.getElementById("minus_" + num.toString()).value;
    var count = parseInt(document.getElementById("numero_productos_" + valuebtn).textContent);
    count = count - 1;
    if (count < 0) {
        count = 0;
    }
    document.getElementById("numero_productos_" + valuebtn).innerHTML = count.toString();
}

export function addCarrito(num) {
    var ID = document.getElementById("add_" + num.toString()).value;
    let count = parseInt(document.getElementById("numero_productos_" + ID).textContent);
    let producto = document.getElementById("nombre_" + ID).textContent;
    let descripcion = document.getElementById("des_" + ID).textContent;
    let precio_text = document.getElementById("precio_" + ID).textContent;
    let precio = parseInt(precio_text.substr(9, 13));
    let imagen = document.getElementById("imagen_" + ID).getAttribute('src');

    if (count <= 0) {
        swal("Error", "No has seleccionado las unidades que deseas del producto que quieres agregar", "error");
    }
    else {

        const productos = {
            producto, descripcion, precio, count, imagen, ID
        }

        var count_products = parseInt(document.getElementById("numero").textContent);
        count_products = count_products + 1;
        document.getElementById("numero").innerHTML = count_products.toString();
        localStorage.setItem('num_productos', count_products);

        if (localStorage.getItem('productos') == null) {
            let adddatos = []
            adddatos.push(productos);
            localStorage.setItem('productos', JSON.stringify(adddatos));
            console.log('producto agregado al carrito');
            document.getElementById("numero_productos_" + ID).innerHTML = 0;
            swal("Completado", "El producto seleccionado se ha añadido al carrito de compras", "success");
        } else {
            let adddatos = JSON.parse(localStorage.getItem('productos'));
            adddatos.push(productos);
            localStorage.setItem('productos', JSON.stringify(adddatos));
            console.log('mas productos')
            document.getElementById("numero_productos_" + ID).innerHTML = 0;
            swal("Completado", "El producto seleccionado se ha añadido al carrito de compras", "success");
        }
    }
}