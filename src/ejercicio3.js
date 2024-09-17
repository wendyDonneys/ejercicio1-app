import React, { Component } from 'react';

class ContadorClase extends Component {
  constructor(props) {
    super(props);
    // Inicializamos el estado con 'contador' en 0
    this.state = {
      contador: 0
    };
  }

// metodo para incrementar el contador
incrementar= () => {
    this.setState((prevstate) => ({
        contador: prevstate.contador + 1
    }));  
};

render (){
  return(
    <div>
        <h2>contador:{this.state.contador}</h2>
        <button onClick={this.incrementar}>Incrementar</button>       
    </div>
    );
   };
} 

export default ContadorClase;
