import React from 'react';

const GetProducto = ({producto}) => {

  const {id, title, price, category, description} = producto;

  return (
    <div key={id} className=''>
      <p>{title}</p>
      <p>Precio: {price}</p>
      <p>Categoria: {category}</p>
      <p>Descripcion: {description}</p>
    </div>
  );
};

export default GetProducto;