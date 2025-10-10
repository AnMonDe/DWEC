const mostrarSuma = () => {
    this.event.preventDefault();
    const numero = Number(document.getElementById('numero').value);
    let suma = 0;
    if (isNaN(numero)){
        alert("Por favor, introduce un número válido.");
        return;
    } else {for (let i = 1; i <= numero; i++) {
        suma += i;
    }
}
    let resultado = document.getElementById("resultado")
    resultado.innerHTML=`La suma de los números del 1 al ${numero} es ${suma}`;
}