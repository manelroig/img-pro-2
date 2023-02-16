import logo from './logo_manelroig.svg';
import './App.css';
import Articulo from './components/Articulo';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import Father from './components/father';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Father></Father>
        
        <Ejemplo1></Ejemplo1>
        <Ejemplo2></Ejemplo2>
        <MiComponenteConContexto></MiComponenteConContexto>
        <Ejemplo4 nombre="Manel">
          {/* Todo lo que hay aqui dentro se trata como porps.children */}
          <h3> Esto es el contenido del props.children</h3>
        </Ejemplo4>
        
        <h1>
          Ejercicio 3.
        </h1>
        <h2>Insertar elemento BITCOIN en ejercicio Artículo.</h2>
        
        <Articulo></Articulo>

    
      </header>
      
    </div>
  );
}

export default App;
