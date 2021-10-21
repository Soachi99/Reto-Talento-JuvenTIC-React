export function cargarTotales()
{
    if(localStorage.getItem('productos') == null || localStorage.getItem('num_productos') == null) 
    {
        document.getElementById("total_final").innerHTML = "Total productos:" 
        document.getElementById("servicio").innerHTML = "Servicio:"        
        document.getElementById("gran_total").innerHTML = "Total:"
    }
    else{
        let data = JSON.parse(localStorage.getItem('productos'));  
        var total = 0;
        var final_total = 0;
        for (let item of data) {          
            total = item.count * item.precio;
            final_total += total;
        }
        document.getElementById("total_final").innerHTML = "Total productos: $" + final_total.toString();
        document.getElementById("servicio").innerHTML = "Servicio: $3500"
        let gran_total = final_total + 3500;
        document.getElementById("gran_total").innerHTML = "Total: $" + gran_total.toString();
    }
}