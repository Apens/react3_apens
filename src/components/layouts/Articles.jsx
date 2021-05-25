// Afficher les data
import articles from '../data';
import { Fragment } from 'react';

const Articles = () => {
  return (
    <Fragment>
      {articles.map(article => {
        return (
          <ul key={article.id} className={`list-group`}>
            <li className={`list-group-item`}>
              <a href="!#">{article.title}</a>
            </li>
          </ul>
        );
      })}
    </Fragment>
  );
};

export default Articles;
