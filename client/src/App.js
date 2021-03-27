import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import NavBar from "./components/Navbar/NavBar"
import { StoreProvider } from "./utils/GlobalStore"

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
      <NavBar/>

      </BrowserRouter>
    </StoreProvider>
  )
}

export default App