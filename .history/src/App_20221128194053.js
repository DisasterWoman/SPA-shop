import './scss/app.scss';
import Categories from './scss/components/Categories/Categories';
import DressBlock from './scss/components/DressBlock/DressBlock';
import Header from './scss/components/Header/Header';
import Sort from './scss/components/Sort/Sort';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">All Dresses</h2>
          <div className="content__items">
            <DressBlock />
            <DressBlock />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
