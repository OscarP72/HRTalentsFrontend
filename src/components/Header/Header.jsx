import './Header.css';

import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { UserContext } from '../../context/userContext';

const Header = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <header>
      <h1>HRTalents</h1>
      {user !== null && <h2>Hola {user.username}</h2>}
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/sobrenosotros">Sobre Nosotros</NavLink>
          </li>

          {user !== null ? (
            <>
              <li>
                <NavLink to="/empleados">Empleados</NavLink>
              </li>
              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
