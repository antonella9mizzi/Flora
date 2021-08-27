import React, {useContext} from'react';
import { CartContext } from '../../../context/CartContext';
import { Link } from 'react-router-dom';
import CartCSS from './Cart.module.css'
import Form from './Form/Form';
const CartWidget = () => {

    const {cartItems,removeItem} = useContext(CartContext);
    const TotalPrice = cartItems.reduce((a,c)=>a + c.price * c.quantity,0);
    return (
        <div className={CartCSS.container}>
            {!cartItems.length
                ? <div className={CartCSS.container}>
                    <h2>No tienes productos en tu carrito</h2>
                    <Link to="/">
                        <button className={CartCSS.btn}>Volver al inicio</button>
                    </Link>
                </div>
                : 
                <div> 
                    {cartItems.map((itemReceived) => {
                        return (
                        <>
                            <div key={itemReceived.id} className={CartCSS.itemContainer}>
                                <img src={itemReceived.img} alt={itemReceived.name} className={CartCSS.itemImg}/>
                                <div className={CartCSS.texts}>
                                    <h2>{itemReceived.name}</h2>
                                    <p>{itemReceived.quantity} x ${itemReceived.price}</p> 
                                
                                </div>
                                <div onClick={()=>removeItem(itemReceived)} className={CartCSS.delete}>
                                    <img src="../../imgs/DeleteIcon.png" alt="Delete"/>
                                </div> 
                            </div>
                            <div>
                                <hr/>
                                <h2>Total a pagar: ${TotalPrice}</h2>
                                <Form cartItems={cartItems}/>
                            </div> 
                        </>
                    )}
                )}
            </div>
            }
        </div>
    )

};

export default CartWidget;