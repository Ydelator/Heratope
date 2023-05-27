import React from 'react'

const Login = () => {
  return (
    <div className='container-login1'>
      <div className="container-login2">
        <input className='inputs' type="email" placeholder='Usuario/Correo electronico'/>
        <input className='inputs' type="password" placeholder='Contraseña'/>
        <p className='txt-login1'>Recordar contraseña</p>
        <button className='btn-login'>INICIAR SESION</button>
        <p className='txt-login2'>¿No tienes cuenta? Registrate</p>
      </div>
    </div>
  )
}

export default Login