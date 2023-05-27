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
          <h3>¿Como funciona Heratope?</h3>
          <p>Te ayudamos a escoger tu perfume si aún tienes dudas o puedes comprar tu perfume preferido directamente con nosotros</p>
          <Link to={'/tienda'}>Empezar</Link>
        </div>
      </div>
      <div className='container-home3'>
        <div className="sec-3">
          <h3 className='blue'>BLEU DE CHANEL</h3>
          <Link to={'/tienda'} className='btn-comprar'>Comprar ahora</Link>
        </div>
        <img src="https://5.imimg.com/data5/LV/EC/PL/SELLER-80634802/bleu-chanel-perfume.jpg" alt="bleu-chanel" className='img-bleu'/>
        <h2 className='per-mas-vend'>PERFUME MAS VENDIDO DEL MES</h2>
      </div>
    </div>
  )
}

export default Home