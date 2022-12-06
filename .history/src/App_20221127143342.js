import './scss/app.scss';
import Categories from './scss/components/Categories/Categories';
import DressBlock from './scss/components/DressBlock/DressBlock';
import Header from './scss/components/Header/Header';
import Sort from './scss/components/Sort/Sort';

function App() {
  return (
    <div class="wrapper">
    <Header/>
      <div class="content">
        <div class="container">
          <div class="content__top">
          <Categories/>
          <Sort/>
          </div>
          <h2 class="content__title">All dresses</h2>
          <div class="content__items">
          <DressBlock/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
