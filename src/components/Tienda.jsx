import React, {useState} from 'react'

const Tienda = () => {
  const [cartItems, setCartItems] = React.useState([])
  const [visible, setVisible] = React.useState(false)
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
  const restCart = (product) =>{
    const existingItem = cartItems.find((item) => item.id === product.id); 

    if (existingItem > 1) {
      const updatedCartItems = cartItems.map((item)=>
        item.id === product.id ? {...item, quantity : item.quantity-1} : item
      )
      setCartItems(updatedCartItems)
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
        <div className="item">
          <span className='titulo-item'>BLEU DE CHANEL</span>
          <img src="https://static.wixstatic.com/media/6ce809_6eb1461d66874538852a249887880b9f~mv2.png/v1/fit/w_500,h_500,q_90/file.png" alt="" className='img-item'/>
          <span className='precio-item'>$160.000</span>
          <button className='btn-item' onClick={()=> addToCart({id: 1, name: 'BLEU DE CHANEL', price: 160000, img:'https://static.wixstatic.com/media/6ce809_6eb1461d66874538852a249887880b9f~mv2.png/v1/fit/w_500,h_500,q_90/file.png'})}>Agregar al carrito</button>
        </div>
        <div className="item">
          <span className='titulo-item'>N°5</span>
          <img src="https://media.vogue.mx/photos/62ed9e413608d67eb4fdc86e/1:1/w_2304,h_2304,c_limit/Chanel-No.5-perfume-para-mujer.png" alt="" className='img-item'/>
          <span className='precio-item'>$157.000</span>
          <button className='btn-item' onClick={()=> addToCart({id: 2, name: 'N°5', price: 157000, img:'https://media.vogue.mx/photos/62ed9e413608d67eb4fdc86e/1:1/w_2304,h_2304,c_limit/Chanel-No.5-perfume-para-mujer.png'})}>Agregar al carrito</button>
        </div>
        <div className="item">
          <span className='titulo-item'>COCO MADEMOISELLE</span>
          <img src="https://www.chanel.com/images//t_one/w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.2/w_620/coco-mademoiselle-eau-de-parfum-spray-3-4fl-oz--packshot-default-116520-9518352924702.jpg" alt="" className='img-item'/>
          <span className='precio-item'>$157.000</span>
          <button className='btn-item' onClick={()=> addToCart({id: 3, name: 'COCO MADEMOISELLE', price: 157000, img:'https://www.chanel.com/images//t_one/w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.2/w_620/coco-mademoiselle-eau-de-parfum-spray-3-4fl-oz--packshot-default-116520-9518352924702.jpg'})}>Agregar al carrito</button>
        </div>
        <div className="item">
          <span className='titulo-item'>GABRIELLE CHANEL</span>
          <img src="https://www.chanel.com/images//t_one/w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.2/w_620/gabrielle-chanel-essence-eau-de-parfum-spray-3-4fl-oz--packshot-default-120630-9518175879198.jpg" alt="" className='img-item'/>
          <span className='precio-item'>$157.000</span>
          <button className='btn-item' onClick={()=> addToCart({id: 4, name: 'GABRIELLE CHANEL', price: 157000, img:'https://www.chanel.com/images//t_one/w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.2/w_620/gabrielle-chanel-essence-eau-de-parfum-spray-3-4fl-oz--packshot-default-120630-9518175879198.jpg'})}>Agregar al carrito</button>
        </div>
        <div className="item">
          <span className='titulo-item'>DYLAN BLUE POUR</span>
          <img src="https://phantom-telva.unidadeditorial.es/505230cedd6d6d73734d021d605b213b/resize/640/assets/multimedia/imagenes/2016/12/27/14828401645834.png" alt="" className='img-item'/>
          <span className='precio-item'>$393.000</span>
          <button className='btn-item' onClick={()=> addToCart({id: 5, name: 'DYLAN BLUE POUR', price: 393000, img:'https://phantom-telva.unidadeditorial.es/505230cedd6d6d73734d021d605b213b/resize/640/assets/multimedia/imagenes/2016/12/27/14828401645834.png'})}>Agregar al carrito</button>
        </div>
        <div className="item">
          <span className='titulo-item'>EROS FLAME</span>
          <img src="https://cdn.shopify.com/s/files/1/0358/1155/7420/products/image_cd5bed9d-46a8-4a22-aa39-8ec581df04bb_700x.png?v=1588042843" alt="" className='img-item'/>
          <span className='precio-item'>$575.300</span>
          <button className='btn-item' onClick={()=> addToCart({id: 6, name: 'EROS FLAME', price: 575300, img:'https://cdn.shopify.com/s/files/1/0358/1155/7420/products/image_cd5bed9d-46a8-4a22-aa39-8ec581df04bb_700x.png?v=1588042843'})}>Agregar al carrito</button>
        </div>
        <div className="item">
          <span className='titulo-item'>EROS EDP</span>
          <img src="https://todoaplazo.com/images/products/3187eb18-8c3c-4c91-b3b2-cd75001ef5e7-PERFUMEH-144.png" alt="" className='img-item'/>
          <span className='precio-item'>$575.000</span>
          <button className='btn-item' onClick={()=> addToCart({id: 7, name: 'EROS EDP', price: 575000, img:'https://todoaplazo.com/images/products/3187eb18-8c3c-4c91-b3b2-cd75001ef5e7-PERFUMEH-144.png'})}>Agregar al carrito</button>
        </div>
        <div className="item">
          <span className='titulo-item'>SANTAL BOISÉ</span>
          <img src="https://www.wikiscents.com/uploads/14638.webp" alt="" className='img-item'/>
          <span className='precio-item'>$1.740.000</span>
          <button className='btn-item' onClick={()=> addToCart({id: 8, name: 'SANTAL BOISÉ', price: 1740000, img:'https://www.wikiscents.com/uploads/14638.webp'})}>Agregar al carrito</button>
        </div>
        <div className="item">
          <span className='titulo-item'>DIESEL</span>
          <img src="https://d1gpzof0viq1mp.cloudfront.net/products/0726202210292962df97d9b834c.png" alt="" className='img-item'/>
          <span className='precio-item'>$297.000</span>
          <button className='btn-item' onClick={()=> addToCart({id: 9, name: 'DIESEL', price: 297000, img:'https://d1gpzof0viq1mp.cloudfront.net/products/0726202210292962df97d9b834c.png'})}>Agregar al carrito</button>
        </div>
        <div className="item">
          <span className='titulo-item'>Nautica</span>
          <img src="https://tsirve.com/wp-content/uploads/2020/07/20152.png" alt="" className='img-item'/>
          <span className='precio-item'>$131.990</span>
          <button className='btn-item' onClick={()=> addToCart({id: 10, name: 'Nautica', price: 131990, img:'https://tsirve.com/wp-content/uploads/2020/07/20152.png'})}>Agregar al carrito</button>
        </div>
        <div className="item">
          <span className='titulo-item'>Al Haramain</span>
          <img src='https://d2r9epyceweg5n.cloudfront.net/stores/001/107/117/products/asperfumeria_alharamain_11-c54491caaa1bf2f46116200641709254-640-0.png' alt="olimpea" className='img-item'/>
          <span className='precio-item'>$418.000</span>
          <button className='btn-item' onClick={()=> addToCart({id: 11, name: 'Al Haramain', price: 418000, img:'https://d2r9epyceweg5n.cloudfront.net/stores/001/107/117/products/asperfumeria_alharamain_11-c54491caaa1bf2f46116200641709254-640-0.png'})}>Agregar al carrito</button>
        </div>
        <div className="item">
          <span className='titulo-item'>PURPLE DREAM</span>
          <img src="https://cdn.shopify.com/s/files/1/0477/7046/8511/products/Purpledreamsansfond_2400x.png?v=1654610334" alt="" className='img-item'/>
          <span className='precio-item'>$63.990</span>
          <button className='btn-item' onClick={()=> addToCart({id: 12, name: 'PURPLE DREAM', price: 63990, img:'https://cdn.shopify.com/s/files/1/0477/7046/8511/products/Purpledreamsansfond_2400x.png?v=1654610334'})}>Agregar al carrito</button>
        </div>
        
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
                <div className='a'>
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
                  <button className='btn-eliminar' onClick={()=> removeFromCart(item)}>
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