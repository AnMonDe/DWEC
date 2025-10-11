const mostrarTablas = () =>{
    this.event.preventDefault();
    const numero = Number(document.getElementById('numero').value);
    let resultado = document.getElementById('resultado');
    let tablaBase = `<h2>Tablas de multiplicar hasta el ${numero}.</h2>`;
    tablaBase += '<ul>'
    for (i = 0; i<=numero;i++){
        for (j = 0; j<=numero;j++){
            tablaBase += `<li><h2>${i} * ${j} = ${i*j}</h2></li>`;
        }
    }
    resultado.innerHTML = tablaBase
    tablaBase += '</ul>'
}