import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { database } from '../../firebase/firebase';
import ItemDetail from '../ItemsDetail/ItemDetail';

const ItemsDetailContainer = () => {
    const { id } = useParams();
    const [itemDetail, setItemDetail] = useState();

  useEffect(() => {
    const db = database;
    const itemCollection = db.collection("plantas");
    const idItem = itemCollection.doc(id);

    idItem.get().then((response) => {
      setItemDetail(response.data());
    });
  }, [id]);

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