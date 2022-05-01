import React from 'react'
import Home from './pages/Home'
import ProductsState from './context/ProductsContext/ProductsState'
import SubscribeState from "./context/SubscribeContext/SubscribeState"


export default function App() {

  return (
    <div>
      <ProductsState>
        <SubscribeState>
          <Home />
        </SubscribeState>
      </ProductsState>
    </div>

  )
}
