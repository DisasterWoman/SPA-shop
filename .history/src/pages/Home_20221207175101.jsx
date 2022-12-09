import React from 'react'

export const  = () => {
  return (
    <>
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <SearchBar />
        <h2 className="content__title">All Dresses</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : items.map((item) => <DressBlock key={item.id} {...item} />)}
        </div>
    </>
  )
}
