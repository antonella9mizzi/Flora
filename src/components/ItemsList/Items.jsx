import react from 'react';
import ItemsCSS from './Items.module.css';
import ItemCount from '../ItemCount/ItemCount';

const Items = ({Item}) => {
return(
    <div>
        <img src={Item.img} alt={Item.name} className={ItemsCSS.imgItems}/>
        <div>
            <h3>{Item.name}</h3>
            <p>
                Precio: {Item.price}
            </p>
            <ItemCount initial="0" stock={Item.stock}/>
        </div>
    </div>
)   

}
export default Items;