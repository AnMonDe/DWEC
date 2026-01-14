let cabecera = document.createElement("div")
cabecera.id = "cabecera"
cabecera.textContent = "LOTERÍA PRIMITIVA."
document.body.appendChild(cabecera)

let numeros = document.createElement("div")
numeros.id = "numeros"
document.body.appendChild(numeros)
botones()

let sorteo = document.createElement("div")
sorteo.id = "sorteo"
document.body.appendChild(sorteo)

let enviar = document.createElement("button")
enviar.innerHTML = "Realizar<br>sorteo"
enviar.id = "enviar"
sorteo.appendChild(enviar)

let salida = document.createElement("div")
salida.id = "salida"
document.body.appendChild(salida)

let seleccionUsuario = []

function botones() {
    for (let i = 1; i <= 49; i++) {
        let boton = document.createElement("button")
        boton.textContent = i
        boton.dataset.num = i
        numeros.appendChild(boton)
    }
}

numeros.addEventListener("click", function(e) {
    if (e.target.tagName === "BUTTON") {
        manejarSeleccion(e.target)
    }
})

function manejarSeleccion(boton) {
    let numero = parseInt(boton.dataset.num)

    if (seleccionUsuario.includes(numero)) {
        seleccionUsuario = seleccionUsuario.filter(n => n !== numero)
        boton.classList.remove("seleccionado")
    } else {
        if (seleccionUsuario.length < 6) {
            seleccionUsuario.push(numero)
            boton.classList.add("seleccionado")
        } else {
            alert("Solo puedes marcar 6 números.")
        }
    }
}

enviar.addEventListener("click", realizarSorteo)

function realizarSorteo() {
    if (seleccionUsuario.length !== 6) {
        alert("Debes seleccionar 6 números antes de realizar el sorteo.")
        return
    }

    while (sorteo.children.length > 1) {
        sorteo.removeChild(sorteo.lastChild)
    }
    
    let ganadores = []
    while (ganadores.length < 6) {
        let n = Math.floor(Math.random() * 49) + 1
        if (!ganadores.includes(n)) {
            ganadores.push(n)
        }
    }

    ganadores.forEach(num => {
        let bola = document.createElement("div")
        bola.textContent = num
        bola.className = "resultado"
        sorteo.appendChild(bola)
    })

    let aciertos = 0
    seleccionUsuario.forEach(tuNumero => {
        if (ganadores.includes(tuNumero)) {
            aciertos++
        }
    })

    salida.textContent = "Has tenido " + aciertos + " aciertos."
}
