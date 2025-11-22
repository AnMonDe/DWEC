//1. Modifica el contenido del título, poniéndole tu nombre.
let titulo = document.getElementById("titulo")
let nombre = "Andrés Monje Delgado";
titulo.innerText=nombre;

//2. Modifica la imagen que muestra el segundo artículo artículo
let imagen = document.querySelector(`img[src="noticia2.jpg"]`);
let nuevaImagen = "carlos.jpg";
imagen.src = nuevaImagen;

//3. Oculta el último articulo.
let articulos = document.querySelectorAll("article");
let ultimoArticulo = articulos[articulos.length -1];
ultimoArticulo.style.display = "none";

//4. Recorre los artículos y añade al inicio de la cabecera el número de noticia (1- Hospitalizado...)
articulos.forEach((articulo, index) => {
    let primerDiv = articulo.querySelector("div");
    if(primerDiv){
        primerDiv.prepend((index + 1) + "- ")
    }
});

//5. Añade la clase cabecera (ya esta declarada en los estilos), al primer div de cada artículo.
articulos.forEach(articulo =>{
    let primerDiv = articulo.querySelector("div");
    primerDiv.classList.add("cabecera");
})

//6. Busca en todos los artículos donde aparece la cadena "Servicio Murciano de Salud", y sustitúyela por "S.M.S" (¿método replace de cadenas?).
articulos.forEach(articulo =>{
    let contenido = articulo.innerHTML;
    let contenidoNuevo = contenido.replaceAll("Servicio Murciano de Salud","S.M.S");
    articulo.innerHTML = contenidoNuevo;
})