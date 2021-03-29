import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import NavBar from "./components/Navbar/NavBar"
import SearchForm from "./components/Search/search"

function App() {
  return (
      <BrowserRouter>
      <NavBar/>
       <SearchForm/>
      </BrowserRouter>
  )
}

export default App