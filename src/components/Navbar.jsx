import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'

const Navbar = (props) => {
  const navigate = useNavigate()
  const cerrarsesion=()=>{
    auth.signOut()
    .then(()=>{
      navigate('/')
    })
  }
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
          {
            props.firebaseUser !== null ?(
              <div className='cerrar-sesion'>
                <div className='btn-cerrar-sesion'>
                  <span class="material-symbols-outlined">
                  account_circle
                </span>
                </div>
                <div className='content-cerrar-sesion'  onClick={cerrarsesion}>
                  <a href="#">Cerrar sesion</a>
                </div>
              </div>
            ):(<Link to={'/login'} className= 'link' >Iniciar Sesion</Link>)
          }
          <Link to={'/tienda'} className='link'><i className="fa-solid fa-cart-shopping"></i></Link>
          <Link to={'/tienda'} className='link'>Buscar</Link>
        </div>
    </div>
  )
}

export default Navbar