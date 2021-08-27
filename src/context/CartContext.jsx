import React, { createContext, useState } from 'react';


export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItem] = useState([]);

    const notInCart = (itemReceived)  => cartItems.filter(itemDetail => itemDetail.id === itemReceived.id).length === 0; //Si esto es true entonces item no esta en el carrito
    const addToCart = (itemReceived) => {
        if (notInCart(itemReceived)){
            setCartItem([...cartItems, itemReceived])
        } else{
            alert("Ya agregaste este producto a tu carrito")
        }
    }
    const removeItem = (itemReceived) => {
        let itemsExceptRemoved = cartItems.filter (itemDetail => itemDetail.id !== itemReceived.id);
        setCartItem(itemsExceptRemoved)
    }
    const CleanCart = () => setCartItem([]);

    return <CartContext.Provider value={{cartItems, setCartItem, addToCart, removeItem, CleanCart}}>
        {children}
    </CartContext.Provider>
}