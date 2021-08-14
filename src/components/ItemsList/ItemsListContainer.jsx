import react, { useState } from'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemsList from './ItemsList';
import Items from './Items';
import ItemsCSS from './Items.module.css';
import { database } from '../../firebase/firebase';

const ItemsListContainer = (props) =>{

    const [productosMostrar, setProductosMostrar] = useState([]); // displayItems , setDisplayItems
    
    const GetItems = () => {
        const productos = database.collection("plantas")
        productos.get().then((query) => 
            setProductosMostrar(
            query.docs.map((doc) => {
                return { ...doc.data(), id: doc.id};
            })
        ));
    }

    return(
        <div>
            {GetItems()}
            {productosMostrar.length ? (
                productosMostrar.map((producto) => (
                    <Items producto={producto} key={producto.id}/>
                ))
            ):(
                <h3>Cargando</h3>
            )}
        </div>
    )
};
export default ItemsListContainer;