 const ListaDeProductos = ({Productos}) => {
    return (
        <div>
            <h1>Lista de Producto </h1>
            {Productos.map((Producto,index)=>(
            <Producto 
            key = {index}
            nombreProducto={producto.nombre}
            precio={producto.precio}
            />
            ))}
        </div>
    );
};

export default ListaDeProductos; 