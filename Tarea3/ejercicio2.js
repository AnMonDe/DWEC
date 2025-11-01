let boton_cod = document.getElementById('boton_cod'); //Variable que almacena el boton
let boton_desc = document.getElementById('boton_desc'); //Variable que almacena el boton

boton_cod.addEventListener('click',()=>{ //Evento que se ejecuta cuando se hace click en el boton
    let entrada_codificar = document.getElementById('codificar').value; //Almacena el valor del formulario
    let salida_cod = document.getElementById('salida_cod'); //Almacena la salida
    if (entrada_codificar.match(/\d/)){ //Inicio condicional si hay numeros
        window.alert("Error, la cadena tiene numeros.") //Alerta si hay numeros
        return; //Cierre del evento
    }
    let espacios = entrada_codificar.toLowerCase().replaceAll(" ","?"); //Variable que almacena la sustitucion de espacios
    let codificado = codificarCadena(espacios); //Variable que almacena el valor de llamar a la funcion
    salida_cod.innerHTML = codificado; //Muestra en pantalla el resultado
})

boton_desc.addEventListener('click',()=>{ //Evento que se ejecuta cuando se hace click en el boton
    let entrada_descodificar = document.getElementById('descodificar').value; // Variable que almacena el valor del formulario
    let salida_desc = document.getElementById('salida_desc'); //Variable que almacena la salida
    let espacios = entrada_descodificar.toLowerCase().replaceAll("?"," "); //Variable que almacena la sustitucion de ?
    let descodificado = descodificarCadena(espacios); //Variable que alamacena el valor de llamar a la funcion
    salida_desc.innerHTML = descodificado; //Muestra en pantalla el resultado
})

function codificarCadena(str){ //Funcion de codificacion
    const secuencias = str.match(/(.)\1*/g)||[]; //Constante que almacena un array de letras que se repiten
    const comprimido = secuencias.map(seq=>{ //Constante que almacena secuencias
        if(seq.length>1){ //Condicional si se repite mas de una vez
            return seq.length+seq[0]; //Devuelve el numero de veces repetido y la letra
        } else { //No se cumple el condicional
            return seq[0]; //Devuelve la letra
        }
    });
    return comprimido.join(''); //Devuelve la cadena juntando el array
}

function descodificarCadena(str){ //Funcion de descodificacion
    const regex = /(\d+)(.)|(\D)/g; //Constante que alamcena los numeros y las letras
    return str.replace(regex,(match, count, char, singleChar)=>{ //Devuelve el remplazo del patron
        if (count){ //Condicional si tiene un numero
            return char.repeat(parseInt(count)); //Devuelve la cantidad de letras que se repiten
        } else{ //No se cumple condicional
            return singleChar; //Devuelve la letra
        }
    });
}
