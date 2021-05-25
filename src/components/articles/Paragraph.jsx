import { Fragment, useState } from 'react';
import PropType from 'prop-types';

const Paragraph = ({ body }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [buttonText, setButtonText] = useState('Read More');

  const maybeIsVisible = () => {
    buttonText === 'Read More'
      ? setButtonText('Hide')
      : setButtonText('Read More');

    setIsVisible(!isVisible);
  };
  return (
    <Fragment>
      <p className={`text-info`}>
        {isVisible ? body : body.substr(0, 50)}
        <button className={`btn btn-xs btn-info`} onClick={maybeIsVisible}>
          {buttonText}
        </button>{' '}
      </p>
    </Fragment>
  );
};

Paragraph.propTypes = {
  body: PropType.string.isRequired,
};

export default Paragraph;
