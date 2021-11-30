/*
let NombreDeUsuario = prompt("Dinos Tu Nombre");
let NumeroAsiento = prompt("Dinos Tu asiento");

if (NumeroAsiento < 20){
    alert ( NombreDeUsuario + " dirigase por el pasillo a ")
}
else if (NumeroAsiento < 40){
    alert ( NombreDeUsuario + " dirigase por el pasillo b ")
}
else if (NumeroAsiento > 41){
    alert (" Reingrese el numero de asiento, este no existe ")
}


for(let i = 1; i<=10; i++) {
    console.log(i)
}

*/
alert (" coloque los precios de sus productos y los calcularemos en el carrito y su envio")

let repetir = true;
let acumulador = 0;

while(repetir) {
    let totalCarrito = parseInt(prompt("ingresa precio del producto al carrito"))
    if(totalCarrito >= 300 && totalCarrito <=1500) {
        acumulador += totalCarrito
    } else {
        alert ("precio incorrecto")
    }

    let continua = prompt("desea agregar otro producto al carrito?").toLowerCase()

    if(continua == "no") {
        repetir = false;
    }
}

alert (`el total de la compra es ${acumulador} y el envio ${acumulador * 0.15}`)