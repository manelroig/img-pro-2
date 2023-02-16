/* Ejemplo de uso del Hook useState 

Crear componente del tipo funcion y acceder a suestado privade mediante un hook y poder modificarlo */

import React, { useState } from 'react';

const Ejemplo1 =() => {

  //Valor inicial para contador
  const valorInicial = 0;
  //Valor inicial para persona
  const personaInicial = {
    nombre: 'Manel',
    email : 'anemotionalbyte@gmail.com',
  }

  /*
  Haremos que el valorInicial y personaInicial sean parte del estado del componente, para así gestionar su cambio y que se ve reflejado ebn la vista del componente. Para que se replique automaticamente en el html

  const  [nombreVarialbe, funcionParaCambiar] = useState(valorInicial)]
  */

  const [contador, setContador] = useState(valorInicial);
  const [persona, setPersona] = useState(personaInicial);
  
  /**
  * Funcion para actualizar el estado prievado que contiene el contador
  */

  function incrementarContador(){
    setContador(contador +1);
  }

  /**
   * Funcion para actualizar el estado prievado que contiene la persona
   */

  function actualizarPersona(){
    setPersona({
      nombre:'Marisa',
      email:'manelroig@manelroig.com'
    });
  }





  return (
    <div>
    <h1> Ejemplo de useState</h1>
    <h2>CONTADOR: {contador}</h2>
    <h2>PERSONA:</h2>
    <h3>Nombre:{persona.nombre}</h3>
    <h3>Email:{persona.email}</h3>

    <section>
      <button onClick={incrementarContador}>Incrementa contador</button>
      <button onClick={actualizarPersona}>Actualizar persona</button>
    </section>


      
    </div>
  );
};

export default Ejemplo1;

