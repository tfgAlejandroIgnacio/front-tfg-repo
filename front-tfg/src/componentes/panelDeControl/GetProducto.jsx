import React from 'react';

const GetProducto = ({producto, handleDelete}) => {

  const {id, title, price, category, description} = producto;

  return (
    <div key={id} className="flex border border-black p-4 gap-4 mb-5">
      <p className="flex-1 border border-black ">{title}</p>
      <p className="flex-1 border border-black ">{price}</p>
      <p className="flex-1 border border-black ">{category}</p>
      <p className="flex-1 border border-black max-h-24 overflow-y-auto">{description}</p>
      <button className="flex-1 border border-black" onClick={handleDelete}>Eliminar</button>
      <button className="flex-1 border border-black">Modificar</button>
    </div>
  );
};

export default GetProducto;