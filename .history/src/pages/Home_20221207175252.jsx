import React from 'react';
import sz

export const Home  = () => {
      
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
          <Categories />
          <Sort />
        </div>
        <SearchBar />
        <h2 className="content__title">All Dresses</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : items.map((item) => <DressBlock key={item.id} {...item} />)}
        </div>
    </>
  )
}
