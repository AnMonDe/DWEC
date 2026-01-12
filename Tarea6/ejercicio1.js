let valor = ""
let entrada
let salida


let exterior = document.createElement("div")
exterior.id = "exterior"
document.body.appendChild(exterior)

entrada = document.createElement("input")
entrada.id = "entrada"
entrada.type = "password"
exterior.appendChild(entrada)

let teclado = document.createElement("div")
teclado.id = "teclado"
exterior.appendChild(teclado)

let numeros =[1, 2, 3, 4, 5, 6, 7, 8, 9]

numeros = numeros.sort(()=>Math.random()-0.5)
numeros.forEach(num=>{
    let boton = document.createElement("button")
    boton.textContent = num
    boton.onclick = () => agregarN(num)
    teclado.appendChild(boton)
})

let borrar = document.createElement("button")
borrar.textContent = "C"
borrar.className = "accion"
borrar.id = "borrar"
borrar.onclick = borrarN
teclado.appendChild(borrar)

let validar = document.createElement("button")
validar.textContent = "VALIDAR"
validar.className = "accion"
validar.id = "validar"
validar.onclick = validarN
teclado.appendChild(validar)

salida = document.createElement("div")
salida.id = "mensaje"
exterior.appendChild(salida)

function agregarN(numero){
    entrada.value += numero
    salida.textContent = ""
}

function borrarN(){
    entrada.value = entrada.value.slice(0, -1)
    salida.textContent = ""
}

function validarN(){
    let valor = entrada.value
    let patron = /^9999$/

    if (valor.length !== 4){
        salida.textContent = "No has introducido 4"
        return
    }

    if (patron.test(valor)){
        salida.textContent = "Contraseña correcta"
    } else {
        salida.textContent = "Contraseña incorrecta"
    }
}