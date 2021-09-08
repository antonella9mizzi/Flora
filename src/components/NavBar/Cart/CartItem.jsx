
import React, {useContext} from 'react';
import { CartContext } from '../../../context/CartContext';
import CartCSS from './Cart.module.css';

 const  CartItem = ({itemReceived}) => {
    
    const {removeItem} = useContext(CartContext)
    
    function deleteItem(){
        removeItem(itemReceived);
    }
    
    return(<div className='cart-item'>
                <div key={itemReceived.id} className={CartCSS.itemContainer}>
                    <img src={itemReceived.img} alt={itemReceived.name} className={CartCSS.itemImg}/>
                        <div className={CartCSS.texts}>
                            <h2>{itemReceived.name}</h2>
                            <h5>Total: ${(itemReceived.quantity)*(itemReceived.price)} </h5>
                        </div>            
                        <div onClick={deleteItem} className={CartCSS.delete}>
                            <img src="../../imgs/DeleteIcon.png" alt="Delete"/>
                        </div> 
                </div>
            </div>)
}
export default CartItem;