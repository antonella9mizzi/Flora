import React, { useState, useEffect } from 'react';
import Items from './Items';
import  ItemsCSS from './Items.module.css';
import { database } from '../../firebase/firebase';
import { useParams } from "react-router-dom";

const ItemsList = () =>{
    const [itemListState, setItemListState] = useState([]);
    const [load, setLoad] = useState(false);

    const obtenerLista = ()=> {
        const listaProductos = database.collection('plantas');
            
        listaProductos.get().then((query) => setItemListState(query.docs.map((doc) => {
            setLoad(true);
            return {...doc.data(), id: doc.id}         
        })))       
    }
    useEffect(()=>{
    obtenerLista();
    },[]);

return(
 
    <div className={ItemsCSS.displayItems}>
        {load ? itemListState.map(
                 producto => (
                    <Items producto={producto} key={producto.id} />
                )
          ):  <h5>Cargando...</h5> }           
    </div>
 
)
}
export default ItemsList;