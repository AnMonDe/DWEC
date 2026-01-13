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
//funcion generar numero aleatorios y boton
document.body.appendChild(sorteo)

let salida = document.createElement("div")
salida.id = "salida"
//salida.textContent = `Has tenido ${aciertos} aciertos.`
document.body.appendChild(salida)

function botones(){
    for(let i = 1 ; i <= 50; i++){
        let boton = document.createElement("button")
        boton.textContent = i
        numeros.appendChild(boton)
    }
}