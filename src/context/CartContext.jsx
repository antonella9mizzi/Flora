import React, { createContext, useState } from 'react';


export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItem] = useState([]);

    
    const addToCart = (itemReceived) => {
         setCartItem([...cartItems, itemReceived])
    }
    const removeItem = (itemReceived) => {
        let itemRemoved = cartItems.filter (itemDetail => itemDetail.id !== itemReceived.id);
        setCartItem(itemRemoved)
    }
    const cleanCart = () => setCartItem([]);
    
    const totalPrice = cartItems.reduce((acc,{quantity,price}) => {
        return acc = acc + (price*quantity);
    },0);

    return <CartContext.Provider value={{cartItems, setCartItem, addToCart, removeItem, cleanCart, totalPrice}}>
        {children}
    </CartContext.Provider>
}