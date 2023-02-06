import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Likes.css';
class Likes extends Component {

  constructor(props) {
    super(props)
    this.state =  {
      contadorLikes: 0,
    }
  }

  sumaLikes = () => {
    this.setState((prevState) => (
      {
      contadorLikes: prevState.contadorLikes +1
      }
    ))
    
  }

  restaLikes = () => {
    this.setState((prevState) => (
      {
      contadorLikes: ((prevState.contadorLikes > 0)? prevState.contadorLikes -1 : prevState.contadorLikes)
      }
    ))
  }

  render() {
    return (
      <div>
      <h2>Likes con {this.props.tipo}</h2>
        <h3>Likes: {this.state.contadorLikes}</h3>
        <button className='btn' onClick={this.sumaLikes}>+ Likes</button>
        <button className='btn' onClick={this.restaLikes}>- Likes</button>
      </div>
    );
  }
}

Likes.propTypes = {
  tipo:PropTypes.string,

}

export default Likes;