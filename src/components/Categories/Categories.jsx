import React from 'react';

function Categories({value, onClickCategory}) {
  
  const categories = ['All', 'Prom', 'Wedding', 'Vintage', 'Gothic', 'Casual'];

  return (
    <div className="categioriesWrap">
      <div className="categories">
        <ul>
          {categories.map((catValue, index) => (
            <li
              key={index}
              onClick={() => onClickCategory(index)}
              className={value === index ? 'active' : ''}
            >
              {catValue}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
  

export default Categories;
   
     