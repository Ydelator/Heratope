import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container-home1'>
      <div className='container-home2'>
        <div className='sec-1'>
          <h1>HERATOPE</h1>
          <h1>DESCUBRE TU FRAGANCIA</h1>
        </div>
        <div className='sec-2'>
          <h1>¿ESTÁS LISTO PARA ESCOGER TU FRAGANCIA?</h1>
          <p></p>
          <div className="empezar">
            <Link to={'/tienda'} className='link-empezar'>Empezar</Link>
            <span className="material-symbols-outlined">
            call_made
            </span>
          </div>
        </div>
      </div>
      <div className='container-home3'>
        <div className="sec-3">
          <h3 className='blue'>BLEU DE CHANEL</h3>
          <div className='pre-btn-comprar'>
            <Link to={'/tienda'} className='btn-comprar'>Comprar ahora</Link>
          </div>
        </div>
        <img src="https://5.imimg.com/data5/LV/EC/PL/SELLER-80634802/bleu-chanel-perfume.jpg" alt="bleu-chanel" className='img-bleu'/>
        <h2 className='per-mas-vend'>PERFUME MÁS VENDIDO DEL MES</h2>
      </div>
    </div>
  )
}

export default Home