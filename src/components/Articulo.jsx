import React, { Component } from 'react';
import Pilas from './Pilas';
import Baterias from './Baterias';
import Hidrogeno from './Hidrogeno';
import Likes from './Likes';
import LikesHooks from './LikesHooks';
import Bitcoins from './Bitcoins';

class Articulo extends Component {
    render() {
        return (
          <div>
            {/* SIN COMPONENTES 
            <p>
            A pesar del auge de las energias renovables, 
            las pilas convencionales siguen utilizandose a diario.
            </p>
            <p>
            Gracias a las nuevas tecnologias que afectan a las baterías, 
            la autonomía de los coches eléctricos está aumentando a pasos agigantados.
            </p> */}

            {/* CON COMPONENTES */}
            <Pilas />
            <Baterias />
            <Hidrogeno />
            <Likes tipo={'CLASE'}/>
            <LikesHooks tipo={'HOOKS'}/>
            <Bitcoins tipo={'HOOKS'}/>
          </div>
        );
    }
}



export default Articulo;

