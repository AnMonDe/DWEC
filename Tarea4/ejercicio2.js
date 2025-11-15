class banco{
    nombre;
  
    cuentas = {};

    constructor(nombre){
        this.nombre = nombre;

        console.log(`Banco${this.nombre}`);
        let titulo = document.getElementById("nombre");
        titulo.innerHTML = `Banco${this.nombre}`;
    }

    crearCuenta(codigo, saldo=0){
        if(codigo<1||codigo>599999){
            console.error("Codigo fuera de rango");
            return;
        }

        let cadena = codigo.toString().padStart(6,"0");

        this.cuentas[cadena] = saldo;
        console.log(`${codigo} - ${saldo}€`);
        let cuenta = document.getElementById("cuenta");
        cuenta.innerHTML = `${codigo} - ${saldo}€`;
    }

    actualizarCuenta(){
        
    }

    eliminarCuenta(){

    }

    listarCuenta(){

    }
}

let miBanco = new banco("Andy");
miBanco.crearCuenta(11111,55);
miBanco.crearCuenta(22222,33);
miBanco.crearCuenta(33333);