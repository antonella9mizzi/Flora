import React, { createContext, useState } from 'react';


export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItem] = useState([]);

    
    const addToCart = (itemDetail) => {
         setCartItem([...cartItems, itemDetail])
    }
    const removeItem = (itemDetail) => {
        const itemRemoved = cartItems.filter ((itemReceived) => itemReceived.id !== itemDetail.id);
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