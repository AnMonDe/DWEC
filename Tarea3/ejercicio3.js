document.getElementById("salida").innerHTML = localStorage.contador; //Muestra en pantalla la cantidad almacenada

function contadorClick(){ //Funcion contadora
    if (Number(localStorage.contador)>=Number.MAX_SAFE_INTEGER){ //Inicio condicional numero preciso
        alert("Ya no se pueden realizar nmás clicks"); //Alerta si pasa del numero preciso
        return; //Cierre de la funcion
    }
    if(localStorage.contador){ //Inicio condicional contador
        localStorage.contador = Number(localStorage.contador)+1; //Suma uno al contador
    } else { //No se cumple el condicional
        localStorage.contador = 1; //Inicia el contador 
    }
    document.getElementById("salida").innerHTML = localStorage.contador; //Muestra en pantalla la actualizacion
}

