import React from 'react';

const Categories = ({ categories }) => {
  return (
    <div className={'btn-container'}>
      {categories.map(category => {
        return <button key={category}>{category}</button>;
      })}
    </div>
  );
};

export default Categories;
