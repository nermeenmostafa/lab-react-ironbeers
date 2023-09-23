import './App.css';
import { Routes, Route, NavLink } from "react-router-dom";
import React from 'react';

import Home from './pages/Home';
import Beers from './pages/Beers';
import RandomBeer from './pages/RandomBeer'
import NewBeer from './pages/NewBeer';
import SingleBeer from './pages/SingleBeer'




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/beers' element={<Beers />} />
        <Route path='/new-beer' element={<NewBeer />} />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/beers/:id' element={<SingleBeer/>}/>
      </Routes>
    </div>
  );
}

export default App;
