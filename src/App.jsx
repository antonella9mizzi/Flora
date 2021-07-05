import NavBar from './components/NavBar/NavBar';
import ItemsListContainer from './components/ItemsList/ItemsListContainer';

function App() {
  return (
    <div className="App">
      <NavBar nombreDeLaTienda="Flora" subtitulo="store"/>
      <ItemsListContainer greeting="Welcome back!"/>
    </div>
  );
}

export default App;
