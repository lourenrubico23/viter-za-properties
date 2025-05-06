import React from "react";
import ButtonSpinner from "./spinners/ButtonSpinner";

const LoadMoreProperties = ({
  fetchNextPage,
  isFetchingNextPage,
  hasNextPage,
  result,
  setPage,
  page,
  text = "",
}) => {
  if (page === result?.total_pages) {
    return <p className="text-gray-400 text-base">{text}</p>;
  }
  if (!hasNextPage) {
    return <p className="text-gray-400 text-base">{text}</p>;
  }
  if (hasNextPage) {
    return (
      <div className="my-10">
        <button
          type="button"
          disabled={isFetchingNextPage}
          onClick={() => {
            setPage((prev) => prev + 1);
            fetchNextPage();
          }}
          className="text-sm font-semibold relative pb-1 transition duration-300 
                before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 
                before:bg-secondary before:transition-transform before:duration-300 before:scale-x-0 
                hover:before:scale-x-100"
        >
          {isFetchingNextPage ? <ButtonSpinner /> : <span>Load more</span>}
        </button>
      </div>
    );
  }
};

export default LoadMoreProperties;
