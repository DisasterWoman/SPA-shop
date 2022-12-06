import React, {useState} from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = 
  return (
    <div className="categories">
      <ul>
        <li className="active">Все</li>
        <li>Выпускные</li>
        <li>Свадебные</li>
        <li>Повседневные</li>
        <li>Винтажные</li>
        <li>Готические</li>
      </ul>
    </div>
  );
}

export default Categories;
