import React, {useState} from 'react';
import './_sort.scss';

function Sort({value, onChangeSort}) {
  console.log(value)
  
  const [isVisiblePop, setIsVisiblePop] = useState(false);
  const list = [
    {name: 'orders(DESC)', sortProperty: 'rating'},
    {name: 'orders(ASC)', sortProperty: '-rating'},
    {name: 'price(DESC)', sortProperty: 'price'},
    {name: 'price(ASC)', sortProperty: '-price'},
    {name: 'name(DESK)', sortProperty: 'title'},
    {name: 'name(ASK)', sortProperty: '-title'},
  ]
  const onSortClick = (index) => {
    onChangeSort(index);
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
        <span>{value.name}</span>
      </div>
      {isVisiblePop && (
        <div className="sort__popup">
          <ul>
            {list.map((obj, index) => (
              <li
                key={index}
                onClick={() => onSortClick(obj)}
                className={value.sortProperty === obj.sortProperty ? 'active' : ''}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default Sort;
