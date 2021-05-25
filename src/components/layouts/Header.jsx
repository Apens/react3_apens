import PropType from 'prop-types';

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
      <nav className={`navbar navbar-expand-lg navbar-light bg-light`}>
        <ul className={`navbar-nav me-auto mb-2 mb-lg-0`}>
          <li className={`nav-item`}>
            <a href="!#" className={`nav-link`}>
              Home
            </a>
          </li>
          <li className={`nav-item`}>
            <a href="!#" className={`nav-link`}>
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Header.defaultProps = {
  title: 'Titre par défaut',
};

Header.propTypes = {
  title: PropType.string.isRequired,
};

export default Header;
