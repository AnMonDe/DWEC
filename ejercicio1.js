const mostrarDatos = () => { //Nombre de la funcion 
this.event.preventDefault(); //Evita que el navegador se actualice al enviar el formulario
const nombre = String(document.getElementById('nombre').value); //Constante que obtiene el valor del elemento con id nombre
const edad = Number(document.getElementById('edad').value); //Constante que obtiene el valor del elemento con id edad

if (edad >=0 && edad <18){ //Inicio condicional si es menor de edad
    let salida = document.getElementById('resultado'); //Variable que almacena el elemento en el que se mostrara en pantalla
    let resultado = `<h2>Hola ${nombre}, tienes ${edad} años, eres menor de edad.</h2>`; //Variable que almacena el codigo que se mostrar en pantalla
    salida.innerHTML = resultado; //Muestra en pantalla el resultado del condicional si se cumple
    document.getElementById('nombre').value = ''; //Borra el campo del formulario
    document.getElementById('edad').value = ''; //Borra el campo del formulario
} else { //Inicio si el condicional no se cumple
    let salida = document.getElementById('resultado'); //Variable que almacena el elemento en el que se mostrara en pantalla
    let resultado = `<h2>Hola ${nombre}, tienes ${edad} años, eres mayor de edad.</h2>`; //Variable que almacena el codigo que se mostrar en pantalla
    salida.innerHTML = resultado; //Muestra en pantalla el resultado del condicional si se cumple
    document.getElementById('nombre').value = ''; //Borra el campo del formulario
    document.getElementById('edad').value = ''; //Borra el campo del formulario
}
}
