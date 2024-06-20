import React, { useEffect, useState } from 'react'
import Products from './Products'

function ProductsContainer() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('/products.json')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setProducts(data.products)
        console.log(data)
      })

  }, [])

  return (
    <div>
       <Products products={products} />
    </div>
   
  )
}

export default ProductsContainer