import react, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ItemDetail from '../ItemsDetail/ItemDetail';

const ItemsDetailContainer = () => {

    const { id:idParams } = useParams();
    const [itemDetail, setItemDetail] = useState();

    const ArrayItems = [
        {
            id: 1,
            name:"Planta random",
            price:200,
            category: 1,
            img: "../imgs/plant.png",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lectus lorem, molestie eget nulla sit amet, congue congue mi. Sed iaculis ultricies arcu, at tempor dolor placerat euismod. Ut tincidunt pellentesque lacinia. Vestibulum id tellus quis urna tempus cursus eleifend ac lectus.",
            stock: 10,
        },
        {
            id: 2,
            name:"Orquidea",
            price:450,
            category: 2,
            img: "../imgs/orchid.png",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lectus lorem, molestie eget nulla sit amet, congue congue mi. Sed iaculis ultricies arcu, at tempor dolor placerat euismod. Ut tincidunt pellentesque lacinia. Vestibulum id tellus quis urna tempus cursus eleifend ac lectus.",
            stock: 5,
        },
        {
            id: 3,
            name:"Cala",
            price:350,
            category: 2,
            img: "../imgs/cala.png",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lectus lorem, molestie eget nulla sit amet, congue congue mi. Sed iaculis ultricies arcu, at tempor dolor placerat euismod. Ut tincidunt pellentesque lacinia. Vestibulum id tellus quis urna tempus cursus eleifend ac lectus.",
            stock: 8,
        }
    ];

    const GetItemDetail = () => {
        return new Promise ((resolve)=>{
            setTimeout(()=>{
                resolve(ArrayItems.find((item)=>item.id.toString()===idParams))
            },2000)
        })
    }

    useEffect(
        ()=> {
            setItemDetail();
            GetItemDetail().then((resolve)=>setItemDetail(resolve))
        },
        [idParams]
    )

    const ReturnItemDetail = () =>{
        if (!itemDetail) {
            return <p>Cargando...</p>;
          }
        return <ItemDetail itemDetail={itemDetail} />;
    }

    return(
        <div>
             <ReturnItemDetail/>
        </div>
    )
}

export default ItemsDetailContainer;