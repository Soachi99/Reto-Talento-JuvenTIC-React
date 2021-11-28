export function cargarNumProducts(){
    if(localStorage.getItem('num_productos') == null) {
        var count_products = 0;
        if(count_products < 0)
        {
            count_products = 0;
        }
        document.getElementById("numero").innerHTML = count_products.toString();
    }
    else
    {        
        count_products = localStorage.getItem('num_productos');
        if(count_products < 0)
        {
            count_products = 0;
        }
        document.getElementById("numero").innerHTML = count_products.toString();
    }
}

