import { NavLink } from 'react-router-dom';
import PropType from 'prop-types';

const Header = ({ title }) => {
  return (
    <header>
      <nav className={`navbar navbar-expand-lg navbar-light bg-light`}>
        <h1>{title}</h1>
        <ul className={`navbar-nav me-auto mb-2 mb-lg-0`}>
          <li className={`nav-item`}>
            <NavLink exact to="/" className={`nav-link`}>
              Home
            </NavLink>
          </li>
          <li className={`nav-item`}>
            <NavLink to="/about" className={`nav-link`}>
              About
            </NavLink>
          </li>
          <li className={`nav-item`}>
            <NavLink to="/users" className={`nav-link`}>
              Users
            </NavLink>
          </li>
          <li className={`nav-item`}>
            <NavLink to="/blog" className={`nav-link`}>
              Blog
            </NavLink>
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
