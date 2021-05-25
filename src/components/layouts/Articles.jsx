// Afficher les data
import articles from '../data';

articles.map(article => {
  return `<a href="!#">${article.title}</a>`;
});
