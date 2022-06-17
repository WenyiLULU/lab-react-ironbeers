import './App.css';
import { Routes, Route } from 'react-router';
import AllBeers from './Components/AllBeers';
import NewBeer from './Components/NewBeer';
import RandomBeer from './Components/RandomBeer';
import Home from './Components/Home';
import BeerDetails from './Components/BeerDetails';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/beers' element={<AllBeers />} />
        <Route path='/beers/:beer_id' element={<BeerDetails />} />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/new-beer' element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
