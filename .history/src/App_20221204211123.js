import './scss/app.scss';
import Categories from './components/Categories/Categories';
import DressBlock from './components/DressBlock/DressBlock';
import Header from './components/Header/Header';
import Sort from './components/Sort/Sort';
import SearchBar from './components/SearchBar/SearchBar';
import React from 'react';
import axios from 'axios';
function App() {
    const [items, setItems] = React.useState([]);
    React.useEffect(() => {
      axios.get('https://638caec6eafd555746abf518.mockapi.io/items').then((res) => {
        setItems(res);
      });
    }, []);

return (   

    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <SearchBar />
          <h2 className="content__title">All Dresses</h2>
          <div className="content__items">
          {items.map((item) => {})}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;