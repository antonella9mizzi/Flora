import react from 'react';
import ItemsCSS from './Items.module.css';
import ItemCount from '../ItemCount/ItemCount';

const Items = ({Item}) => {
const LinkTo = "/items/"  + Item.id;
    return(
        <div className={ItemsCSS.divBox}>
            <h3>{Item.name}</h3>
            <img src={Item.img} alt={Item.name} className={ItemsCSS.imgItems}/>
            <div>
                <div className={ItemsCSS.infoBox}>
                    <p className={ItemsCSS.price}>${Item.price}</p>
                    <a href={LinkTo}>
                        <button className={ItemsCSS.infoBtn}>+INFO</button>
                    </a>
                </div>
                <ItemCount initial="0" stock={Item.stock}/> 
            </div>
        </div>
)   

}
export default Items;