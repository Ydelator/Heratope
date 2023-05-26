import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Tienda from './components/Tienda'
import Navbar from './components/Navbar'

function App() {

  return (
    <Router>
      <div className='container'>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='login' element={<Login/>}></Route>
          <Route path='tienda' element={<Tienda/>}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
