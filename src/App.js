import './App.css';
import {useState} from 'react'
import BarraSuperior from './components/Barra-Superior/BarraSuperior.js' 
import SeleccioProjectes from './components/Seleccio-Projectes/SeleccioProjectes.js'
import Galeria from './components/Galeria/Galeria.js'
//import Menu from './components/Menu/Menu.js'



function App() {

  const [mostrarGaleria, setMostrarGaleria] = useState(false);
  const [datosGaleria, setDatosGaleria] = useState(null);


  const goToGaleria = (datos) => {
    setDatosGaleria(datos);
    //console.log(datos);
    setMostrarGaleria(true);
    //console.log(mostrarGaleria);
  }
  function goToInicio(){
    setMostrarGaleria(false);
  }
  return (
    <div className="App">
      <header>
        <BarraSuperior/>
      </header>
      <main>
        {mostrarGaleria ? <Galeria datos={datosGaleria} onButtonClick={goToInicio}/> : <SeleccioProjectes onButtonClick={goToGaleria}/>}
      </main>
    </div>
  );
}

export default App;
//app