//1. Un título con tu nombre.
let nombre = "Andrés Monje Delgado";
let titulo = document.createElement("h1");
titulo.innerText = nombre;
document.body.appendChild(titulo);

//2. Un elemento contenedor, que contendrá los artículos de la tienda.
let contenedor = document.createElement("div");
contenedor.className = "contenedor";
document.body.appendChild(contenedor);

//3. Cada artículo contiene un nombre, una descripción, un precio y una imagen. Estos datos los leemos 
//del array datos, que tenemos disponible en el archivo datos.js y ya se encuentra cargado en la web.
for(let i=0;i<datos.length;i++){
    let contenedorInterno = document.createElement("div");
    contenedorInterno.className = "articulo";
    contenedorInterno.innerHTML = `<h3>${datos[i].nombre}</h3>
    <p>${datos[i].descripcion}</p>
    <p>${datos[i].precio}</p><img src="${datos[i].imagen}">`;
    contenedor.appendChild(contenedorInterno);
}

//4. Añade las clases necesarias a los elementos y completa el archivo estilos.css para conseguir 
// un aspecto similar al del enunciado.
