import React from "react";

const DetalleProducto = ({ nombre, precio}) => {
    return(
        <div>
            <h2>Producto:{nombre}</h2>
            <p>Descripción:{descripcion}</p>
        </div>
    );
};

export default DetalleProducto; 