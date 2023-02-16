import React, { useRef } from 'react';

const Child = ({name, send, update}) => {

  const messageRef =  useRef('');
  const nameRef = useRef('');
  
  function pressButton(){
    const text = messageRef.current.value;
    console.log(`Default ${text}`)
  }

  function pressButtonParams(text){
    console.log('Text',text)

  }

  function submitName(e){
    e.preventDefault();
    update(nameRef.current.value)
  }

  return (
    <div style={{background:'#afafaf', padding:'50px'}}>
      <h1 onMouseOver={() => console.log("mouse OVER")}>Child Component</h1>
      <h2> Hello, {name}</h2>
      <button onClick={pressButton}>BOTON 1</button>
      {/*<button onClick={pressButtonParams("hola")}>BOTON 2</button>*/}
      <button onClick={() => pressButtonParams("hola")}>BOTON 2</button>
      <input
        placeholder='INTRODUCE UN TEXTO'
        onChange={(e) => console.log('Change',e.target.value)}
        onFocus={()=> console.log('FOCUS')}
        ref = {messageRef}
      ></input>
      <button onClick={() => send(messageRef.current.value)}>SEND MESSAGE</button>

      <div style={{margin:'50px', background:'#a9a9a9'}}>
        <form onSubmit={submitName}>
          <input
          ref={nameRef}
          placeholder='nombre'></input>
          <button type='submit'>UPDATE</button>
        </form>

      </div>

    </div>
  )
}

export default Child;