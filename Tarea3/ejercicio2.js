let boton_cod = document.getElementById('boton_cod');
let boton_desc = document.getElementById('boton_desc');

boton_cod.addEventListener('click',()=>{
    let entrada_codificar = document.getElementById('codificar').value;
    let salida_cod = document.getElementById('salida_cod');
    if (entrada_codificar.match(/\d/)){
        window.alert("Error, la cadena tiene numeros.")
        return;
    }
    let espacios = entrada_codificar.toLowerCase().replaceAll(" ","?");
    let codificado = codificarCadena(espacios);
    salida_cod.innerHTML = codificado;
})

boton_desc.addEventListener('click',()=>{
    let entrada_descodificar = document.getElementById('descodificar').value;
    let salida_desc = document.getElementById('salida_desc');
    let espacios = entrada_descodificar.toLowerCase().replaceAll("?"," ");
    let descodificado = descodificarCadena(espacios);
    salida_desc.innerHTML = descodificado;
})

function codificarCadena(str){
    const secuencias = str.match(/(.)\1*/g)||[];
    const comprimido = secuencias.map(seq=>{
        if(seq.length>1){
            return seq.length+seq[0];
        } else {
            return seq[0];
        }
    });
    return comprimido.join('');
}

function descodificarCadena(str){
    const regex = /(\d+)(.)|(\D)/g;
    return str.replace(regex,(match, count, char, singleChar)=>{
        if (count){
            return char.repeat(parseInt(count));
        } else{
            return singleChar;
        }
    });
}
