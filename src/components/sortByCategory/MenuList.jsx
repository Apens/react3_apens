import React, { Fragment } from 'react';

const MenuList = ({ items }) => {
  return (
    <Fragment>
      {items.map(product => {
        const { id, name, category } = product;
        return (
          <Fragment key={id}>
            <article className={'card'}>
              <h2 className={'text-info'}>{name}</h2>
              <p className={'text-dark'}>{category}</p>
            </article>
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default MenuList;
