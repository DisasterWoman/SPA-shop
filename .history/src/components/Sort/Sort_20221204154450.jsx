import React, {useState} from 'react';
import './_sort.scss';

function Sort() {
  const [sortActive, setSortActive] = useState(0);
  const [isVisiblePop, setIsVisiblePop] = useState(false);
  const sortCats = ['orders', 'veiws', 'rat']
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
        <span onClick={() => onClickPop()}></span>
      </div>
      <div className="sort__popup">
        {isVisiblePop && (
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
        )}
      </div>
    </div>
  );
}
export default Sort;
