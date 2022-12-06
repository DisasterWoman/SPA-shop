import React, {useState} from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = ['All', 'Prom', 'Wedding', 'Vintage', 'Gothic', 'Casual'];

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="categories">
      </ul>
    </div>
  );
}

export default Categories;
