import React from 'react'
import {auth, db} from '../firebase'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState(null)
  const [modoRegistro, setModo] = React.useState(false)
  const [nombre, setNombre] = React.useState('')
  const [apellido, setApellido] = React.useState('')
  const [idNumber, setIdNumber] = React.useState('')
  const navigate = useNavigate()

  const guardarDatos = (e)=>{
    e.preventDefault()
    if(!email.trim()){
      setError('Ingrese un email')
      return
    }
    if(!password.trim()){
      setError('Ingrese una contraseña')
      return
    }
    if(password.length <6){
      setError('La contraseña debe tener 6 caracteres o más')
      return
    }
    setError(null)
    if(!modoRegistro){
      login()
    }
  }

  const registrarDato = (e) =>{
    e.preventDefault()
    if(!nombre.trim()){
      setError('Ingrese un nombre')
      return
    }
    if(!apellido.trim()){
      setError('Ingrese un apellido')
      return
    }
    if(!idNumber.trim()){
      setError('Digite un número de identificación')
      return
    }
    if(!email.trim()){
      setError('Ingrese un email')
      return
    }
    if(!password.trim()){
      setError('Ingrese una contraseña')
      return
    }
    if(password.length <6){
      setError('La contraseña debe tener 6 caracteres o más')
      return
    }
    setError(null)
    e.target.reset
    if(modoRegistro){
      registrar()
    }
  }
  const login = React.useCallback(async()=>{
    try {
      const res = await auth.signInWithEmailAndPassword(email,password)
      console.log(res.user)
      navigate('/')
    } catch (error) {
      console.log(error.code)
      if(error.code === 'auth/invalid.email'){
        setError('Email no válido')
      }
      if (error.code === 'auth/user-not-found'){
        setError('Email no registrado')
      }
      if(error.code === 'auth/wrong-password'){
        setError('Contraseña incorrecta')
      }
    }
  }, [email, password])
  const registrar = React.useCallback(async()=>{
    try {
      const res = await auth.createUserWithEmailAndPassword(email,password)
      await db.collection('cliente').doc(res.user.email).set({
        nombre: nombre,
        apellido: apellido,
        idNumber: idNumber,
        email: res.user.email,
        id: res.user.uid
      })
      setNombre('')
      setApellido('')
      setIdNumber('')
      setEmail('')
      setPassword('')
      setError(null)
      console.log(res.user);
    } catch (error) {
      console.log(error.code);
      if(error.code === 'auth/invalid-email'){
        setError('Email no válido')
      }
      if(error.code === 'auth/email-already-in-use'){
        setError('Email ya registrado')
      }
    }
  }, [nombre,apellido,idNumber, email, password])

  return (
    <div className='container-login1'>
      <div>
        {
          modoRegistro ? 
            <form className="container-login2" onSubmit={registrarDato}>
              {
                error &&(
                  <div className='alert alert-danger'>
                    {error}
                  </div>
                )
              } 
              <div className='container-nombres-login'>
                <input className='inputs' type="text" placeholder='Nombre' onChange={e =>setNombre(e.target.value.trim())}/>
                <input className='inputs' type="text" placeholder='Apellido'onChange={e=>setApellido(e.target.value.trim())}/>
              </div>
              <input className='inputs' type="number" placeholder='Identificacion'onChange={e=>setIdNumber(e.target.value.trim())}/>
              <input className='inputs' type="email" placeholder='Correo electronico'onChange={e=>setEmail(e.target.value.trim())}/>
              <input className='inputs' type="password" placeholder='Contraseña' onChange={e=>setPassword(e.target.value.trim())}/>
              <button type='submit' className='btn-login'>REGISTRAR</button>
              <p className='txt-login2' onClick={()=>{setModo(!modoRegistro)}}>¿Tienes una cuenta? </p>
            </form>
          :
          <form className="container-login2" onSubmit={guardarDatos}> 
          {
            error && (
              <div className='alert alert-danger'>
                {error}
              </div>
            )
          }
            <input className='inputs' type="email" placeholder='Correo electronico' onChange={e=>setEmail(e.target.value.trim())}/>
            <input className='inputs' type="password" placeholder='Contraseña' onChange={e=>setPassword(e.target.value.trim())}/>
            <p className='txt-login1'>Recordar contraseña</p>
            <button type='submit' className='btn-login'>INICIAR SESION</button>
            <p className='txt-login2' onClick={()=>{setModo(!modoRegistro)}}>¿No tienes cuenta? Registrate</p>
          </form>
        }
        
      </div>
    </div>
  )
}

export default Login