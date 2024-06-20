import { Route, Routes } from "react-router-dom"
import ProductsContainer from "./ProductsContainer"

function Main() {
  return (
    <main className="mt-20 bg-[#242424]">
      <h1 className="text-white">CAR-STORE</h1>
      <Routes>
        <Route path="/" element={<h2 className="text-white">Hola</h2>} />
        <Route path="products" element={<ProductsContainer />} />

      </Routes>

    </main>

  )
}

export default Main

