/*
* CREAMOS LA FUNCION RETORNAR FECHA
* creamos la variable fecha y le asignamos un objeto de la clase DATE
* creamos la variable cadena y llamamos a las funciones DATE, MONTH, FULLYEAR.
*/
function retornarfecha(){
    var fecha = new Date();
    var cadena = fecha.getDate() + '/' + (fecha.getMonth()+1) + '/' + fecha.getFullYear();
    return cadena;
}
/*
* CREAMOS LA FUNCION RETORNAR HORA
* creamos la variable fecha y le asignamos un objeto de la clase DATE.
* Creamos la variable cadema y le asignamos las funciones de HOURS, MINUTES, Seconds
*/
function retornarHora(){
    var fecha = new Date();
    var cadena = fecha.getHours()+ ':' + fecha.getMinutes() + ':' + fecha.getSeconds();
    return cadena;
}
/*
* CREAMOS LA FUNCION RETORNAR MILISEGUNDOS
* creamos la variable fecha y le asignamos un objeto de la clase DATE.
* Creamos una variable y le asignamos la función TIME.
*/
function retornarMilisegundos(){
    var fecha = new Date();
    var tiempoEnMilisegundos = fecha.getTime();
    return tiempoEnMilisegundos;
}