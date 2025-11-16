class Banco{
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

        let clave = codigo.toString().padStart(6,"0");

        this.cuentas[clave] = saldo;
        console.log(`${clave} - ${saldo}€`);
        
    }

    actualizarCuenta(codigo, ingreso){

        let clave = codigo.toString().padStart(6, "0");

        if(!this.cuentas.hasOwnProperty(clave)){
            console.error("La cuenta no existe")
            return;
        }

        this.cuentas[clave] += ingreso;
        console.log(`Cuenta ${clave} actualizada. Saldo ${this.cuentas[clave]}`);
        
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

let miBanco = new Banco("Andy");
miBanco.crearCuenta(111111,55);
miBanco.crearCuenta(222222);
miBanco.crearCuenta(333333,66);
miBanco.actualizarCuenta(111111,22);
miBanco.listarCuenta();