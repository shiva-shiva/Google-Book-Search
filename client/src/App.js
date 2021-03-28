import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import NavBar from "./components/Navbar/NavBar"
import { StoreProvider } from "./utils/GlobalStore"
import SearchForm from "./components/Search/search"

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
      <NavBar/>
       <SearchForm/>
      </BrowserRouter>
    </StoreProvider>
  )
}

export default App