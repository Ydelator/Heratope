import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

  return (
    <div className='navbar'>
      <div className="drop-down">
        <div className='sec-menu'>
            <Link className='link-sec-menu' to={'/'}>
              <span className="material-symbols-outlined">
                home
              </span>
            </Link>
        </div>
      </div>
      
        
        <Link to={'/'} className='nombre'>HERATOPE</Link>
        <div className='options'>
          <Link to={'/login'} className= 'link' >Iniciar Sesion</Link>
          <Link to={'/tienda'} className='link'><i className="fa-solid fa-cart-shopping"></i></Link>
          <Link to={'/tienda'} className='link'>Buscar</Link>
        </div>
    </div>
  )
}

export default Navbar