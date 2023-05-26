import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <button>MENU</button>
        <Link to={'/'} className='nombre'>HERATOPE</Link>
        <Link to={'/login'}>Iniciar Sesion</Link>
        <button>Carrito</button>
        <button>Buscar</button>
    </div>
  )
}

export default Navbar