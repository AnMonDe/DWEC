const mostrarMenor = () => {
    this.event.preventDefault();
    const numero1 = Number(document.getElementById('numero1').value);
    const numero2 = Number(document.getElementById('numero2').value);
    const numero3 = Number(document.getElementById('numero3').value);
    let menor;
    if (numero1 <= numero2 && numero1 <= numero3) {
        menor = numero1;
    } else if (numero2 <= numero1 && numero2 <= numero3) {
        menor = numero2;
    } else {
        menor = numero3;
    }  
    let salida = document.getElementById('resultado');
    let resultado = `<h2>De los numeros: ${numero1}, ${numero2} y ${numero3}. <br>
    El ${menor} es el menor.</h2>`;
    salida.innerHTML = resultado;
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
    document.getElementById('numero3').value = '';
}