import { useState } from "react";
const Pagination = ({ pages }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = [];
  for (let i = 1; i <= 7 && i <= pages; i++) {
    pageNumbers.push(i);
  }

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const previousPage = () => {
    setCurrentPage((prev) => prev - 1);
  };
  return (
    <div className="flex items-center flex-col">
      <p>
        Page {currentPage} out of {pages}
      </p>
      <div className="flex flex-row mt-2">
        <button
          className="bg-green-200 px-2 rounded-lg mr-3"
          onClick={previousPage}
        >
          &lt;
        </button>
        {pageNumbers.map((page, index) => (
          <p
            key={index}
            className={`mx-2 px-2 ${page === currentPage ? " bg-green-400" : ""}`}
          >
            {page}
          </p>
        ))}
        <button className="bg-green-200 px-2 rounded-lg" onClick={nextPage}>
          &gt;
        </button>
      </div>
    </div>
  );
};
export default Pagination;
