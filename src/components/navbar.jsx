import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Logo from '../assets/logo_cmv.png';
import './navbar.css'

import Inicio from './pages/inicio';
import Nosotros from './pages/nosotros';
// import Media from './pages/media';
// import Unete from './pages/unete';
// import Testimonios from './pages/testimonios';
import Juegamex from './pages/juegamex';
// import Contactanos from './pages/contactanos';

export class navbar extends Component {
  render() {
    return (
        <Router>
      <div className='container d-flex justify-content-center'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand navbar-toggler" href="!#">
        <img className="navbar-logo" src={Logo} alt="Logo" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link" to={'/nosotros'}>NOSOTROS</Link>
          <div className='navlink-bar item2'></div>
        </li>
        {/* <li className="nav-item">
        <Link className="nav-link" to={'/media'}>MEDIA</Link>
          <div className='navlink-bar item2'></div>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to={'/unete'}>ÚNETE</Link>
          <div className='navlink-bar item3'></div>
        </li> */}
        <li className="nav-item">
        <Link className="nav-link" to={'/'}>
        <img className="navbar-logo" src={Logo} alt="Logo" />
        </Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to={'/testimonios'}>TESTIMONIOS</Link>
          <div className='navlink-bar item3'></div>
        </li>*/}
        <li className="nav-item">
        <Link className="nav-link" to={'/juegamex'}>JUEGAMEX</Link>
          <div className='navlink-bar item2'></div>
        </li> 
        {/* <li className="nav-item">
        <Link className="nav-link" to={'/contactanos'}>CONTÁCTANOS</Link>
          <div className='navlink-bar item2'></div> 
        </li>*/}
      </ul>
    </div>
  </div>
</nav>
      </div>
      <div>
      <Routes>
          <Route path="/" element={<Inicio />}/>
          <Route path="/nosotros" element={<Nosotros />}/>
          {/* <Route path="/media" element={<Media />}/>
          <Route path="/unete" element={<Unete />}/>
          <Route path="/testimonios" element={<Testimonios />}/>
          <Route path="/contactanos" element={<Contactanos />}/>*/}
          <Route path="/juegamex" element={<Juegamex />}/> 
        </Routes>
      </div>
      </Router>
    )
  }
}

export default navbar
