let total = 0;
let variableSocio = 200;
let variableCuota = 500;
let variablePrestamo = 150;
let ciclo = 0

let variableCantidadOperaciones = parseInt(prompt('cuantas operaciones desea realizar'))
while (variableCantidadOperaciones > ciclo){

let opcion = parseInt(prompt("Bienvenido, por favor indique el número de la opcion deseada. \n\n\n 1 - Volverse socio de la Biblioteca ($200) \n 2 - Pagar la Cuota socio ($500) \n 3 -Prestamo de libro mayor a 15 dias ($150) \n 4 -Finalizar consulta" ));

function biblioteca() {
    
if (opcion === 1) {
    return alert('Su total es: $' + variableSocio);

} else if (opcion === 2){
    return alert('Su total es: $' + variableCuota);

}else if(opcion === 3) {
    return alert('Su total es: $' + variablePrestamo);

}else if (opcion === 4) {
    return alert("Consulta finalizada");


}}

biblioteca ()
ciclo++
}

alert ('operaciones realizadas correctamente')