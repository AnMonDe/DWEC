const mostrarSuma = () => {
    this.event.preventDefault();
    const numero = Number(document.getElementById('numero').value);
    let suma = 0;
    for (let i = 1; i <= numero; i++) {
        suma += i;
    }
    let resultado = document.getElementById("resultado")
    resultado.innerHTML=`La suma de los números desde 1 hasta ${numero} es: ${suma}`;
}