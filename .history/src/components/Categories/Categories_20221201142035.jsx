import React, {useState} from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = ['All', 'Prom', 'Wedding', 'Vintage', 'Gothic', 'Casual'];

  const onClickCategory = (index) => {
    setActiveIndex(index)
  }
  return (
    <div className="categories">
      <ul>
      {categories.map((value) => (
            <li className="active">Все</li>

      )
        )}

      </ul>
    </div>
  );
}

export default Categories;
   
        // <li className="active">Все</li>
        // <li>Выпускные</li>
        // <li>Свадебные</li>
        // <li>Повседневные</li>
        // <li>Винтажные</li>
        // <li>Готические</li>