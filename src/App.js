import './scss/app.scss';
import Header from './components/Header/Header';
import React from 'react';
import Home  from './pages/Home';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import {Routes, Route } from 'react-router-dom';

function App() {
const [searchValue, setSearhValue] = React.useState('');
return (
  <div className="wrapper">
    <Header searchValue={searchValue} setSearhValue={setSearhValue} />
    <div className="content">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home searchValue={searchValue} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  </div>
);
}

export default App;
