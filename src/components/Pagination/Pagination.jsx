import React from 'react';
import styles from './pagination.module.scss';
import ReactPaginate from 'react-paginate';

const Pagination = ({ currentPage, onChangePage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={currentPage - 1}
      renderOnZerocurrentPage={null}
    />
  );
};

export default Pagination;
