import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import ItemsDetailCSS from './ItemsDetail.module.css';
import {Link} from 'react-router-dom';


const ItemDetail = ({itemDetail}) =>{
  const {addToCart, removeItem} = useContext(CartContext);
  const [count, setCount] = useState(1);
  const [finished, setFinished] = useState(false);
  const handleState = () => setFinished(!finished);
  const sendToCart = () =>{
    addToCart({...itemDetail, quantity: count});
  }
  const removeFromCart = () => {
    removeItem(itemDetail)
  }
  return(
        <div className={ItemsDetailCSS.display}>
            <div className={ItemsDetailCSS.divBox}>
                <div>
                    <h2>{itemDetail.name}</h2>
                </div>
                <img src={itemDetail.img} alt={itemDetail.name}/>
                <div> 
                    <p className={ItemsDetailCSS.price}>${itemDetail.price}</p>
                    {!finished ? (
                      <div>
                        <ItemCount initial="1" stock={itemDetail.stock} count={count} setCount={setCount}/>
                        <button onClick={()=>{
                          handleState();
                          sendToCart();}} className={ItemsDetailCSS.buy}>
                          Comprar
                        </button>
                      </div>
                    ):(
                      <div className={ItemsDetailCSS.finishedBox}>
                        <Link to="/cart" onClick={handleState}>
                          <button onClick={handleState} className={ItemsDetailCSS.finish}>Finalizar compra</button>
                        </Link>
                        <button onClick={ () =>{
                          handleState() 
                          removeFromCart()}} 
                          className={ItemsDetailCSS.modify}>Modificar</button>
                      </div>
                    )}   
                </div>
            </div>
            <div className={ItemsDetailCSS.descriptionBox}>
                <h2>Descripcion</h2> <hr />
                <p>{itemDetail.description}</p>
                <Link to="/"> <h4>Volver al inicio →</h4></Link>
            </div>
        </div>
    )
}

export default ItemDetail;