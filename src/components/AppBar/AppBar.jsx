import { NavLink } from 'react-router-dom';
import s from './AppBar.module.scss';

const setActive = ({ isActive }) =>
  isActive ? `${s.navLink} ${s.activeLink}` : `${s.navLink}`;

export const AppBar = () => {
  return (
    <header className={s.header}>
      <NavLink to="/" className={setActive}>
        Home
      </NavLink>
      <NavLink to="/catalogs" className={setActive}>
        Catalogs
      </NavLink>
      <NavLink to="/favorites" className={setActive}>
        Favorites
      </NavLink>
    </header>
  );
};
