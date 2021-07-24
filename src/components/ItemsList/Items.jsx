import react from 'react';
import ItemsCSS from './Items.module.css';
import {Link} from 'react-router-dom';

const Items = ({Item}) => {
    return(
        <div className={ItemsCSS.divBox}>
            <h3>{Item.name}</h3>
            <img src={Item.img} alt={Item.name} className={ItemsCSS.imgItems}/>
            <div>
                <div className={ItemsCSS.infoBox}>
                    <p className={ItemsCSS.price}>${Item.price}</p>
                    <Link to={"/items/" + Item.id}  >
                        <button className={ItemsCSS.infoBtn}>+INFO</button>
                    </Link>
                </div>
            </div>
        </div>
)   
}
export default Items;