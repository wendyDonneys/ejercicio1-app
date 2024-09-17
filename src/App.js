
//Ejercicio1-saludo
// import React from 'react';
// import Saludo from "./Saludo";

// function App (){
//   return (
//     <div>
//       <h1>ejercicio 1, "Saludo"</h1>
//       <br/>
//       <Saludo nombre = "!Wendy!" />
//     </div>
//   );
// };

// export default App; 

// import react  'react';
// import Producto from './Producto';


//ejercicio2-producto
// function App = () => {
//     return (
//         <div>
//             <Producto nombreProducto="RAM" precio={5000}/>
//             <Producto nombreProducto="SSD" precio={3000}/>
//             <Producto nombreProducto="DISCODURO" precio={1500}/>
//             <Producto nombreProducto="PCGAMER" precio={2500}/>
//             <Producto nombreProducto="CONTROLXBOX" precio={3300}/>
//         </div>
//     );
// }; 

// export default App;

//ejercicio3- contador
// import React, { Component } from 'react';

// class ContadorClase extends Component {
//   constructor(props) {
//     super(props);
//     Inicializamos el estado con 'contador' en 0
//     this.state = {
//       contador: 0
//     };
//   }

// metodo para incrementar el contador
// incrementar= () => {
//     this.setState((prevstate) => ({
//         contador: prevstate.contador + 1
//     }));  
// };

// render (){
//   return(
//     <div>
//         <h2>contador:{this.state.contador}</h2>
//         <button onClick={this.incrementar}>Incrementar</button>       
//     </div>
//     );
//    };
// } 

// export default ContadorClase;*/

// ejercicio 4.0
// const ListaDeProductos = ({Productos}) => {
//     return (
//         <div>
//             <h1>Lista de Producto </h1>
//             {Productos.map((Producto,index)=>(
//             <Producto 
//             key = {index}
//             nombreProducto={producto.nombre}
//             precio={producto.precio}
//             />
//             ))}
//         </div>
//     );
// };

// export default ListaDeProductos;

//ejercicio 4.1
//  import React from 'react';
// import ListaDeProductos from './ListaDeProductos';

// const App = () => {
//   // Array de productos
//   const productos = [
//     { nombre: "RAM", precio: 5000 },
//     { nombre: "SSD", precio: 3000 },
//     { nombre: "DISCODURO", precio: 1500 },
//     { nombre: "PCGAMER", precio: 2500 },
//     { nombre: "CONTROLXBOX", precio: 3300 }
    
//   ];

//   return (
//     <div>
//       <ListaDeProductos productos={productos} />
//     </div>
//   );
// };

//ejercicio 5
//   import React from "react";

// const DetalleProducto = ({ nombre, precio}) => {
//     return(
//         <div>
//             <h2>Producto:{nombre}</h2>
//             <p>Descripción:{descripcion}</p>
//         </div>
//     );
// };

// export default DetalleProducto; 

//ejercicio 5.1
// import React from 'react';
// import DetalleProducto from './DetalleProducto';

// const App = () => {
//   return (
//     <div>
//       <DetalleProducto 
//         nombre="PCGAMER"
//         precio={2500}
//         descripcion="Un maquina de alto rendimiento para programadores y Gamers."
//       />
//       <DetalleProducto 
//         nombre="CONTROLXBOX"
//         precio={3300}
//         descripcion="Controles inalambricos, antigolpes, modelo 2024."
//       />
//     </div>
//   );
// };

// export default App;