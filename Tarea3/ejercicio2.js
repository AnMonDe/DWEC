let boton_cod = document.getElementById('boton_cod');
let boton_desc = document.getElementById('boton_desc');

boton_cod.addEventListener('click',()=>{
    let entrada_codificar = document.getElementById('codificar').value;
    let salida_cod = document.getElementById('salida_cod');
    
    salida_cod.innerHTML = entrada_codificar;
})

boton_desc.addEventListener('click',()=>{
    let entrada_descodificar = document.getElementById('descodificar').value;
    let salida_desc = document.getElementById('salida_desc');

    salida_desc.innerHTML = entrada_descodificar;
})
