import './scss/app.scss';
import Header from './components/Header/Header';
import React from 'react';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import { Routes, Route } from 'react-router-dom';

export const GlobalContext = React.createContext({});
function App() {
  const [searchValue, setSearchValue] = React.useState('');
  return (
    <GlobalContext.Provider value={{ searchValue, setSearchValue }}>
      <div className="wrapper">
        <Header />
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
    </GlobalContext.Provider>
  );
}

export default App;
