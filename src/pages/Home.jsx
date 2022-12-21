import React from 'react';
import axios from 'axios';
import Categories from '../components/Categories/Categories';
import Sort from '../components/Sort/Sort';
import DressBlock from '../components/DressBlock/DressBlock';
import Skeleton from '../components/Skeletons/SkeletonMain';
import Pagination from '../components/Pagination/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';
const Home = ({ searchValue }) => {
  const categoryId = useSelector((state) => state.filterSlice.categoryId);
  const dispatch = useDispatch();

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  // const [categoryId, setCategoryId] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortType, setSortType] = React.useState({
    name: 'orders',
    sortProperty: 'rating',
  });

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id))
  };

  React.useEffect(() => {
    setIsLoading(true);
    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `search=${searchValue}` : '';
    axios
      .get(
        `https://638caec6eafd555746abf518.mockapi.io/items?page=${currentPage}&limit=4${category}&sortBy=${sortBy}&order=${order}${search}`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
  }, [categoryId, sortType, searchValue, currentPage]);

  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
  const dresses = items
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue)) {
        return true;
      }
      return false;
    })
    .map((item) => <DressBlock key={item.id} {...item} />);

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={onClickCategory} />
        <Sort value={sortType} onChangeSort={(id) => setSortType(id)} />
      </div>
      <h2 className="content__title">All Dresses</h2>
      <div className="content__items">{isLoading ? skeletons : dresses}</div>
      <Pagination onChangePage={(num) => setCurrentPage(num)} />
    </>
  );
};
export default Home;
