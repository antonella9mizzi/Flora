import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ItemsListContainer from './components/ItemsList/ItemsListContainer';
import ItemsDetailContainer from './components/ItemsDetail/ItemsDetailContainer'



function App() {
  const [counterNum, setCounterNum] = useState(0);
  const handleCounter1 = () =>{
    setCounterNum(counterNum + 1)
 }
  const handleCounter2 = () =>{
    setCounterNum(counterNum - 1)
  }

  return (
    <BrowserRouter className="App">
      <NavBar nombreDeLaTienda="Flora" subtitulo="store"/>
      <Switch>
        <Route exact path="/">
          <ItemsListContainer greeting="Welcome back!"/>
        </Route>
        <Route path="/items/:id">
          <ItemsDetailContainer/>
        </Route>
          
      </Switch>
         
      
    </BrowserRouter>
  );
}

export default App;
