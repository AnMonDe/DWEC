const mostrarDatos = () => {
this.event.preventDefault();
const nombre = String(document.getElementById('nombre').value);
const edad = Number(document.getElementById('edad').value);

if (edad >=0 && edad <18){
    let salida = document.getElementById('resultado');
    let resultado = `<h2>Hola ${nombre}, tienes ${edad} años, eres menor de edad.</h2>`;
    salida.innerHTML = resultado;
} else {
    let salida = document.getElementById('resultado');
    let resultado = `<h2>Hola ${nombre}, tienes ${edad} años, eres mayor de edad.</h2>`;
    salida.innerHTML = resultado;
}
}
