import React from "react";

const Categories = ({ filterItem, uniqueCategories }) => {
  return (
    <div className="btn-container">
      {uniqueCategories.map((category, index) => {
        return (
          <button
            key={index}
            type="button"
            className="filter-btn"
            onClick={() => filterItem(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
