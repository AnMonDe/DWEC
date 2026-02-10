const { useState } = require("react");

function Buscador(onBuscar){
    const [codigo, setCodigo] = useState('')

    const handleSUBMIT = (e) => {
        e.preventDefault()
        if(!codigo.trim()) return
        onBuscar(codigo)
    }

    return (
        <div className = "search-box">
            <form onsSubmit = {handleSubmit}>
                <input type = "text" placeholder = "Introduce el código postal." 
                value = {codigo} onChange = {(e) => setCodigo(e.target.value)}/>
                <button type = "submit">Buscar</button>
            </form>
        </div>
    )
}

export default Buscador