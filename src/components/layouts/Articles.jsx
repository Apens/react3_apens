import articles from '../data';
import { Fragment } from 'react';
import Article from './Article';

const Articles = () => {
  return (
    <Fragment>
      {articles.map(article => {
        return (
          <Article key={article.id} title={article.title} body={article.body} />
        );
      })}
    </Fragment>
  );
};

export default Articles;
