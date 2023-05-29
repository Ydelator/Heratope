import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [toggleMenu,setToggle] = React.useState(false)
  const [visible1, setVisible1] = React.useState(false)
  const [visible2, setVisible2] = React.useState(false)
  const ini1 = () =>{
    setVisible1(true)
    setVisible2(false)
    console.log("funciona")
  }
  const ini2 = () =>{
    setVisible1(false)
    setVisible2(true)
  }
  const cambio = () =>{
    setToggle(!toggleMenu)
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
          <Link to={'/login'} className= {`link ${visible1 ? 'visible' : ''}`} onClick={ini1}>Iniciar Sesion</Link>
          <Link to={'/tienda'} className={`link ${visible2 ? 'visible' : ''}`} onClick={ini2}><i className="fa-solid fa-cart-shopping"></i></Link>
          <Link to={'/tienda'} className='link'>Buscar</Link>
        </div>
    </div>
  )
}

export default Navbar