import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import Home from './pages/Home';
import SingleDrink from './pages/SingleDrink';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='cocktail/:id' element={<SingleDrink />} />
      </Routes>
    </Router>
  );
}

export default App;