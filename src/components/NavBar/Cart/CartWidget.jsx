import React, {useContext} from'react';
import { CartContext } from '../../../context/CartContext';
import { Link } from 'react-router-dom';
import CartCSS from './Cart.module.css'
import CartItem from './CartItem';
import Form from './Form/Form';

const CartWidget = () => {

    const {cartItems, cleanCart, totalPrice, removeItem} = useContext(CartContext);

    return (
        <div className={CartCSS.container}>
            {cartItems.length > 0
                ? <div className={CartCSS.container}>
                    <h2>Tienes {cartItems.length} producto/s en tu carrito</h2>
                    <div>
                        {cartItems.map(itemReceived => <CartItem itemReceived={itemReceived} key={itemReceived.id} removeItem={removeItem}/> )} 
                    </div> 
                    <h3>Total a pagar: ${totalPrice}</h3>
                    <button onClick={cleanCart} className={CartCSS.btn}>Vaciar Carrito</button>  
                    <Form cartItems={cartItems}/>        
                </div>
                :
                <div>
                    <h2>No tienes productos en tu carrito</h2>
                    <Link to="/">
                        <button className={CartCSS.btn}>Volver al inicio</button>
                    </Link>
                </div>
            }
        </div>
    )

};

export default CartWidget;