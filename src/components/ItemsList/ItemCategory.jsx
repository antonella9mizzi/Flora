import React,{useState, useEffect} from "react";
import { useParams } from "react-router";
import Items from "./Items";
import { database } from "../../firebase/firebase";
import ItemsCSS from './Items.module.css';


const ItemCategory = () =>{
    const {id: idParams} = useParams();
    const [name, setName] = useState('');
    const [load, setLoad] = useState(false);
    const [category, setCategory] = useState([]);
   
    
    function nameCategory(id){
        if(id === '1'){
        console.log('hola')
         setName('Plantas')
        } else if( id === '2'){
           setName('Flores')
        } else if(id === '3'){
            setName('Arboles');
        }
    }

    useEffect(()=>{
        handlercategory();
        nameCategory(idParams);
    },[idParams]);

    function handlercategory(){
        getList(idParams);
    }

    const getList = async (id)=>{
        const productList = await database.collection('plantas');
        const list = await productList.get();
        const itemsCat = list.docs.map((doc) => {return {...doc.data()}});
        const productos = itemsCat.filter(producto =>
            producto.category === parseInt(idParams));
        setCategory(productos);   
        setLoad(true);   
    }

    return (
        <div >
            <h3>{name}</h3>
            <div className={ItemsCSS.displayItems}>                
                { load ?
                category.map(
                    producto => (
                        <Items producto={producto} key={producto.id}/>)
                 ) : <h5>cargando</h5>
                }
            </div>
        </div>
    )
};

export default ItemCategory;