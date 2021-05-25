import PropType from 'prop-types';
import Paragraph from './Paragraph';

const Article = ({ title, body }) => {
  return (
    <article>
      <h5 className={`card-title`}>{title}</h5>
      <div className="card mt-3" style={{ margin: 'auto' }}>
        <div className="card-body">
          <Paragraph body={body} />
        </div>
      </div>
    </article>
  );
};

Article.propTypes = {
  title: PropType.string.isRequired,
  body: PropType.string.isRequired,
};

export default Article;
