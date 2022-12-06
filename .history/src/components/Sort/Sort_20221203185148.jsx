import React, {useState} from 'react';
import './_sort.scss';

function Sort() {
  const [sortActive, setSortActive] = useState(0);
  const [isVisiblePop, setIsVisiblePop] = useState(false);
  const onSortClick = (index) => {
    setSortActive(index)
  }

  const onClickPop = () => {
    setIsVisiblePop(!isVisiblePop);
  }
const sortCats = ['orders', 'price', 'rewiews'];
console.log(sortCats)
  return (
    <div className="sort">
      <div className="sort__label">
      <div className="sort__triangleWrap"></div>
        <b>Sort by:</b>
        <span></span>
      </div>
      <div className="sort__popup">
        {isVisiblePop ? (
          <ul>
            {sortCats.map((value, index) => (
              <li
                key={index}
                onClick={() => onSortClick(index)}
                className={sortActive === index ? 'active' : ''}
              >
                {value}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
export default Sort;
