import React from 'react';
import { Link } from 'react-router-dom'
import credenciales from '../credenciales'
import { getAuth, signOut } from 'firebase/auth'

const auth = getAuth(credenciales.appFirebase)

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Uts Info Web</a>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page">Home Page</Link>
            </li>
            <li className="nav-item">
              <Link to="/pyq" className="nav-link">P&R</Link>
            </li>
            <li className="nav-item">
              <Link to="/Noticias" className="nav-link">Noticias y Anuncios</Link>
            </li>
          </ul>
          <button className='btn btn-outline-success' onClick={() => signOut(auth)}>Salir</button>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
