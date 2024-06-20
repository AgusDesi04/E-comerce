import React from 'react'

function Products({ products }) {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
      {products.map((product, index) => {

        return (
            <article key={index} className='bg-white rounded-xl'>
              <h3 className='font-sans underline font-thin pl-6 pt-3'>{product.nombre}</h3>
              <h3 className='font-sans pl-6'>${product.precio}</h3>
              <img src={product.imagen} alt={product.nombre} className='p-3'/>
              <button> hola</button>
            </article>

        )
      })}
    </section>
  )
}

export default Products