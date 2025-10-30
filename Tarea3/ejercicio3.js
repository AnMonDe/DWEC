document.getElementById("salida").innerHTML = localStorage.contador;

function contadorClick(){
    if (Number(localStorage.contador)>=Number.MAX_SAFE_INTEGER){
        alert("Ya no se pueden realizar nmás clicks");
        return;
    }
    if(localStorage.contador){
        localStorage.contador = Number(localStorage.contador)+1;
    } else {
        localStorage.contador = 1;
    }
    document.getElementById("salida").innerHTML = localStorage.contador;
}

