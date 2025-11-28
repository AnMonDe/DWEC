window.onload = function(){
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

}