import React from 'react';
import ItemCountCSS from './ItemCount.module.css';
// import ItemDetail from '../ItemsDetail/ItemDetail';

const ItemCount = ({stock, initial, onAdd, count, setCount}) => {
    let min = 0;
    let max = (stock-1);

    // const[count, setCount] = useState(parseInt(initial));

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
        <div>
            <div className={ItemCountCSS.btnBox}>
                <button onClick={decrease} className={ItemCountCSS.btnSubtract}>-</button>
                <h2 className={ItemCountCSS.btnNum}>{count}</h2>
                <button onClick={increase} className={ItemCountCSS.btnAdd}>+</button>  
            </div>
        </div>
        
    )
}
export default ItemCount;