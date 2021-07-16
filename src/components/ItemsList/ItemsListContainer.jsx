import react, { useState } from'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemsList from './ItemsList';
import Items from './Items';
import ItemsCSS from './Items.module.css';

const ItemsListContainer = (props) =>{

    const [displayItems, setDisplayItems] = useState([])
    const GetItems = () => {return new Promise ((resolve) =>{
        setTimeout(()=>{
            resolve(ArrayItems)
        },2000)
    })}
    GetItems().then((resolve)=>setDisplayItems(ArrayItems))
    
    const ArrayItems = [
        {
            id: 1,
            name:"Planta random",
            price:200,
            category: 1,
            img: "../imgs/plant.png",
            stock: 10,
        },
        {
            id: 2,
            name:"Orquidea",
            price:450,
            category: 2,
            img: "../imgs/orchid.png",
            stock: 5,
        },
        {
            id: 3,
            name:"Cala",
            price:350,
            category: 2,
            img: "../imgs/cala.png",
            stock: 8,
        }
    ];
    const ReturnItems = () =>{
        return(
            <div className={ItemsCSS.displayItems}>
            {displayItems.map(Item =>(
                <Items Item={Item} key={Item.id}/> ))
            } 
            </div>
        )
    }
    /*ejecucion*/
    return(
        <div>
            <h1>{props.greeting}</h1>
            <ReturnItems/>
        </div>
    )
};
export default ItemsListContainer;