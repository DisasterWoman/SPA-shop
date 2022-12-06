import './scss/app.scss';
import Categories from './components/Categories/Categories';
import DressBlock from './components/DressBlock/DressBlock';
import Header from './components/Header/Header';
import Sort from './components/Sort/Sort';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">  <SearchBar
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
