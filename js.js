function compras() {
    var prod = parseInt(prompt("¿Cuántos productos quiere comprar?"));
    var precio = 0;
    for (let i = 0; i < prod; i++) {
        precio += parseInt(prompt("¿Cuánto vale el producto " + (i + 1) + "?"));
    }
    var perfume = window.confirm("¿Desea adquirir un perfume olor pachuli por 10€?");
    if (perfume) {
        precio += 10;
    }
    var socio = window.confirm("¿Desea hacerse socio de la tienda para obtener un 10% de descuento?");
    if (socio) {
        precio *= 0.9;
    }
    alert("Precio final: " + precio);
    alert("Solo para ENTORNOS DE DESARROLLO");
}

//compras();

var colores = ["#7632DB", "#DB32CC", "#AC32DB", "#1F11E1", " #130B89", "#DB3267"];
var contador = 0;

function paleta() {
    document.getElementsByTagName("h1")[0].textContent = "Crea tu paleta de colores";
    for (let i = 0; i < 6; i++) {
        var div = document.createElement("div");
        div.style.border = "1px solid black";
        div.style.width = "12%";
        div.style.height = "100px";
        div.style.backgroundColor = colores[i];
        div.onclick = function () {
            if (contador < 2) {
                document.getElementsByTagName("td")[contador].style.backgroundColor = colores[i];
                contador++;
            } else if (contador >= 2 && contador < 4) {
                document.getElementsByTagName("td")[contador].style.backgroundColor = colores[i];
                contador++;
                if (contador == 4) {
                    var reset = document.createElement("button");
                    reset.textContent = "Resetear paleta";
                    reset.style.display = "block";
                    reset.onclick = function () {
                        for (let i = 0; i < 4; i++) {
                            document.getElementsByTagName("td")[i].style.backgroundColor = "white";
                        }
                        contador = 0;
                        reset.remove();
                    }
                    document.body.appendChild(reset);
                }
            }
        }
        document.getElementById("container").appendChild(div);
    }
}

paleta();