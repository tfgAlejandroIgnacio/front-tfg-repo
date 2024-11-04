import React from 'react';

const Index = () => {
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
        <p className='pb-10'>Elemento1</p>
        <p>Elemento2</p>
      </body>
      
    </div>
  );
};

export default Index;