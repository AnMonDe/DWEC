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

    //1.Se escribe un mensaje de error la página (no un alert), 
    // si pulsan añadir y eliminar y no se han rellenado ambos campos.

    //2.Si pulsan añadir se crea una nueva línea en el listado en forma de tabla.

    //3.Si pulsan añadir y la persona ya está en la tabla, escribimos un mensaje de error en la página.

    //4.Si pulsan eliminar, eliminamos la persona de la tabla, o avisamos en caso de que no exista.

    //5.Si pulsan eliminar y la persona no existe en la tabla, escribimos un mensaje de error.
    let error = document.createElement("p");
    error.id = "error";
    document.body.insertBefore(error,boton_inicio);

    let tabla = document.createElement("table");
    tabla.id = "tabla";
    document.body.insertBefore(tabla,boton_inicio);

    let cabecera1 = document.createElement("th");
    let cabecera2 = document.createElement("th");
    cabecera1.textContent = "Nombre";
    cabecera2.textContent = "Apellidos";
    tabla.appendChild(cabecera1);
    tabla.appendChild(cabecera2);

    boton_add.onclick = function(){
        if(nombre.value===""||apellido.value===""){
            error.textContent = "Error. Para Añadir introduce tu Nombre y Apellido";
            return;
        } else{
            error.textContent = "";
        }

        let filas = tabla.getElementsByTagName("tr");
        for(let i = 0; i < filas.length; i++){
            let celdas = filas[i].getElementsByTagName("td");
            if(celdas.length > 0){
                if(celdas[0].textContent === apellido.value){
                    error.textContent = "Error. Ya existe esta persona";
                    nombre.value = "";
                    apellido.value = "";
                    return;
                }
            }
        }

        let fila = tabla.insertRow();
        let columna1 = fila.insertCell(0);
        let columna2 = fila.insertCell(1);
        columna1.textContent = nombre.value;
        columna2.textContent = apellido.value;
        nombre.value = "";
        apellido.value = "";
    }

    boton_del.onclick = function (){
        if(nombre.value===""||apellido.value===""){
            error.textContent = "Error. Para Eliminar introduce tu Nombre y Apellido"
            return;
        } else{
            error.textContent = "";
        }

        let filas = tabla.getElementsByTagName("tr");
        let encontrado = false;
        for(let i = 0; i < filas.length; i++){
            let celdas = filas[i].getElementsByTagName("td");
            if(celdas.length > 0){
                if(celdas[0].textContent === nombre.value && celdas[1].textContent === apellido.value){
                    tabla.deleteRow(i);
                    encontrado = true;
                    nombre.value = "";
                    apellido.value = "";
                    error.textContent = "";
                    return;
                }
            }
        }

        if(encontrado === false){
            error.textContent = "Eror. No existe esta persona";
            nombre.value = "";
            apellido.value = "";
        }
    }
}


