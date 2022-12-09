import './scss/app.scss';
import Header from './components/Header/Header';
import React from 'react';
import { Home } from './pages/Home';
import NotFound from './pages/NotFound';
function App() {

return (
  <div className="wrapper">
    <Header />
    <div className="content">
      <div className="container">
      <Home/>
      <NotFound/>
      </div>
    </div>
  </div>
);
}

export default App;
