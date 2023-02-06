import logo from './logo_manelroig.svg';
import './App.css';
import Articulo from './components/Articulo';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
