import React from 'react';
import Autonomia from './Autonomia';
import AutonomiaProps from './AutonomiaProps';

function Baterias() {
  return (
    <div>
      <h3>Baterías eléctricas</h3>
      <p>
      Gracias a las nuevas tecnologias que afectan a las baterías, 
      la autonomía de los coches eléctricos está aumentando a pasos agigantados.
      </p>
      <Autonomia km='250km' />
      <AutonomiaProps km={300}/>
      <br />
    </div>
  )
}

export default Baterias;