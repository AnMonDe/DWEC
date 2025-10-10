const mostrarSuma = () => {
    let numero = document.getElementById("numero").value;
    let suma = 0;
    for (let i = 1; i <= numero; i++) {
        suma += i;
    }
    alert(`La suma de los números desde 1 hasta ${numero} es: ${suma}`);
}