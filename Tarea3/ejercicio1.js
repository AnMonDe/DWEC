let fecha = new Date();
let fin_ano = new Date(2026,0,1);
let boton = document.getElementById('boton');
let dia = fecha.getDate();
let mes = fecha.getMonth()+1;
let ano = fecha.getFullYear();
let faltan = fin_ano.getTime()-fecha.getTime();
let dias_faltan = Math.round(faltan/(1000*60*60*24));

boton.addEventListener('click',()=>{
    let ventana = window.open("fecha","ventana","width=600 height=400");
    ventana.document.writeln("Hoy es "+dia+"/"+mes+"/"+ano+" y faltan "+dias_faltan+" días para fin de año");
})