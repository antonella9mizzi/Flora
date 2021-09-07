import React, {useContext} from'react';
import { CartContext } from '../../../context/CartContext';
import { Link } from 'react-router-dom';
import CartCSS from './Cart.module.css'
import CartItem from './CartItem';
import Form from './Form/Form';

const CartWidget = () => {

    const {cartItems, cleanCart, totalPrice} = useContext(CartContext);
    const costo = cartItems.map(item => item.precio * item.cantidad);
    

    return (
        <div className={CartCSS.container}>
            {cartItems.length > 0
                ? <div className={CartCSS.container}>
                    <h2>Tienes {cartItems.length} productos en tu carrito</h2>
                    <div>
                        {cartItems.map(itemReceived => <CartItem itemReceived={itemReceived} key={itemReceived.id}/> )} 
                    </div> 
                    <div>
                        <h5>Total ${totalPrice}</h5>
                    </div>
                    <div>
                        <button onClick={cleanCart}>Vaciar Carrito</button>                
                    </div>
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