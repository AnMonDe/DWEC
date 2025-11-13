let articulos = [
    { "codigo": 1, "descripcion": "mouse Inalámbrico", "precio": 25.99, "tipo": "Periféricos" },
    { "codigo": 2, "descripcion": "teclado Mecánico", "precio": 49.99, "tipo": "Periféricos" },
    { "codigo": 3, "descripcion": "Monitor 24 pulgadas", "precio": 179.99, "tipo": "Electrónica" },
    { "codigo": 4, "descripcion": "Disco duro externo 1TB", "precio": 89.99, "tipo": "Electrónica" },
    { "codigo": 5, "descripcion": "Auriculares con micrófono", "precio": 34.99, "tipo": "Periféricos" },
    { "codigo": 6, "descripcion": "Cable HDMI 2m", "precio": 12.99, "tipo": "Accesorios" },
    { "codigo": 7, "descripcion": "Cargador USB-C", "precio": 19.99, "tipo": "Accesorios" },
    { "codigo": 8, "descripcion": "lámpara LED de escritorio", "precio": 29.99, "tipo": "Mobiliario" },
    { "codigo": 9, "descripcion": "Silla ergonómica", "precio": 199.99, "tipo": "Mobiliario" },
    { "codigo": 10, "descripcion": "webcam Full HD", "precio": 69.99, "tipo": "Electrónica" },
    { "codigo": 11, "descripcion": "Tarjeta de memoria 128GB", "precio": 24.99, "tipo": "Accesorios" },
    { "codigo": 12, "descripcion": "Base para laptop ajustable", "precio": 39.99, "tipo": "Mobiliario" },
    { "codigo": 13, "descripcion": "Router WiFi 6", "precio": 129.99, "tipo": "Electrónica" },
    { "codigo": 14, "descripcion": "Impresora multifuncional", "precio": 249.99, "tipo": "Electrónica" },
    { "codigo": 15, "descripcion": "smartwatch deportivo", "precio": 59.99, "tipo": "Electrónica" },
    { "codigo": 16, "descripcion": "Cámara de seguridad inalámbrica", "precio": 99.99, "tipo": "Electrónica" },
    { "codigo": 17, "descripcion": "Micrófono de condensador", "precio": 74.99, "tipo": "Periféricos" },
    { "codigo": 18, "descripcion": "Controlador MIDI", "precio": 119.99, "tipo": "Periféricos" },
    { "codigo": 19, "descripcion": "altavoz Bluetooth Portátil", "precio": 45.99, "tipo": "Electrónica" },
    { "codigo": 20, "descripcion": "Kit de herramientas para PC", "precio": 18.99, "tipo": "Accesorios" }
]

// Ejercicio 1
let boton = document.getElementById("boton");

boton.addEventListener("click",()=>{
    let tipo = document.getElementById("tipo").value;
    let precio = document.getElementById("precio").value;

    let resultado = buscarParametro(articulos, tipo, precio)
    console.log(resultado);

    document.getElementById("tipo").value = "";
    document.getElementById("precio").value = "";
})

function buscarParametro(articulos, tipo, precio){
    return articulos.filter(articulo => 
        articulo.tipo===tipo && articulo.precio <= precio);
}

// Ejercicio 2
let boton_formato = document.getElementById("boton_formato");

boton_formato.addEventListener("click",()=>{
    let descripcion = formato(articulos);

    console.log(descripcion);
})

function formato(articulos){
    return articulos.map(articulo =>{
        const descripcion = articulo.descripcion;
        const formato = descripcion.charAt(0).toUpperCase() + descripcion.slice(1).toLowerCase();
        return {...articulo, descripcion: formato};
    })
}

// Ejercicio 3
let boton_buscar = document.getElementById("boton_buscar");

boton_buscar.addEventListener("click",()=>{
    let palabra = document.getElementById("buscar").value;

    let encontrado = buscarArticulo(articulos, palabra)

    console.log(encontrado);
    document.getElementById("buscar").value = "";
})

function buscarArticulo(articulos, cadena){
    return articulos.filter((elemento)=>
        elemento.descripcion.toLowerCase().includes(cadena));
}