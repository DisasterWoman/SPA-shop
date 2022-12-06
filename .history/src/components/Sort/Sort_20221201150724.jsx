import React, {useState} from 'react';
import './_sort.scss';

function Sort() {
  const [sortActive, setSortActive] = useState(0);
  
  return (
    <div className="sort">
      <div className="sort__label">
        <img
          className="sort-triangle"
          src="/images/icons/triangle-top-icon.svg"
          alt="triangle"
          width="10"
          viewBox="0 0 10 6"
          height="6"
        ></img>
        <b>Sort by:</b>
        <span>популярности</span>
      </div>
      <div className="sort__popup">
        <ul>
          <li className="active">популярности</li>
          <li>цене</li>
          <li>алфавиту</li>
        </ul>
      </div>
    </div>
  );
}

export default Sort;
