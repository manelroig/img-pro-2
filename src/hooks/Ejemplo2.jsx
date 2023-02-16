/**
 * Ejemplo de uso de:
 * -useState()
 * -useRef() Referenciamos elementos dentro de la vista
 * -useEffect() Controla los cambios en la vista
 */


import React, {useState, useRef, useEffect} from 'react'

const Ejemplo2 = () => {

const [contador1, setContador1] = useState(0);
const [contador2, setContador2] = useState(0);

// Creamos una REFERENCIA con useRef para asociar una VARIABLE con un elemento del DOM. Es como usar un getDocumentBy...

const miRef = useRef();

function incrementar1(){
  setContador1(contador1 +1)
}
function incrementar2(){
  setContador2(contador2 +1)
}


/**
 * Trabajamos con useEffect
 */

/**
 * ? Caso 1: * ejecutar SIEMPRE un snippet de código
 * Cada vez que haya uhn cambio en el estado del componente se ejecuta aquello que estçe dentro del useEffect()
 */

useEffect(() => {
  console.log("Cambio en el estado del componente")
  console.log("mostrando referencia a elemento")
  console.log(miRef);
})

/**
 * ? Caso2: Ejecutar solo cuando cambia CONTADOR1
 * CAda vez que haya un cambio en CONTADOR1 se ehecuta useEffect,
 * Si cambia CONTADOR1 no habra ejecucion
 */

useEffect(() =>{
  console.log("Cambio en el estado del CONTADOR 1")
  console.log("mostrando referencia a elemento")
  console.log(miRef);
}, [contador1]);

/**
 * ? Caso3: Ejecutar solo cuando cambia CONTADOR1 o CONTADOR2
 * CAda vez que haya un cambio en CONTADOR1 se ehecuta useEffect,
 * Si cambia CONTADOR1 no habra ejecucion
 */

useEffect(() =>{
  console.log("Cambio en el estado del CONTADOR 1 o CONTADOR2")
  console.log("mostrando referencia a elemento")
  console.log(miRef);
}, [contador1, contador2]);

  return (
    <div>
    <h1> Ejemplo de useState, useReff y useEffect</h1>
    <h2>CONTADOR 1: {contador1}</h2>
    <h2>CONTADOR 2: {contador2}</h2>
    {/* Elemento referenciado*/}
    <h4 ref={miRef}>
      Ejemplo de elemento referenciado
    </h4>

    <section>
      <button onClick={incrementar1}>Incrementa 1</button>
      <button onClick={incrementar2}>Incrementa 2</button>
    </section>


      
    </div>
  )
}

export default Ejemplo2