/**
 * Ejemplo HOOKS
 * - useState()
 * - useContext()
 */

import React, {useState, useContext} from 'react'

const miContexto = React.createContext(null);
/**
 * 
 * @returns Componente1
 * Dispone de un contexto que va a tener un valor que recibe del padre
 */
const Componente1 = () => {
  // Inicializado a NULL - VACIO que se rellanara con los datos del padre

  const state = useContext(miContexto);


  return (
    <div>
      <h1>
          El Token es: {state.token}
      </h1>
      {/* Pintamos el componente 2 */}
      <Componente2></Componente2>


    </div>
  )
}

const Componente2 = () => {
  // Inicializado a NULL - VACIO que se rellanara con los datos del padre
  const state = useContext(miContexto);

  return (
    <div>
      <h2>
          La sesión es: {state.sesion}
      </h2>
    </div>
  )
}

export default function MiComponenteConContexto() {
  const estadoInicial = {
    token: '45879354',
    sesion: 1
  }

  //Creamos el estado de el componente
  const [sessionData, setSessionData] = useState(estadoInicial);

  /**
   * Funcion para ACTUALZAR SESION
   */

  function actualizarSesion(){
    setSessionData(
      {
        /**
         * generamos un Token aleatorio entre 0-20000
         */
          token: Math.floor(Math.random()*(20000-0+1)+0),
          sesion: sessionData.sesion + 1
      }
    )
  }

  return (
    <miContexto.Provider value={sessionData}>
    <h1>Ejemplo de useState y useContext</h1>
      <Componente1></Componente1>
      <button onClick={actualizarSesion}>Actualizar Sesion</button>
    </miContexto.Provider>
  )
}


/**
 * export default Ejemplo3
 */
