import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemsListContainer from './components/ItemsList/ItemsListContainer';



function App() {
  const [counterNum, setCounterNum] = useState(0);
  const handleCounter1 = () =>{
    setCounterNum(counterNum + 1)
 }
  const handleCounter2 = () =>{
    setCounterNum(counterNum - 1)
  }

  return (
    <div className="App">
      <NavBar nombreDeLaTienda="Flora" subtitulo="store"/>
      <ItemsListContainer greeting="Welcome back!"/>     
      
    </div>
  );
}

export default App;
