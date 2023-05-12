import './App.css';
import PokeList from './components/PokeList';

//Initialize first configuration
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PokeInfo from './pages/PokeInfo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PokeList/>}></Route>
          <Route path='/pokemons/:id' element={<PokeInfo/>}></Route>
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
