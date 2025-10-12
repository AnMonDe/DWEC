const mostrarTablas = () =>{ //Nombre de la funcion 
    this.event.preventDefault(); //Evita que el navegador se actualice al enviar el formulario
    const numero = Number(document.getElementById('numero').value); //Constante que obtiene el valor del elemento con id numero
    let resultado = document.getElementById('resultado'); //Variable que almacena el elemento en el que se mostrara en pantalla
    let tablaBase = `<h2>Tablas de multiplicar hasta el ${numero}.</h2>`; //Variable que almacena el codigo que se mostrara en pantalla
    tablaBase += '<ul>' //Concatena la etiqueta de apertura de una lista 
    for (i = 0; i<=numero;i++){ //Inicio de un bucle for
        tablaBase += `<li><h2>Tabla del ${i}.</h2></li>` //Añade un codigo de lista al comienzo de cada tabla
        for (j = 0; j<=10;j++){ //Inicio de un bucle anidado for
            tablaBase += `<li><h3>${i} * ${j} = ${i*j}</h3></li>`; //Añade un codigo de lista de cada elemento de la tabla
        }
    }
    resultado.innerHTML = tablaBase; //Muestra en pantalla los resultados de los bucles
    tablaBase += '</ul>'; //Concatena la etiqueta de cierre de lista
    document.getElementById('numero').value = ''; //Borra el campo del formulario
}