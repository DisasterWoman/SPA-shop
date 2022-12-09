import React from 'react';
import axios from 'axios';
import Categories from '../components/Categories/Categories';
import Sort from '../components/Sort/Sort';
import SearchBar from '../components/SearchBar/SearchBar';
import DressBlock from '../components/DressBlock/DressBlock';
import Skeleton from '../components/DressBlock/Skeleton';

const Home  = () => {
      
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
      axios.get('https://638caec6eafd555746abf518.mockapi.io/items').then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
    }, []);
    
  return (
    <>
        <div className="content__top">
          <Categories/>
          <Sort/>
        </div>
        <SearchBar/>
        <h2 className="content__title">All Dresses</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : items.map((item) => <DressBlock key={item.id} {...item} />)}
        </div>
    </>
  )
}
ex