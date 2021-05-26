import { useState, useEffect, Fragment } from 'react';
import data from './data';
import MenuList from './MenuList';
import Categories from './Categories';

// Chaque element du set, devient un élément du tableau filteredCategories
const filteredCategories = [
  'Tout',
  ...new Set(data.map(item => item.category)),
];

const Menu = () => {
  const [products, setProducts] = useState(data);
  const [categories, setCategories] = useState(filteredCategories);
  return (
    <section>
      <Categories categories={categories} />
      <MenuList items={products} />
    </section>
  );
};

export default Menu;
