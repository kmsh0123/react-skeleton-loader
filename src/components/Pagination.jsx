import React from 'react';
import "./Pagination.css";

const Pagination = ({totalPosts,pagesPerPage,setCurrentPage,currentPage,setSearchParams}) => {


  const pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / pagesPerPage); i++) {
      pages.push(i);
  }

  return (
    <div className='pagination'>
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => {
                            setCurrentPage(page)
                            setSearchParams(`?page=${page}`)
                        }}
                        className={page == currentPage ? "active" : ""}>
                        {page}
                    </button>
                );
            })}
        </div>
  );
};

export default Pagination;
