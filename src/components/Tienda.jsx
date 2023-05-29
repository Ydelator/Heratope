import React, {useState} from 'react'
import { db } from '../firebase'

const Tienda = () => {
  const [cartItems, setCartItems] = React.useState([])
  const [visible, setVisible] = React.useState(false)
  const [Lista, setLista] = React.useState([])

  React.useEffect(()=>{
    const obtenerDatos = async()=>{
      try {
        const data = await db.collection('producto').get()
        const arrayData = data.docs.map(doc=>({
          id: doc.id,
          ...doc.data()
        }))
        setLista(arrayData)
        console.log(Lista)
      } catch (error) {
        console.error(error)
      }
    }
    obtenerDatos()
  },[])
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    setVisible(true)
  };
  const removeFromCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem.quantity > 1) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
      setCartItems(updatedCartItems);
    }
    let total = 0
    cartItems.forEach((item) => {
      total = total + item.quantity
    });
    if (total == 1) {
      setVisible(false)
    }
  };
  const quitar = (product) =>{
    const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCartItems);
    let total = 0
    cartItems.forEach((item) => {
      if (item) {
        total = total + 1
      }
    });
    if (total == 1) {
      setVisible(false)
    }
  }
  const calculateTotal = () =>{
    let total = 0;
    cartItems.forEach((item)=>{
      total += item.price * item.quantity
    })
    return total
  }

  return (
    <div className='container-tienda'>
      <div className={`container-items ${visible ? 'visible' : ''}`}>
        {
          Lista.map((elemento)=>(
            <div className="item" key={elemento.id}>
              <span className='titulo-item'>{elemento.nombre}</span>
              <img src={elemento.urlimg} alt="" className='img-item'/>
              <span className='precio-item'>${elemento.precio}</span>
              <button className='btn-item' onClick={()=> addToCart({id: elemento.id, name: elemento.nombre, price: elemento.precio, img: elemento.urlimg})}>Agregar al carrito</button>
            </div>
          ))
        }

        
      </div>
          <div className={`carrito ${visible ? 'visible' : ''}`}>
            <div className="header-carrito">
              <h2>Tu Carrito</h2>  
            </div>
            {cartItems.length === 0 ? (
            <p>Tu carrito esta vacio.</p>
            ) : (
            <div className='carrito-items'>
              {cartItems.map((item) => (
                <div className='a' key={item.id}>
                  <img src={item.img} width="80px" alt="" className='item-img'></img>
                  <div className='carrito-item-detalles'>
                    <span className='carrito-item-titulo'>{item.name}</span>
                    <div className='selector-cantidad'>
                      <i onClick={()=> removeFromCart(item)} className="fa-solid fa-minus restar-cantidad"></i>
                      <input type="text" className='carrito-item-cantidad' disabled placeholder={item.quantity}/>
                      <i onClick={() => addToCart(item)} className="fa-solid fa-plus sumar-cantidad"></i>
                    </div>
                    <span className='carrito-item-precio'>{item.price}</span>
                  </div>
                  <button className='btn-eliminar' onClick={()=> quitar(item)}>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              ))}
            </div>
          )}
          <div className="carrito-total">
            <div className='fila'>
              <strong>Tu Total</strong>
              <span className='carrito-precio-total'>
                ${calculateTotal()}
              </span>
            </div>
            <button className='btn-pagar'>Pagar <i className='fa-solid fa-bag-shopping'></i> </button>
          </div>
          
        </div>
    </div>
  )
}

export default Tienda