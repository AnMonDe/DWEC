window.onload = function(){
    let contenedor = document.createElement("div");
    contenedor.id = "contenedor";
    let boton_inicio = document.querySelector("form");
    document.body.insertBefore(contenedor,boton_inicio);

    let nombre = document.createElement("input");
    nombre.id = "entrada_nombre";
    nombre.placeholder = "Nombre";
    contenedor.appendChild(nombre);

    let apellido = document.createElement("input");
    apellido.id = "entrada_apellido";
    apellido.placeholder = "Apellido";
    contenedor.appendChild(apellido);

    let boton_add = document.createElement("button");
    boton_add.id = "boton_add";
    boton_add.textContent = "Añadir";
    contenedor.appendChild(boton_add);

    let boton_del = document.createElement("button");
    boton_del.id = "boton_del";
    boton_del.textContent = "Eliminar";
    contenedor.appendChild(boton_del);

// 1. Se escribe un mensaje de error la página (no un alert), 
// si pulsan añadir y eliminar y no se han rellenado ambos campos.
    let error = document.createElement("p");
    error.id = "error";
    document.body.insertBefore(error,boton_inicio);

    boton_add.onclick = function(){
        if(nombre.value===""||apellido.value===""){
            error.textContent = "Error. Para Añadir introduce tu Nombre y Apellido";
        } else{
            error.textContent = "";
        }
    }

    boton_del.onclick = function (){
        if(nombre.value===""||apellido.value===""){
            error.textContent = "Error. Para Eliminar introduce tu Nombre y Apellido"
        } else{
            error.textContent = "";
        }
    }
}


