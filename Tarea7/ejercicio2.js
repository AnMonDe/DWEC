let url = "http://api.raulserranoweb.es/rest.php"
let pagina = document.getElementById("salida")

fetch(url)
    .then(respuesta => respuesta.json())
    .then(datos => {console.log(datos)
    
    for(let i = 0; i < datos.length; i++){
        let seccion = document.createElement("div")
        seccion.className = "seccion"
        seccion.innerHTML = `Nombre: ${datos[i].nom} <br>
        Descripcion: ${datos[i].des} <br>
        Categoria: ${datos[i].cat}`
        pagina.appendChild(seccion)}
    })



