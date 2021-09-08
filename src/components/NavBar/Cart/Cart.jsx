import {React, useContext} from "react";
import { Link } from "react-router-dom";
import CartIMG from "../../../img/shoppingCart.png";
import { CartContext } from "../../../context/CartContext";
import CartCSS from './Cart.module.css'

const Cart = () => {
    
    const {cartItems} = useContext(CartContext)

    return(
        <>
            <Link to= "/cart">
                <div className={CartCSS.cartWidgetDisplay}>
                    <button  className={CartCSS.cartBtn}>
                        <img src={CartIMG} alt="cart" className={CartCSS.shoppingCart}/>
                    </button>
                    <div>
                        {cartItems.length > 0 && (
                            <div className={CartCSS.cartWidget}>
                                <p>{cartItems.length}</p>
                            </div>
                        )}
                    </div>  
                </div>
                
            </Link>
        </>
    
    );
};
export default Cart;