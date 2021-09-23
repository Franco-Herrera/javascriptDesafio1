
let numeroDeAbordaje = prompt ("Tu Numero De Abordaje");

alert( " Bienvenido, Tu numero de asiento es el " + numeroDeAbordaje + "!");

if (numeroDeAbordaje <= 10) {
    alert ( "dirigete al asiento por el pasillo a");
}
else if (numeroDeAbordaje <= 19) {
    alert ( "dirigete al asiento por el pasillo b");
}
else if (numeroDeAbordaje <= 30) {
    alert ( "dirigete al asiento por el pasillo c");
}
else if (numeroDeAbordaje > 31) {
    alert(" has ingresado mal el numero de abordaje, intentelo nuevamente")
}