import react, { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemsDetailCSS from './ItemsDetail.module.css';
import {Link} from 'react-router-dom';
// import { CartContext } from './../../context/CartContext'

const ItemDetail = ({itemDetail}) =>{

const [count, setCount] = useState(1);
const [finished, setFinished] = useState(false);
const handleState = () => setFinished(!finished);
  return(
        <div className={ItemsDetailCSS.display}>
            <div className={ItemsDetailCSS.divBox}>
                <div>
                    <h2>{itemDetail.name}</h2>
                </div>
                <img src={itemDetail.img} alt={itemDetail.name}/>
                <div> 
                    <p className={ItemsDetailCSS.price}>${itemDetail.price}</p>
                    {!finished ? (
                      <div>
                        <ItemCount initial="1" stock={itemDetail.stock} count={count} setCount={setCount}/>
                        <button onClick={handleState} className={ItemsDetailCSS.buy}>Comprar</button>
                      </div>
                    ):(
                      <div className={ItemsDetailCSS.finishedBox}>
                        <Link to="/cart" onClick={handleState}>
                          <button onClick={handleState} className={ItemsDetailCSS.finish}>Finalizar compra</button>
                        </Link>
                        <button onClick={handleState} className={ItemsDetailCSS.modify}>Modificar</button>
                      </div>
                    )}   
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