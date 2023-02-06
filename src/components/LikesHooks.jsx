import React, {useState} from 'react'
import PropTypes from 'prop-types'

const LikesHooks = (props) => {

  //Introduccion a use State
  const [contadorLikes, setLikes] = useState(0);

  const sumaLikes = () => {
    setLikes(contadorLikes +1)
  }

  const restaLikes = () => {
    setLikes((contadorLikes > 0)? contadorLikes -1 : contadorLikes)
  }

  return (
    <div>
      <h2>Likes con {props.tipo}</h2>
        <h3>Likes: {contadorLikes}</h3>
        <button className='btn' onClick={sumaLikes}>+ Likes</button>
        <button className='btn' onClick={restaLikes}>- Likes</button>
      </div>
  )
}

LikesHooks.propTypes = {
  tipo: PropTypes.string,
}

export default LikesHooks