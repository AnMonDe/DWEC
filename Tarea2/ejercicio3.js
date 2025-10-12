const mostrarSuma = () => { //Nombre de la funcion
    this.event.preventDefault(); //Evita que el navegador se actualice al enviar el formulario
    const numero = Number(document.getElementById('numero').value); //Constante que obtiene el valor del elemento con id numero
    let suma = 0; //Inicio variable 
    if (isNaN(numero)){ //Inicio del condicional si no es un numero
        alert("Por favor, introduce un número."); //Muestra una alerta en el navegador
        return; //Vuelve a comprobar el condicional
    } else { //Inicio si el condicional no se cumple
        for (let i = 1; i <= numero; i++) { //Inicio del bucle for
        suma += i; //Variable que almacena la suma
    }
    }
    let resultado = document.getElementById("resultado"); //Variable que almacena el elemento en el que se mostrara en pantalla
    resultado.innerHTML=`<h2>La suma de los números del 1 al ${numero} es ${suma}</h2>`; //Muestra en pantalla el resultado
    document.getElementById('numero').value = ''; //Borra el campo del formulario
}