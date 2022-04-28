import React from 'react'
import Home from './pages/Home'
import ProductsState from './context/ProductsState'


export default function App() {

  return (
    <div>
      <ProductsState>
        <Home />
      </ProductsState>
    </div>

  )
}
