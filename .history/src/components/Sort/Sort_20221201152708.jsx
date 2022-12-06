import React, {useState} from 'react';
import './_sort.scss';

function Sort() {
  const [sortActive, setSortActive] = useState(0);

  const onSortClick = (index) => {
    setSortActive(index)
  }
const sortCats = ['orders', 'price', 'rewiews'];

  return (
    <div className="sort">
      <div className="sort__label">
        <img
          className="sort-triangle"
          src="/images/icons/triangle-top-icon.svg"
          alt="triangle"
          width="10"
          height="6"
        ></img>
        <b>Sort by:</b>
        <span>orders</span>
      </div>
      <div className="sort__popup">
        <ul>
        {sortCats.map((value, index) => (
           <li onC className="active">{value}</li>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default Sort;
  //         <li>price</li>
  //         <li>reviews</li>