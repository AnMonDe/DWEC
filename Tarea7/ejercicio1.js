let url = "https://jsonplaceholder.typicode.com/users"
let todo = []

fetch(url)
    .then(respuesta => respuesta.json())
    .then(datos => {todo = datos
    mostrarDatos(todo)})
    //.then(datos => console.log(datos))

let boton = document.getElementById("buscar")

boton.addEventListener("click",()=>{
    let entrada = document.getElementById("entrada").value

    let resultado = todo.filter(user => user.name.includes(entrada))

    document.getElementById("tabla").innerHTML=""

    mostrarDatos(resultado)
})

function mostrarDatos(datos){
    let cuerpo = document.getElementById("tabla")
    for(let i in datos){
        let fila = document.createElement("tr")

        let celdaNombre = document.createElement("td")
        celdaNombre.innerHTML = datos[i].name
        fila.appendChild(celdaNombre)

        let celdaCalle = document.createElement("td")
        celdaCalle.innerHTML = datos[i].address.street
        fila.appendChild(celdaCalle)

        let celdaCiudad = document.createElement("td")
        celdaCiudad.innerHTML = datos[i].address.city
        fila.appendChild(celdaCiudad)

        cuerpo.appendChild(fila)
    }
}