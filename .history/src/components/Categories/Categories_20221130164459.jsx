import React, {useState} from 'react';

function Categories() {
  const [activeIndex, setstate] = useState(initialState)
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

export default Categorie