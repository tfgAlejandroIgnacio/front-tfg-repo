import React, { useEffect, useState } from 'react';
import GetProducto from './GetProducto';
import { PeticionGetProducto, PeticionDeleteProducto} from '../PeticionesProductos';

const Index = () => {

  const [productos, setProductos] = useState([]);
  const [numProductos, setNumProductos] = useState(3);

  useEffect(() => {
    const get = async () => {
      const respuesta = await PeticionGetProducto();
      setProductos(respuesta);
    };
    get();
  }, []);

  const handleDelete = async (id) =>{
    await PeticionDeleteProducto(id);
    setProductos(productos.filter((producto) => producto.id !== id)); 
  }

  const mostrarMas = () => {
    setNumProductos(numProductos+3);
  }

  return (
    <div>
      <header className='flex justify-center flex-col'>
        <div>
          <h1 className='mt-5 font-bold text-4xl'>Panel de control</h1>
        </div>
        <div className='flex justify-center mt-12 mb-12 gap-28'>
          <h3>Productos</h3>
          <h3>Usuarios</h3>
        </div>
      </header>

      <div className='flex justify-center p-4 gap-4 mb-5'>
        <p className='flex-1'>Nombre</p>
        <p className='flex-1'>Precio</p>
        <p className='flex-1'>Categoria</p>
        <p className='flex-1'>Descripción</p>
        <p className='flex-1'>Eliminar Producto</p>
        <p className='flex-1'>Modificar Producto</p>
      </div>

      <body className='flex jusify-center flex-col h-screen'>
        {productos.slice(0,numProductos).map(item =>(
          <GetProducto key={item.id} producto={item} handleDelete={handleDelete}/>
        ))}

        <button onClick={mostrarMas} className='border border-black ml-10 mr-10'>Mostrar Más</button>
      </body>
        
    </div>
  );
};

export default Index;