import React from 'react';
import PropTypes from 'prop-types';

const Messages = ({ message, level }) => {
  return (
    <div className={`messages alert alert-${level}`}>
      <p className={`text-${level}`}>{message}</p>
    </div>
  );
};

Messages.defaultProps = {
  level: 'success',
  message: 'This is a great success',
};

Messages.propTypes = {
  level: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Messages;
