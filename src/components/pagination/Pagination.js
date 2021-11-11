import React from "react";
import "./pagination.css";
export default function Pagination() {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div>
      <div className="pagination">
        {pages.map((pageNO, index) => {
          return (
            <div className="pagination_button" key={index}>
              {pageNO}
            </div>
          );
        })}
      </div>
    </div>
  );
}
