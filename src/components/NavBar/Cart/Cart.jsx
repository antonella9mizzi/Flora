import {React, useContext} from "react";
import { Link } from "react-router-dom";
import CartIMG from "../../../img/cart.png";
import { CartContext } from "../../../context/CartContext";

const Cart = () => {
    const cartItems = useContext(CartContext)

    return(
        <>
        <Link to= "/cart"><img src={CartIMG} alt="cart"/></Link>
        {cartItems.length > 0 && <p>{cartItems.length}</p>}
        </>
    
    );
};
export default Cart;