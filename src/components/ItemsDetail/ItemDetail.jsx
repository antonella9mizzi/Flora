import react from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemsDetailCSS from './ItemsDetail.module.css';
const ItemDetail = ({itemDetail}) =>{
    return(
        <div className={ItemsDetailCSS.display}>
            <div className={ItemsDetailCSS.divBox}>
                <div>
                    <h2>{itemDetail.name}</h2>
                </div>
                <img src={itemDetail.img} alt={itemDetail.name}/>
                <div className={ItemsDetailCSS.price}> 
                    <p>${itemDetail.price}</p>
                    <ItemCount initial="0" stock={itemDetail.stock}/>
                </div>
            </div>
            <div className={ItemsDetailCSS.descriptionBox}>
                <h2>Descripcion</h2>
                <p>{itemDetail.description}</p>
            </div>
        </div>
    )
}

export default ItemDetail;