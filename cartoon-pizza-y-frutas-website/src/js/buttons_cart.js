export function masProductoCart(num) {
    var valuebtn = document.getElementById("plus_" + num.toString()).value;
    var count = parseInt(document.getElementById("numero_productos_" + valuebtn).textContent);
    count = count + 1;
    document.getElementById("numero_productos_" + valuebtn).innerHTML = count.toString();

    var precio_text = document.getElementById("precio_" + valuebtn).textContent;
    var precio_u = parseInt(precio_text.substr(10, 13));
    console.log(precio_u);
    var total = count * precio_u;
    document.querySelector("#precio_" + valuebtn).innerHTML = ` Precio: $${precio_u} <br> Precio Total: $${total} `;


    var total_text = document.getElementById("total_final").textContent;
    var final_total = parseInt(total_text.substr(18, 38)) + precio_u;
    document.getElementById("total_final").innerHTML = "Total productos: $" + final_total.toString();
    document.getElementById("servicio").innerHTML = "Servicio: $3500";
    let gran_total = final_total + 3500;
    document.getElementById("gran_total").innerHTML = "Total: $" + gran_total.toString();

    let data = JSON.parse(localStorage.getItem('productos'));
    for (let i = 0; i < data.length; i++) {
        if (data[i].ID === valuebtn) {
            data[i].count = count;
        }
    }
    localStorage.setItem('productos', JSON.stringify(data));

}

export function menosProductoCart(num) {
    var valuebtn = document.getElementById("minus_" + num.toString()).value;
    var count = parseInt(document.getElementById("numero_productos_" + valuebtn).textContent);
    count = count - 1;
    if (count < 1) {
        count = 1;
    }
    else {
        var precio_text = document.getElementById("precio_" + valuebtn).textContent;
        var precio_u = parseInt(precio_text.substr(10, 13));
        var total = count * precio_u;
        document.querySelector("#precio_" + valuebtn).innerHTML = ` Precio: $${precio_u} <br> Precio Total: $${total}`;

        var total_text = document.getElementById("total_final").textContent;
        var final_total = parseInt(total_text.substr(18, 38)) - precio_u;
        document.getElementById("total_final").innerHTML = "Total productos: $" + final_total.toString();
        document.getElementById("servicio").innerHTML = "Servicio: $3500";
        let gran_total = final_total + 3500;
        document.getElementById("gran_total").innerHTML = "Total: $" + gran_total.toString();
    }
    document.getElementById("numero_productos_" + valuebtn).innerHTML = count.toString();

    let data = JSON.parse(localStorage.getItem('productos'));
    for (let i = 0; i < data.length; i++) {
        if (data[i].ID === valuebtn) {
            data[i].count = count;
        }
    }
    localStorage.setItem('productos', JSON.stringify(data));
}