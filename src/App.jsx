import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ItemsListContainer from './components/ItemsList/ItemsListContainer';
import ItemsDetailContainer from './components/ItemsDetail/ItemsDetailContainer'
import { CartProvider } from './context/CartContext';
import CartWidget from './components/NavBar/Cart/CartWidget';
import ItemCategory from './components/ItemsList/ItemCategory';



function App() {

  return (
    <CartProvider>
      <BrowserRouter className="App">
        <div> 
          <NavBar nombreDeLaTienda="Flora" subtitulo="store"/>
        </div>
        
        <Switch>
          <Route exact path="/cart">
            <CartWidget/>
          </Route>
          <Route path='/categoria/:id'>
            <ItemCategory/>
         </Route>
          <Route exact path="/">
          <ItemsListContainer greeting="Welcome back!"/>
          </Route>
          <Route path="/items/:id">
            <ItemsDetailContainer/>
          </Route>
            
        </Switch>
         
      
      </BrowserRouter>
    </CartProvider>
    
  );
}

export default App;
