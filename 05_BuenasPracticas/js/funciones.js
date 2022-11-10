/*
El fichero JS debería cumplir las siguientes reglas

1) El evento windows.onload debe encargarse de manejar los eventos, esto es, de asignar a los elementos html los eventos y las funciones asociadas.
Esto se hace así que no se ha cargado del todo la pagina entera y no existen los elementos HTML.

2)Las funciones debería ir fuera del evento window.onload para que puedan ser usadas en cualquier momento, y no cuando se haya terminado de cargar la pagina.
*/ 

//Funciones 

function muestraMensaje(){
    var elDiv = document.getElementById("div_principal");//seleccionamos el div por el ID
    console.log("Has pulsado el raton");
}

function limiteOnload(textArea, maximoCaracteres){
    if(textArea.value.length >= maximoCaracteres){
        maxNumeroAlcanzadoOnLoad.style.display = "block"
        return false;
    } else {
        maxNumeroAlcanzadoOnLoad.style.display= "none"
        return true;
    }
}

function sumar(a, b){
    var resultado = a + b;
    return resultado
}

//Finalizan las funciones

//WINDOWS ONLOAD 
window.onload = function (){

    //add evento textAtera
    textArea.onkeypress = function(e){
        if(!limiteOnload(textArea,10)){
            e.preventDefault()
        }
    }

    var elDiv = document.getElementById("div_principal");
    //añadimos el evento al div
    elDiv.addEventListener("click", muestraMensaje);

    botonSumar.onclick = function(){
        let valor1 = parseInt(numero1.value)//Lo convertimos a INT porque todo lo que entra por HTML es un STRING 
        let valor2 = parseInt(numero2.value)
        let resultadoSuma = sumar(valor1, valor2)

        resultado.value = resultadoSuma
        console.log(resultadoSuma)
    }
}//FIN WINDOW.ONLOAD