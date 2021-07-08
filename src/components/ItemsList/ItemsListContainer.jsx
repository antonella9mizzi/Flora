import react from'react';
import ItemCount from '../ItemCount/ItemCount'


const ItemsListContainer = (props) =>{
    return(
        <div>
            <h1>{props.greeting}</h1>
            <ItemCount initial="0" stock="5"/>
        </div>
        
    )
};
export default ItemsListContainer;