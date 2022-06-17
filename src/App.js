import './App.css';
import { Routes, Route } from 'react-router';
import AllBeers from './Components/AllBeers';
import NewBeer from './Components/NewBeer';
import RandomBeer from './Components/RandomBeer';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/beers' element={<AllBeers />} />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/new-beer' element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
