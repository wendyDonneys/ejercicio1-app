import React from 'react';
import ListaDeProductos from './ListaDeProductos';

const App = () => {
  // Array de productos
  const productos = [
    { nombre: "RAM", precio: 5000 },
    { nombre: "SSD", precio: 3000 },
    { nombre: "DISCODURO", precio: 1500 },
    { nombre: "PCGAMER", precio: 2500 },
    { nombre: "CONTROLXBOX", precio: 3300 }
    
  ];

  return (
    <div>
      <ListaDeProductos productos={productos} />
    </div>
  );
};

export default App;
