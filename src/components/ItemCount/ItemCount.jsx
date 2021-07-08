import react, { useState } from 'react';
import ItemCountCSS from './ItemCount.module.css';

const ItemCount = ({stock, initial}) => {
    let min = 0;
    let max = (stock-1);

    const[count, setCount]=useState(parseInt(initial));

    const decrease = () =>{
        if (count === min)
            return;
            setCount(count - 1);
    };

    const increase = () => {
        if (count > max)
            return;
            setCount(count + 1);
    }

    return(
        <div className={ItemCountCSS.counterContainer}>
            <button onClick={decrease} className={ItemCountCSS.counterBtn}>-</button>
            <h2>{count}</h2>
            <button onClick={increase} className={ItemCountCSS.counterBtn}>+</button>  
        </div>
    )
}
export default ItemCount;