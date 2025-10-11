const mostrarTablas = () =>{
    this.event.preventDefault();
    const numero = Number(document.getElementById('numero').value);
    let resultado = document.getElementById('resultado');
    let tablaBase = `<h2>Tablas de multiplicar hasta el ${numero}.</h2>`;
    tablaBase += '<ul>'
    for (i = 0; i<=numero;i++){
        tablaBase += `<li><h2>Tabla del ${i}.</h2></li>`
        for (j = 0; j<=10;j++){
            tablaBase += `<li><h3>${i} * ${j} = ${i*j}</h3></li>`;
        }
    }
    resultado.innerHTML = tablaBase
    tablaBase += '</ul>'
    document.getElementById('numero').value = '';
}