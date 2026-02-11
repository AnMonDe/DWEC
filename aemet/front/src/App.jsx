import { useState } from 'react'
import Buscador from './buscador'
import Clima from './clima'

function App(){
  const [wheatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const buscarClima = async (codigo) => {
    setLoading(true)
    setError(null)
    setWeatherData(null)

    try {
      const respuesta = await fetch(`http://localhost:3000/api/prediccion/${codigo}`)

      if(!respuesta.ok) {
        if(respuesta.status === 404)
          throw new Error("Municipio no encontrado.")
      }

      const resultado = await respuesta.json()

      if(resultado.success && resultado.data) {
        setWeatherData(resultado.data)
      } else {
        throw new Error("Formato de datos incorrecto")
      }

    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
  <div className = "contenedor">
    <header>
      <h1>Meteorología</h1>
    </header>
    <main>
      <Buscador onBuscar = {buscarClima}/>
      {}
      {loading && <div className = "cargando">Cargando datos ...</div>}
      {error && <div className = "error">{error}</div>}
      <Clima datos = {wheatherData}/>
      {!wheatherData && !loading && <p className = "posicion">Introduce un código de municipio</p>}
    </main>
  </div>
  )
}

export default App