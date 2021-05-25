import PropTypes from 'prop-types';
// Destructure props object
const Footer = ({ theme, text }) => {
  return (
    <footer className={theme}>
      <p>&copy; {text}</p>
    </footer>
  );
};

Footer.defaultProps = {
  text: 'Texte par défaut',
  theme: 'dark',
};

Footer.propTypes = {
  text: PropTypes.string,
  theme: PropTypes.string,
};

export default Footer;
