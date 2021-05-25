import PropType from 'prop-types';

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
      <nav>
        <ul>
          <li>
            <a href="!#">Home</a>
          </li>
          <li>
            <a href="!#">About</a>
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
