import React from 'react';
import DetalleProducto from './DetalleProducto';

const App = () => {
  return (
    <div>
      <DetalleProducto 
        nombre="PCGAMER"
        precio={2500}
        descripcion="Un maquina de alto rendimiento para programadores y Gamers."
      />
      <DetalleProducto 
        nombre="CONTROLXBOX"
        precio={3300}
        descripcion="Controles inalambricos, antigolpes, modelo 2024."
      />
    </div>
  );
};

export default App;
