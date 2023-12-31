import { useState } from "react";
const Pagination = ({ pages, currentPage, nextPage, previousPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= 7 && i <= pages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center flex-col">
      <p>
        Page {currentPage} out of {pages}
      </p>
      <div className="flex flex-row mt-2">

        {/* previous page button */}
        <button
          className="bg-green-200 px-2 rounded-lg mr-2"
          onClick={previousPage}
        >
          &lt;
        </button>

        {/* number of pages */}
        {pageNumbers.map((page, index) => (
          <p
            key={index}
            className={`mr-2 px-2 ${
              page === currentPage ? " bg-green-300" : ""
            }`}
          >
            {page}
          </p>
        ))}

        {/* next page button */}
        <button className="bg-green-200 px-2 rounded-lg" onClick={nextPage}>
          &gt;
        </button>
      </div>
    </div>
  );
};
export default Pagination;
