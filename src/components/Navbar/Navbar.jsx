import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const {numItems} = props
  return (
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand">Wolf Informatica</a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/Componentes">Componentes</Link>
        </li>
        <li className="nav-item">
        <Link to="/Mantenimiento" className="nav-link">Mantenimiento</Link>
        </li>        
        <li className="nav-item">
        <Link to="/Contacto" className="nav-link">Contacto</Link>
        </li>
      </ul>
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="navbar-item">
            <a className="nav-link">Finalizar Compra:</a>
        </li>
        <li className="navbar-item">
            <CartWidget
            numItems={numItems}
            />
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar