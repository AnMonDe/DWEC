let informacion = "https://api.raulserranoweb.es/rest.php"
let imagenes = "https://api.raulserranoweb.es/imagenes_art/"
let pagina = document.getElementById("salida")
let tipo = document.getElementById("tipo")

function cargar(categoria){
    let url = informacion

    if(categoria && categoria !== "Todas"){
        url += `?cat=${categoria}`
    }

    fetch(url)
    .then(respuesta => respuesta.json())
        .then(datos => {console.log(datos)

            pagina.innerHTML = ""
        
        for(let i = 0; i < datos.length; i++){
            let seccion = document.createElement("div")
            let imagen = imagenes + datos[i].cod

            seccion.className = "seccion"

            seccion.innerHTML = `<img src="${imagen}" <br> <hr>
            <strong>Nombre:</strong> ${datos[i].nom} <br>
            <strong>Descripcion:</strong> ${datos[i].des} <br>
            <strong>Categoria:</strong> ${datos[i].cat}`

            pagina.appendChild(seccion)
        }
    })
    .catch(error => console.error("Error cargando datos:", error));
}

cargar()

tipo.addEventListener("change", function(){
    cargar(this.value)
})

