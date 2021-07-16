import react from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({itemDetail}) =>{
    return(
        <div>
            <img src={itemDetail.img} alt={itemDetail.name}/>
            <div>
                <h3>{itemDetail.name}</h3>
                <h4>Esto es una {itemDetail.name}</h4>
                <p>
                    Precio: {itemDetail.price}
                </p>
                <ItemCount initial="0" stock={itemDetail.stock}/>
            </div>
            
        </div>
    )
}

export default ItemDetail;