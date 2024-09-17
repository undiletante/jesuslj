import { useState } from 'react'

import './css/estilos.css'
import './css/inicio.css'

import Cabecera from './componentes/Cabecera';
import Pie from './componentes/Pie';
import Inicio from './componentes/Inicio';
import Carrito from './componentes/Carrito';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Carrito tipo="lista" />
      <div id="contenedor">
        <Cabecera />
        <Inicio />
        <Pie />
      </div>
    </>
  );
}

export default App
