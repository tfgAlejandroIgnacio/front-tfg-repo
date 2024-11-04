import React, { useEffect, useState } from 'react';
import GetProducto from './GetProducto';

const Index = () => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProductos(json))
  }, []);

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

      <body className='flex jusify-center flex-col h-screen'>
        {productos.map(item =>(
          <GetProducto key={item.id} producto={item}/>
        ))}
      </body>
      
    </div>
  );
};

export default Index;