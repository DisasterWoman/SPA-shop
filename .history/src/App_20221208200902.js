import './scss/app.scss';
import Header from './components/Header/Header';
import React from 'react';
import Home  from './pages/Home';
import Favorites from './pages/';
import NotFound from './pages/NotFound';
import {Routes, Route } from 'react-router-dom';

function App() {

return (
  <div className="wrapper">
    <Header />
    <div className="content">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites/>} />
          <Route path="/not-found" element={<NotFound/>} />
        </Routes>
      </div>
    </div>
  </div>
);
}

export default App;
