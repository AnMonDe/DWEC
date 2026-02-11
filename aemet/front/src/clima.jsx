function Clima({datos}){
    const prediccionHoy = datos[0]?.prediccion?.dia[0]
    const municipioNombre = datos[0]?.nombre
    const provinciaNombre = datos[0]?.provincia

    if(!prediccionHoy) return null

    return(
        <div className = "tiempo">
            <h2>{municipioNombre} ({provinciaNombre})</h2>
            <p>Fecha: {prediccionHoy.fecha}</p>

            <div className = "detalles-tiempo">
                <div className = "detalle-tiempo">
                    <h3>Estado del Cielo</h3>
                    <p>{prediccionHoy.estadoCielo[0]?.descipcion}</p>
                </div>
                <div className = "detalle-tiempo">
                    <h3>Temperatura</h3>
                    <p>Mínima: {prediccionHoy.temperatura.min}ºC</p>
                    <p>Máxima: {prediccionHoy.temperatura.max}ªC</p>
                </div>
                <div className = "detalle-tiempo">
                    <h3>Viento</h3>
                    <p>{prediccionHoy.viento[0]?.velocidad}km/h</p>
                </div>
                <div className = "detalle-tiempo">
                    <h3>Lluvia</h3>
                    <p>Probabilidad: {prediccionHoy.probPrecipitacion[0]?.value}%</p>
                </div>
            </div>
        </div>
    )
}

export default Clima