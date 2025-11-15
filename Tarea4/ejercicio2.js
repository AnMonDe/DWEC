class banco{
    nombre;
  
    cuentas = {};

    constructor(nombre){
        this.nombre = nombre;

        console.log(`Banco${this.nombre}`);
        
    }

    crearCuenta(codigo, saldo=0){
        if(codigo<1||codigo>599999){
            console.error("Codigo fuera de rango");
            return;
        }

        let cadena = codigo.toString().padStart(6,"0");

        this.cuentas[cadena] = saldo;
        console.log(`${codigo} - ${saldo}€`);
        
    }

    actualizarCuenta(){
        
    }

    eliminarCuenta(){

    }

    listarCuenta(){
        let titulo = document.getElementById("nombre");
        titulo.innerHTML = `Banco${this.nombre}`;

        let ul = document.getElementById("cuenta");
        ul.innerHTML = '';

        for (let codigo in this.cuentas) {
            let li = document.createElement("li");
            li.textContent = `${codigo} - ${this.cuentas[codigo]}€`;
            ul.appendChild(li);
        }
    }
}

let miBanco = new banco("Andy");
miBanco.crearCuenta(11111,55);
miBanco.crearCuenta(22222);
miBanco.crearCuenta(33333,66);
miBanco.listarCuenta();