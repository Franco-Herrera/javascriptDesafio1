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




const precioBaseCorreo = 200
const precioHasta5 = 300
const precioHasta15 = 700
const precioHasta30 = 1200
const IVA = 1.21
const envioNacional = 1.25
const envioInternacional = 1.50

function envioCorreo (NombreDeUsuario){

    let cuentaPeso = 0 ;
    //let cuentaEnvioNacional = 0 ;
    //let cuentaEnvioInternacional = 0 ;
    
    let resultado = 0 ;

    let pesoPaquete = parseInt(prompt("de cuanto kilos es el peso del paquete a enviar?"))

    if(pesoPaquete >=1 && pesoPaquete <= 5){
        cuentaPeso = precioBaseCorreo + precioHasta5
    }
    else if(pesoPaquete >=6 && pesoPaquete <= 15){
        cuentaPeso = precioBaseCorreo + precioHasta15

    }
    else if(pesoPaquete >=16 && pesoPaquete <= 30){
        cuentaPeso = precioBaseCorreo + precioHasta30
    
    }   
    alert( " el recargo por el peso es de $" + cuentaPeso)
    
    let claseEnvio = prompt("Su envio es de clase nacional o internacional?").toLowerCase() 
    if(claseEnvio == "nacional"){
        resultado = (cuentaPeso * envioNacional * IVA)
    }
    else if(claseEnvio == "internacional"){
        resultado = (cuentaPeso * envioInternacional * IVA)
    }
    
    alert ( NombreDeUsuario + " , el precio de tu envio es de $ " + resultado)
}
let NombreDeUsuario = prompt ("dinos tu nombre")
envioCorreo (NombreDeUsuario)


*/

function Paquete(remitente, destinatario, peso, altura,){
    this.remitente = remitente;
    this.destinatario = destinatario;
    this.peso = peso;
    this.altura = altura;
    this.corroborar = () => console.log(`hola ${this.remitente} estos datos son los correctos? destinatario ${this.destinatario} peso del paquete ${this.peso} altura ${this.altura} ?`)
}

const paquete1 = new Paquete ("franco herrera", "mateo fernandez", "12", "150 centimetros")
const paquete2 = new Paquete ("alma gutierrez", "naara contreras", "4", "50 centimetros")


paquete1.corroborar() 
paquete2.corroborar() 






