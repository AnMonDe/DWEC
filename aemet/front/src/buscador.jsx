import { useState } from "react"

function Buscador({onBuscar}){
    const [codigo, setCodigo] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!codigo.trim()) return
        onBuscar(codigo)
    }

    return (
        <div className = "buscar">
            <form onSubmit = {handleSubmit}>
                <input type = "text" placeholder = "Introduce el código del Municipio." 
                value = {codigo} onChange = {(e) => setCodigo(e.target.value)}/>
                <button type = "submit">Buscar</button>
            </form>
        </div>
    )
}

export default Buscador