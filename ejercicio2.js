const mostrarMenor = () => { //Nombre de la funcion 
    this.event.preventDefault(); //Evita que el navegador se actualice al enviar el formulario
    const numero1 = Number(document.getElementById('numero1').value); //Constante que obtiene el valor del elemento con id numero1
    const numero2 = Number(document.getElementById('numero2').value); //Constante que obtiene el valor del elemento con id numero2
    const numero3 = Number(document.getElementById('numero3').value); //Constante que obtiene el valor del elemento con id numero3
    let menor; //Inicio variable que almacenara el numero menor
    if (numero1 <= numero2 && numero1 <= numero3) { //Inicio del condicional si el primer numero es el menor
        menor = numero1; //Almacena en la variable el numero 
    } else if (numero2 <= numero1 && numero2 <= numero3) { //Inicio del condicional si el segundo numero es el menor
        menor = numero2; //Almacena en la variable el numero
    } else {  //Inicio si ninguna parte del condicional se cumple
        menor = numero3; //Almacena en la variable el numero
    }  
    let salida = document.getElementById('resultado'); //Variable que almacena el elemento en el que se mostrara en pantalla
    let resultado = `<h2>De los numeros: ${numero1}, ${numero2} y ${numero3}. <br> 
    El ${menor} es el menor.</h2>`; //Variable que almacena el codigo que se mostrara en pantalla
    salida.innerHTML = resultado; //Muestra en pantalla el resultado
    document.getElementById('numero1').value = ''; //Borra el campo del formulario
    document.getElementById('numero2').value = ''; //Borra el campo del formulario
    document.getElementById('numero3').value = ''; //Borra el campo del formulario
}