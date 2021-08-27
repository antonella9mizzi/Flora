import React, { useState, useEffect } from'react';
import Items from './Items';
import  ItemsCSS from './Items.module.css';
import { database } from '../../firebase/firebase';
import { useParams } from "react-router-dom";


const ItemsListContainer = () =>{

    const [productosMostrar, setProductosMostrar] = useState([]); 
    const {categoryId} = useParams();

    useEffect(() => {
        setProductosMostrar([]);
        const productos = database.collection("plantas");

        if (categoryId) {
        productos
            .where("categoria", "==", categoryId)
            .get()
            .then((query) =>
            setProductosMostrar(
                query.docs.map((doc) => {
                return { ...doc.data(), id: doc.id };
                })
            )
            );
        } else {
        productos.get().then((query) =>
            setProductosMostrar(
            query.docs.map((doc) => {
                return { ...doc.data(), id: doc.id };
            })
            )
        );
        }
    }, [categoryId]);
    
    // const GetItems = () => {
    //     const productos = database.collection("plantas")
    //     productos.get().then((query) => 
    //         setProductosMostrar(
    //         query.docs.map((doc) => {
    //             return { ...doc.data(), id: doc.id};
    //         })
    //     ));
    // }
    return(       
        <div className={ItemsCSS.displayItems}>
           <div>
            {/* {GetItems()} */}
            </div>
            {productosMostrar.map((producto) => (
             <div>
                <Items producto={producto} key={producto.id}/>
            </div>            
            ))}       
        </div>     
    )
};
export default ItemsListContainer;