import { useState, useEffect, Fragment } from 'react';
import data from './data';
import MenuList from './MenuList';
import Categories from './Categories';

// Avec le spread operator (...) Chaque element du set, devient un élément du tableau filteredCategories
const filteredCategories = [
  'Tout',
  ...new Set(data.map(item => item.category)),
];

const Menu = () => {
  const [products, setProducts] = useState(data);
  const [categories, setCategories] = useState(filteredCategories);

  const filterProducts = category => {
    // setProducts selon la valeur de category
    if (category === 'Tout') {
      setProducts(data);
      return;
    }

    const filteredProducts = data.filter(
      // On ne retourne que les produits dont la catégorie est égale à celle qu'on reçoit en param.
      product => product.category === category
    );

    setProducts(filteredProducts);
  };

  return (
    <section>
      <Categories categories={categories} filterProducts={filterProducts} />
      <MenuList items={products} />
    </section>
  );
};

export default Menu;
