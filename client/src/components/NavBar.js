import React, { useState, useEffect } from 'react'
import { Redirect, NavLink, useLocation  } from "react-router-dom"
import { useStoreContext } from "../utils/GlobalStore"

let timeout

function NavBar() {
  const [ showMenu, setShowMenu ] = useState( false )
  const [{ authOk, name }]= useStoreContext()
  const location = useLocation()

  useEffect( function(){
    if( showMenu ){
      if( timeout ) clearTimeout( timeout )
      timeout = setTimeout( function(){ setShowMenu( false ); }, 2000 )
    }
  }, [ showMenu ])

  // location changed so hide menu
  useEffect( function(){
    if( timeout ) clearTimeout( timeout )
    setShowMenu( false )
  }, [ location ])
  
  return ( 
    <>
    { !authOk ? <Redirect to='/login' /> :
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink to="/" className="navbar-brand">
          <img src='https://upload.wikimedia.org/wikipedia/commons/7/79/Mountain_icon_%28Noun_Project%29.svg' alt="" width="64" height="64" />
      </NavLink>
      <button onClick={() => setShowMenu(!showMenu)} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse `+(showMenu ? 'show' : '')} id="navbar">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to="/tasks" className="nav-link" activeClassName="active">Tasks</NavLink>
          </li>          
          <li className="nav-item">
            <NavLink to="/logout" className="nav-link">Logout</NavLink>
          </li> 
        </ul>
        { name && <div class="d-flex"><div class="mx-3">Welcome back <u>{name}</u></div></div> }
      </div>
    </nav>
    }
    </>
  )
}

export default NavBar