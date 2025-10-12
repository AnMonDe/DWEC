let array = new Array(); //Variable que inicia un array

const mostrarSuma = () =>{ //Nombre de la funcion
    this.event.preventDefault(); //Evita que el navegador se actualice al enviar el formulario
    const resultado = document.getElementById('resultado'); //Constante que almacena el elemento en el que se mostrara en pantalla
    const valor = document.getElementById('numero'); //Constante que obtiene el valor del elemento con id numero
    const nuevo = Number(valor.value); //Constante que almacena el valor
    array.push(nuevo); //Almacena el valor de la variable en el array
    const total = array.reduce((acumulador, valorActual) => acumulador + valorActual, 0); //Constante que almacena la suma de del array
    const cantidad = array.length; //Constante que almacena la longitud del array

    if (total > 100){ //Inicio del condicional si es mayor a 100
        resultado.innerHTML = `<h2>¡Suma total superada! <br>
        Total acumulado: ${total}. Números introducidos: ${cantidad}</h2>` //Muestra en pantalla el resultado
    } else { //Inicio si el condicional no se cumple
        resultado.innerHTML = `<h2>Suma actual: ${total}.</h2>` //Muestra en pantalla el resultado
    }
    valor.value = ''; //Borra el campo del formulario
}