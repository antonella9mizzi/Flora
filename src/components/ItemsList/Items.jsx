import react from 'react';
import ItemsCSS from './Items.module.css';
import {Link} from 'react-router-dom';

const Items = ({producto}) => {
    return(
        <div className={ItemsCSS.divBox}>
            <h3>{producto.name}</h3>
            <img src={producto.img} alt={producto.name} className={ItemsCSS.imgItems}/>
            <div>
                <div className={ItemsCSS.infoBox}>
                    <p className={ItemsCSS.price}>${producto.price}</p>
                    <Link to={"/items/" + producto.id}  >
                        <button className={ItemsCSS.infoBtn}>+INFO</button>
                    </Link>
                </div>
            </div>
        </div>
)   
}
export default Items;