import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { database } from '../../firebase/firebase';
import ItemDetail from '../ItemsDetail/ItemDetail';

const ItemsDetailContainer = () => {
  const { id } = useParams();
  const [itemDetail, setItemDetail] = useState({});

  useEffect(() => {
    setItemDetail({});
    const itemCollection = database.collection("plantas").doc(id);

    itemCollection.get().then((response) => {
      setItemDetail({ ...response.data(), id: response.id });
    });
  }, [id]);

  return (Object.entries(itemDetail).length === 0)
    ? <h3>Cargando...</h3>
    : <ItemDetail itemDetail={itemDetail} key={itemDetail.id} />;
}



export default ItemsDetailContainer;