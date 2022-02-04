import { NavLink } from 'react-router-dom';
import styles from './NavigationStyle.module.css';
function Navigation() {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${styles.activeLink}` : `${styles.link}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) =>
          isActive ? `${styles.activeLink}` : `${styles.link}`
        }
      >
        Movies
      </NavLink>
    </nav>
  );
}

export default Navigation;
