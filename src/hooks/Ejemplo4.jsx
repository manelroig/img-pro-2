/**
 * Ejemplo de entener el uso de PROPS.CHILDREN
 */

import React from 'react'

const Ejemplo4 = (props) => {
  return (
    <div>
      <h1>Ejemplo4 de CHILDREN.PROPS</h1>
      <h2>
        Nombre: {props.nombre}
      </h2>
      {/* props.children pintara aquello que se encuentre entre las etiquetas de apertura y cierre de este componente desde el componente de orden superior */}
      {props.children}

    </div>
  )
}

export default Ejemplo4