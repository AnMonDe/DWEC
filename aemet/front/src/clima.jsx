import Iconos from './iconos'

function Clima({datos}){
    if(!datos || datos.length === 0) return null

    const prediccionHoy = datos[0]?.prediccion?.dia[0]
    const municipioNombre = datos[0]?.nombre
    const provinciaNombre = datos[0]?.provincia

    if(!prediccionHoy) return null
    
    const vientoActual = prediccionHoy.viento.find(v => v.direccion && v.velocidad) || prediccionHoy.viento[0]
    const lluvia = Math.max(...prediccionHoy.probPrecipitacion.map(p => p.value || 0));
    const estadoCieloActual = prediccionHoy.estadoCielo.find(e => e.descripcion)
    const descripcionCielo = estadoCieloActual?.descripcion

    return(
        <div className = "tiempo">
            <h2>{municipioNombre} ({provinciaNombre})</h2>
            {}
            <p>Fecha: {new Date(prediccionHoy.fecha).toLocaleDateString()}</p>
            <div className="resumen-clima">
                {}
                {}
                <Iconos descripcion={descripcionCielo} />
                
                <p className='descripcion'>
                    {descripcionCielo}
                </p>
            </div>
            <div className = "detalles-tiempo">
                <div className = "detalle-tiempo">
                    <h3>Temperatura</h3>
                    <p>Mínima: {prediccionHoy.temperatura.minima}ºC</p>
                    <p>Máxima: {prediccionHoy.temperatura.maxima}ºC</p>
                </div>
                <div className = "detalle-tiempo">
                    <h3>Lluvia</h3>
                    {}
                    <p>Probabilidad: {lluvia}%</p>
                </div>
                <div className = "detalle-tiempo">
                    <h3>Viento</h3>
                    {}
                    <p>{vientoActual?.velocidad} km/h</p>
                </div>
                <div className = "detalle-tiempo">
                    <h3>Direccion</h3>
                    {}
                    <p>{vientoActual?.direccion}</p>
                </div>
            </div>
        </div>
    )
}
export default Clima