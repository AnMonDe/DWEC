let cabecera = document.createElement("div")
cabecera.id = "cabecera"
cabecera.textContent = "LOTERÍA PRIMITIVA."
document.body.appendChild(cabecera)

let numeros = document.createElement("div")
numeros.id = "numeros"
botones()
document.body.appendChild(numeros)

let sorteo = document.createElement("div")
sorteo.id = "sorteo"
document.body.appendChild(sorteo)

let enviar = document.createElement("button")
enviar.innerHTML = "Realizar<br>sorteo"
enviar.id = "enviar"
sorteo.appendChild(enviar)
//funcion generar numero aleatorios

let salida = document.createElement("div")
salida.id = "salida"
document.body.appendChild(salida)

function botones(){
    for(let i = 1 ; i <= 50; i++){
        let boton = document.createElement("button")
        boton.textContent = i
        numeros.appendChild(boton)
    }
}

document.addEventListener("click", function(event){
    if (event.target.parentElement.id === "numeros") {
        let numero = event.target.textContent;
        let seleccionado = sorteo.querySelector(`button[dato="${numero}"]`)

        if (seleccionado) {
            seleccionado.remove()
        } 
        else if (sorteo.querySelectorAll('button[dato]').length < 6) {
            let seleccion = document.createElement("button")
            seleccion.textContent = numero
            seleccion.setAttribute("dato", numero)
            seleccion.id = "seleccion"
            sorteo.appendChild(seleccion)
        }
    }
});
