import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <button>MENU</button>
        <Link to={'/'} className='nombre'>HERATOPE</Link>
        <div className='options'>
          <Link to={'/login'}>Iniciar Sesion</Link>
          <button>Carrito</button>
          <Link to={'/tienda'}>Buscar</Link>
        </div>
    </div>
  )
}

export default Navbar