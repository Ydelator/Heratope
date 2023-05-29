import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Tienda from './components/Tienda'
import Navbar from './components/Navbar'
import { auth } from './firebase'

function App() {
  const [firebaseUser, setFirebaseUser] = React.useState(false)
  React.useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      console.log(user)
      if (user) {
        setFirebaseUser(user)
      } else {
        setFirebaseUser(null)
      }
    })
  },[])
  return firebaseUser !== false ?(
    <Router>
      <div className='container'>
        <Navbar firebaseUser = {firebaseUser}></Navbar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='login' element={<Login/>}></Route>
          <Route path='tienda' element={<Tienda/>}></Route>
        </Routes>
      </div>
    </Router>
  ):
  (<p>Loading...</p>)
}

export default App
