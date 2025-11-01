let fecha = new Date(); // Variable que almacena la hora y fecha actual
let fin_ano = new Date(2026,0,1); //Variable que almacena una hora y fecha concreta
let boton = document.getElementById('boton'); // Variable que almacena el id del boton
let dia = fecha.getDate(); //Variable que almacena el dia actual
let mes = fecha.getMonth()+1; //Variable que almacena el mes actual
let ano = fecha.getFullYear(); //Variable que almacena el año actual
let faltan = fin_ano.getTime()-fecha.getTime(); //Variable que almacena la diferencia hasta fin de año
let dias_faltan = Math.round(faltan/(1000*60*60*24)); //Variable que almacena los dias que faltan hasta fin de año

boton.addEventListener('click',()=>{ //Evento que se ejecuta cuando se hace click
    let ventana = window.open("fecha","ventana","width=600 height=400"); //Variable que almacena una nueva ventana con dimensiones espedificas
    ventana.document.writeln("Hoy es " + dia + "/" + mes + "/" + ano + " y faltan " + dias_faltan + " días para fin de año"); //Texto que se muestra en la nueva ventana
})