import React from 'react'

const Login = () => {
  const [modoRegistro, setModo] = React.useState(false)
  return (
    <div className='container-login1'>
      <div>
        {
          modoRegistro ? 
            <form className="container-login2"> 
              <div className='container-nombres-login'>
                <input className='inputs' type="text" placeholder='Nombre'/>
                <input className='inputs' type="text" placeholder='Apellido'/>
              </div>
              <input className='inputs' type="number" placeholder='Identificacion'/>
              <input className='inputs' type="email" placeholder='Correo electronico'/>
              <input className='inputs' type="password" placeholder='Contraseña'/>
              <button className='btn-login'>REGISTRAR</button>
              <p className='txt-login2' onClick={()=>{setModo(!modoRegistro)}}>¿Tienes una cuenta? </p>
            </form>
          :
          <form className="container-login2"> 
            <input className='inputs' type="email" placeholder='Correo electronico'/>
            <input className='inputs' type="password" placeholder='Contraseña'/>
            <p className='txt-login1'>Recordar contraseña</p>
            <button className='btn-login'>INICIAR SESION</button>
            <p className='txt-login2' onClick={()=>{setModo(!modoRegistro)}}>¿No tienes cuenta? Registrate</p>
          </form>
        }
        
      </div>
    </div>
  )
}

export default Login