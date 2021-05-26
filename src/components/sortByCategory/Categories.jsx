import React from 'react';

const Categories = ({ categories, filterProducts }) => {
  return (
    <div className={'btn-container'}>
      {categories.map(category => {
        return (
          <button onClick={() => filterProducts(category)} key={category}>
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
