import React, { useState, useEffect } from 'react'
import { Redirect, NavLink, useLocation  } from "react-router-dom"
import { useStoreContext } from "../../utils/GlobalStore"
import './style.css'

let timeout

function NavBar() {
  
  return ( 
    <>
  <div className="header-blue">
    <nav className="navbar navbar-light navbar-expand-md navigation-clean-search">
      <div className="container-fluid"><a className="navbar-brand" href="#">GOOGLE BOOK</a><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="nav navbar-nav">
            <li className="nav-item" role="presentation"><a className="nav-link" href="#">Home</a></li>
            <li className="nav-item" role="presentation"><a className="nav-link" href="#">Library</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="container hero">
      <div className="row">
        <div className="col-12 col-lg-5 col-xl-5">
          <h1>Google book search</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /></p> <button className="btn btn-light btn-lg action-button" type="button">Learn More<i className="fa fa-long-arrow-right ml-2" /></button>
        </div>
        <div className="col-md-4 col-lg-4 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
          <div className=""> <img className="device" src="book.jfif" />
          </div>
        </div>
      </div>
    </div>
  </div>

    </>
  )
}

export default NavBar