import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { StoreProvider } from "./utils/GlobalStore"

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
      </BrowserRouter>
    </StoreProvider>
  )
}

export default App