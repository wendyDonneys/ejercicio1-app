import React from 'react';
import Producto from './Producto';

function App = () => {
    return (
        <div>
            <Producto nombreProducto="RAM" precio={5000}/>
            <Producto nombreProducto="SSD" precio={3000}/>
            <Producto nombreProducto="DISCODURO" precio={1500}/>
            <Producto nombreProducto="PCGAMER" precio={2500}/>
            <Producto nombreProducto="CONTROLXBOX" precio={3300}/>
        </div>
    );
}; 

export default App; 