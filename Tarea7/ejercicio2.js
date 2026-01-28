let informacion = "http://api.raulserranoweb.es/rest.php"
let imagenes = "http://api.raulserranoweb.es/imagenes_art/"
let pagina = document.getElementById("salida")
let tipo = document.getElementById("tipo")

fetch(informacion)
    .then(respuesta => respuesta.json())
    .then(datos => {console.log(datos)
    
    for(let i = 0; i < datos.length; i++){
        let seccion = document.createElement("div")
        let imagen = imagenes + datos[i].cod
        seccion.className = "seccion"
        seccion.innerHTML = `<img src="${imagen}" <br>
        Nombre: ${datos[i].nom} <br>
        Descripcion: ${datos[i].des} <br>
        Categoria: ${datos[i].cat}`
        pagina.appendChild(seccion)}
    })



