/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import axios from 'axios';
import Categories from '../components/Categories/Categories';
import Sort from '../components/Sort/Sort';
import DressBlock from '../components/DressBlock/DressBlock';
import Skeleton from '../components/Skeletons/SkeletonMain';
import Pagination from '../components/Pagination/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, setSort, setCurrentPage, setFilters } from '../redux/slices/filterSlice';
import { GlobalContext } from '../App';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { list } from '../components/Sort/Sort';

const Home = () => {
  const { searchValue } = React.useContext(GlobalContext);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const { categoryId, sort, currentPage } = useSelector((state) => state.filterSlice);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (num) => {
    dispatch(setCurrentPage(num));
  };
  const fetchDresses = () => {
    setIsLoading(true);
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `search=${searchValue}` : '';
    axios
      .get(
        `https://638caec6eafd555746abf518.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
  };

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = list.find((obj) => obj.sortProperty === params.sortProperty);
      dispatch(
        setFilters({
          ...params,
          sort,
        }),
      );
      isSearch.current = true;
    }
  }, []);

  React.useEffect(() => {
    if (!isSearch.current) {
      fetchDresses();
    }
    isSearch.current = false;
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sort.sortProperty, currentPage]);

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
        <Sort value={sort.sort} onChangeSort={(id) => setSort(id)} />
      </div>
      <h2 className="content__title">All Dresses</h2>
      <div className="content__items">{isLoading ? skeletons : dresses}</div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </>
  );
};
export default Home;
