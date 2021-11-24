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
