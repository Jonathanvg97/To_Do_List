import React from 'react'; // se importa toda la libreria del react
import './App.scss'; //  se importa los estilos
import Container from "./components/Container" // se importa el componente de container que es el padre que va a pintar toda la pagina

// esta funcion retornara todo el contenido que este dentro del componnete container
function App() {
  return (
    <div className="App"> 
    <Container/> {/* componente padre que pinta toda la pagina*/}
    </div>
  );
}

export default App; // se exporta este componente para usuarlo en el componente principla que es el index.js
