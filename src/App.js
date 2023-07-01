import Boton from './components/Boton';
import Contador from './components/Contador';
import './App.css';
import { useState } from 'react';


function App() {


  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  }

  const reiniciarContador = () => {
    setNumClicks(0);
  }


  return (
    <div className="App">

      <h1>Contador de clicks</h1>

      <div className='contenedor-principal'>

        <Contador
          numClicks={numClicks} />
        <Boton
          texto="Click"
          esBotonClick={true}
          manejarClick={manejarClick} />
        <Boton
          texto="Reiniciar"
          esBotonClick={false}
          manejarClick={reiniciarContador} />

      </div>
    </div>
  );
}

export default App;
