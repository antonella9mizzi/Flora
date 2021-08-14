import react from "react";
import firebase from "firebase/app";
import { database } from "../../../../firebase/firebase";


const Form = (cartItems, TotalPrice) =>{
    const EndTransaction = (event) =>{
        event.preventDefault();

        const buyerData = {
            name : event.target.name.value,
            phone : event.target.phone.value,
            email :  event.target.email.value,
          };       
        
        const FinishOrder = {
            buyer: buyerData,
            items: cartItems,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: TotalPrice,
          };

        const db = database;
        db.collection("orders").add(FinishOrder).then(({ id }) => {
            alert("Orden realizada con exito! \n ID: " + id);
          });
        }
        return(
            <form onSubmit={EndTransaction}>                    
                <input type="text" placeholder="Name" id="name"/>
                <input type="tel"  placeholder="Phone" id="phone"/>
                <input type="email"  placeholder="Email" id="email"/>
                <button type="submit">Salir y Pagar</button>
            </form>
        )


};

 export default Form;