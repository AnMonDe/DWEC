let array = new Array();

const mostrarSuma = () =>{
    this.event.preventDefault();
    const resultado = document.getElementById('resultado');
    const valorImput = document.getElementById('numero');
    const nuevoNumero = Number(valorImput.value);
    array.push(nuevoNumero);
    const totalAcumulado = array.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    const cantidad = array.length;

    if (totalAcumulado > 100){
        resultado.innerHTML = `<h2>¡Suma total superada! <br>
        Total acumulado: ${totalAcumulado}. Números introducidos: ${cantidad}</h2>`
    } else {
        resultado.innerHTML = `<h2>Suma actual: ${totalAcumulado}.</h2>`
    }
    valorImput.value = '';
}