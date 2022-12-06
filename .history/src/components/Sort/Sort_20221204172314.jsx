import React, {useState} from 'react';
import './_sort.scss';

function Sort() {
  const [sortActive, setSortActive] = useState(0);
  const [isVisiblePop, setIsVisiblePop] = useState(false);
  const sortCats = ['orders', 'price', 'rewiews'];
  const sortName = sortCats[sortActive];

  const onSortClick = (index) => {
    setSortActive(index);
    setIsVisiblePop(false);
  };

  const onClickPop = () => {
    setIsVisiblePop(!isVisiblePop);
  };

  return (
    <div className="sort">
      <div className="sort__label" onClick={() => onClickPop()}>
        <div className="sort__triangleWrap">
          <img
            className="sort__triangle"
            src="/images/icons/triangle-top-icon.svg"
            alt="triangle"
            width="10"
            height="6"
          ></img>
        </div>
        <b>Sort by:</b>
        <span>{sortName}</span>
      </div>
      <div className="sort__popup"  className={sortActive === index ? 'active' : ''}>
        {isVisiblePop && (
          <ul>
            {sortCats.map((value, index) => (
              <li
                key={index}
                onClick={() => onSortClick(index)}
               
              >
                {value}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
export default Sort;
