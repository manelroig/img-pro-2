import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './Bitcoins.css';

const Bitcoins = (props) => {

  //Introduccion a use State
  const [contadorBitcoins, setBitcoins] = useState(0);

  const sumaBitcoins = () => {
    setBitcoins(contadorBitcoins +1)
  }

  const restaBitcoins = () => {
    setBitcoins((contadorBitcoins > 0)? contadorBitcoins -1 : contadorBitcoins)
  }

  return (
    <div>
      <h2>Bitcoins con {props.tipo}</h2>
        <h3>Bitcoins: {contadorBitcoins}</h3>
        <button className='btn bitcoin' onClick={sumaBitcoins}>+ Bitcoins</button>
        <button className='btn bitcoin' onClick={restaBitcoins}>- Bitcoins</button>
      </div>
  )
}

Bitcoins.propTypes = {
  tipo: PropTypes.string,
}

export default Bitcoins