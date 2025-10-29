document.getElementById("salida").innerHTML = localStorage.contador;

function contadorClick(){
    if(localStorage.contador){
        localStorage.contador = Number(localStorage.contador)+1;
    } else {
        localStorage.contador = 1;
    }
    document.getElementById("salida").innerHTML = localStorage.contador;
}

