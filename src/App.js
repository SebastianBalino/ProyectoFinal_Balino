import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className='App'>
      <header className="App-header">
        <Navbar />       
        <ItemListContainer greeting='Bienvenidos a la tienda deportiva'/>       
      </header>
    </div>
    
  );
}


export default App;
