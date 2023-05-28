import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [toggleMenu,setToggle] = React.useState(false)
  const cambio = () =>{
    setToggle(!toggleMenu)
  }
  return (
    <div className='navbar'>
      <div className="drop-down">
        <div className='sec-menu' onClick={cambio}>
          <i className="fa-solid fa-bars"></i>
          <a className='menu-btn'>MENU</a>
        </div>
        <ul className= {`dropdown-content ${toggleMenu ? 'visible' : ''}`}>
          <li><a href="#">Hombre</a></li>
          <li><a href="#">Mujer</a></li>
          <li><a href="#">Descuentos</a></li>
          <li><a href="#">Todo</a></li>
        </ul>
      </div>
      
        
        <Link to={'/'} className='nombre'>HERATOPE</Link>
        <div className='options'>
          <Link to={'/login'}>Iniciar Sesion</Link>
          <Link to={''}><i className="fa-solid fa-cart-shopping"></i></Link>
          <Link to={'/tienda'}>Buscar</Link>
        </div>
    </div>
  )
}

export default Navbar