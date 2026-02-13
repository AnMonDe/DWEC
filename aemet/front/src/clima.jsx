import Iconos from './iconos'

function Clima({datos}){
    if(!datos || datos.length === 0) return null

    const prediccionHoy = datos[0]?.prediccion?.dia[0]
    const prediccionMañana = datos[0]?.prediccion?.dia[1]

    const municipioNombre = datos[0]?.nombre
    const provinciaNombre = datos[0]?.provincia

    if(!prediccionHoy) return null
    
    const vientoHoy = prediccionHoy.viento.find(v => v.direccion && v.velocidad) || prediccionHoy.viento[0]
    const vientoMañana = prediccionMañana.viento.find(v => v.direccion && v.velocidad) || prediccionMañana.viento[0]

    const lluviaHoy = Math.max(...prediccionHoy.probPrecipitacion.map(p => p.value || 0));
    const lluviaMañana = Math.max(...prediccionMañana.probPrecipitacion.map(p => p.value || 0));

    const estadoCieloHoy = prediccionHoy.estadoCielo.find(e => e.descripcion)
    const descripcionCieloHoy = estadoCieloHoy?.descripcion

    const estadoCieloMañana = prediccionMañana.estadoCielo.find(e => e.descripcion)
    const descripcionCieloMañana = estadoCieloMañana?.descripcion

    return(
        <div className = "lugar">
            <h2>{municipioNombre} ({provinciaNombre})</h2>
            <div className = "tarjetas">
                <div className="tiempo">

                    <p>Predicción para hoy, {new Date(prediccionHoy.fecha).toLocaleDateString()}</p>
                    <div className="resumen-clima">

                        <Iconos descripcion={descripcionCieloHoy}/>

                        <p className='descripcion'>
                            {descripcionCieloHoy}
                        </p>
                    </div>
                    <div className="detalles-tiempo">
                        <div className="detalle-tiempo">
                            <h3>Temperatura</h3>
                            <p>Mínima: {prediccionHoy.temperatura.minima}ºC</p>
                            <p>Máxima: {prediccionHoy.temperatura.maxima}ºC</p>
                        </div>
                        <div className="detalle-tiempo">
                            <h3>Lluvia</h3>
                            <p>Probabilidad: {lluviaHoy}%</p>
                        </div>
                        <div className="detalle-tiempo">
                            <h3>Viento</h3>
                            <p>{vientoHoy?.velocidad} km/h</p>
                        </div>
                        <div className="detalle-tiempo">
                            <h3>Direccion</h3>
                            <p>{vientoHoy?.direccion}</p>
                        </div>
                    </div>
                </div>
                <div className="tiempo">
                    <p>Predicción para mañana, {new Date(prediccionMañana.fecha).toLocaleDateString()}</p>
                    <div className="resumen-clima">
                        <Iconos descripcion={descripcionCieloMañana} />
                        <p className='descripcion'>
                            {descripcionCieloMañana}
                        </p>
                    </div>
                    <div className="detalles-tiempo">
                        <div className="detalle-tiempo">
                            <h3>Temperatura</h3>
                            <p>Mínima: {prediccionMañana.temperatura.minima}ºC</p>
                            <p>Máxima: {prediccionMañana.temperatura.maxima}ºC</p>
                        </div>
                        <div className="detalle-tiempo">
                            <h3>Lluvia</h3>
                            <p>Probabilidad: {lluviaMañana}%</p>
                        </div>
                        <div className="detalle-tiempo">
                            <h3>Viento</h3>
                            <p>{vientoMañana?.velocidad} km/h</p>
                        </div>
                        <div className="detalle-tiempo">
                            <h3>Direccion</h3>
                            <p>{vientoMañana?.direccion}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Clima