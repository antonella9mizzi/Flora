import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ItemsListContainer from './components/ItemsList/ItemsListContainer';
import ItemsDetailContainer from './components/ItemsDetail/ItemsDetailContainer'
import { CartProvider } from './context/CartContext';
import CartWidget from './components/NavBar/Cart/CartWidget';



function App() {

  return (
    <CartProvider>
      <BrowserRouter className="App">
        <NavBar nombreDeLaTienda="Flora" subtitulo="store"/>
        <Switch>
          <Route exact path="/cart">
            <CartWidget/>
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
